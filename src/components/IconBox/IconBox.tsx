import { ReactElement, cloneElement } from "react";

interface Props {
  icon: ReactElement;
  isActive: boolean;
}

const IconBox = ({ icon, isActive }: Props) => {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-icon shadow-icon ${isActive ? "bg-secondary" : "bg-white"}`}
    >
      {cloneElement(icon, {
        className: `w-4 h-4 ${isActive ? "text-white" : "text-gray-dark"}`,
      })}
    </div>
  );
};

export default IconBox;
