import { ReactElement } from "react";
import Card from "../../components/card/Card";
import IconBox from "../../components/IconBox/IconBox";

interface Props {
  icon: ReactElement;
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  classes?: string;
}

const MenuItem = ({ icon, classes = "", isActive, title, onClick }: Props) => {
  return (
    <Card
      onClick={onClick}
      transparent={!isActive}
      classes={classes + " cursor-pointer"}
    >
      <div className="flex items-center">
        <IconBox icon={icon} isActive={isActive} />
        <span
          className={`text-normal ms-3 ${isActive ? "text-font-dark font-bold" : "text-font-normal font-normal"}`}
        >
          {title}
        </span>
      </div>
    </Card>
  );
};

export default MenuItem;
