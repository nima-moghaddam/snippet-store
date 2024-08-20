import { useLocation, useNavigate } from "react-router";
import useFilterStore from "../../store/useFilterStore";
import { RouteEnum } from "../../types/RouteModels";
import { uppercaseFirstLetter } from "../../utils/uppercaseFirstLetter";

const BreadCrumb = () => {
  const { resetFilters } = useFilterStore((state) => state);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathList = pathname.split("/")[1] === "" ? [""] : pathname.split("/");

  const pathLength = pathList.length;

  const headerCreator = () => {
    let header = "";

    if (pathLength === 1) header = "Dashboard";
    else if (pathLength === 2 && pathList[1] === RouteEnum.Snippet)
      header = "Snippets";
    else if (pathLength === 3 && pathList[1] === RouteEnum.Snippet)
      header = "Snippet Detail";
    else if (pathLength === 2 && pathList[1] === RouteEnum.Links)
      header = "Links";
    else if (pathLength === 4 && pathList[2] === "preview")
      header = "Code Preview";
    return header;
  };

  const breadcrumbs = pathList.map((url, index) => {
    const pathIndex = pathList.findIndex((item) => item === url);
    const slicedPathList = pathList.slice(0, pathIndex + 1).join("/");

    return {
      label:
        index === 0
          ? "Dashboard"
          : uppercaseFirstLetter(decodeURIComponent(url)),
      url,
      route: index === 0 ? "/" : slicedPathList,
    };
  });

  return (
    <div className="flex flex-col">
      <div className="mb-1 flex items-center text-base">
        <div>
          <span className="text-gray-light">Pages</span>
          <span className="mx-2 mb-2 text-sm">/</span>
        </div>
        {breadcrumbs.map((item, index) => (
          <div>
            <span
              onClick={() => {
                navigate(item.route);
                resetFilters();
              }}
              className={`cursor-pointer ${pathList[pathList.length - 1] === item.url ? "text-dark" : "text-gray-light"}`}
            >
              {item.label}
            </span>
            {index !== breadcrumbs.length - 1 && (
              <span className="mx-2 mb-2 text-sm">/</span>
            )}
          </div>
        ))}
      </div>
      <div className="font-bolder">{headerCreator()}</div>
    </div>
  );
};

export default BreadCrumb;
