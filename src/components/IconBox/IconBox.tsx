import React, { ReactElement, cloneElement } from "react";

interface Props {
  icon: ReactElement;
  isActive: boolean;
}

const IconBox = ({ icon, isActive }: Props) => {
  return (
    <div
      className={`shadow-icon rounded-icon flex h-9 w-9 items-center justify-center ${isActive ? "bg-secondary" : "bg-white"}`}
    >
      {cloneElement(icon, {
        className: `w-5 h-5 ${isActive ? "text-white" : "text-black"}`,
      })}
    </div>
  );
};

export default IconBox;
