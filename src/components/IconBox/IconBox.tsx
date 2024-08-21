import { ReactElement, cloneElement } from "react";

interface Props {
  icon: ReactElement;
  isActive: boolean;
  gradiant?: boolean;
  size?: "sm" | "lg";
}

const IconBox = ({ icon, isActive, gradiant = false, size = "sm" }: Props) => {
  return (
    <div
      className={`flex items-center justify-center rounded-icon shadow-icon ${size === "sm" ? "h-9 w-9" : "h-12 w-12"} ${isActive ? (gradiant ? "bg-primary-gradient" : "bg-secondary") : "bg-white"}`}
    >
      {cloneElement(icon, {
        className: `w-4 h-4 ${isActive ? "text-white" : "text-gray-dark"}`,
      })}
    </div>
  );
};

export default IconBox;
