import { cloneElement, ReactElement } from "react";
import { useNavigate } from "react-router";
import { CategoryType } from "../../../constants/Category";
import useFilterStore from "../../../store/useFilterStore";
import useMenuStore from "../../../store/useMenuStore";
import { RouteEnum } from "../../../types/RouteModels";

interface Props {
  name: CategoryType;
  icon: ReactElement;
  route: RouteEnum;
}

const CategoryPill = ({ name, icon, route }: Props) => {
  const navigate = useNavigate();
  const { setActiveMenu } = useMenuStore((state) => state);
  const { setMenuFilter } = useFilterStore((state) => state);

  const onSelect = () => {
    navigate(`/${route}`);
    setActiveMenu(name);
    setMenuFilter(name, route);
  };
  return (
    <div
      onClick={onSelect}
      className="mb-2 me-2 flex cursor-pointer items-center justify-center rounded-icon bg-primary-gradient px-2 py-1 hover:shadow-icon"
    >
      {cloneElement(icon, {
        className: `w-4 h-4 text-white`,
      })}
      <span className="ms-3 text-sm text-white">{name}</span>
    </div>
  );
};

export default CategoryPill;
