import { useLocation, useNavigate } from "react-router";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const pathList = pathname.split("/");
  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      {pathList.slice(1).map((url) => (
        <div onClick={()=>navigate(`/$`)}>{url}</div>
      ))}
    </div>
  );
};

export default BreadCrumb;
