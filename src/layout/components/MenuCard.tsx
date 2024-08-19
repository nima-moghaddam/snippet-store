import { ReactElement } from "react";
import IconBox from "../../components/IconBox/IconBox";

interface Props {
  icon: ReactElement;
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  classes?: string;
}

const MenuCard = ({ icon, classes = "", isActive, title, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-icon px-3 ${!isActive ? "bg-transparent" : "bg-white py-3 shadow-card"} ${classes}`}
    >
      <div className="flex items-center">
        <IconBox icon={icon} isActive={isActive} />
        <span
          className={`ms-3 text-base ${isActive ? "bg-transparent font-bold text-gray-dark" : "font-light text-gray"}`}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default MenuCard;
