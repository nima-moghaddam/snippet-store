import { useLocation, useNavigate } from "react-router";
import useFilterStore from "../../store/useFilterStore";
import { uppercaseFirstLetter } from "../../utils/uppercaseFirstLetter";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathList = pathname.split("/")[1] === "" ? [""] : pathname.split("/");
  const { resetFilters } = useFilterStore((state) => state);

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
    <div className="flex items-center">
      {breadcrumbs.map((item, index) => (
        <div className="text-sm">
          <span
            onClick={() => {
              navigate(item.route);
              resetFilters();
            }}
            className={`cursor-pointer ${pathList[pathList.length - 1] === item.url ? "text-dark" : "text-gray-lighter"}`}
          >
            {item.label}
          </span>
          {index !== breadcrumbs.length - 1 && <span className="mx-2">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
