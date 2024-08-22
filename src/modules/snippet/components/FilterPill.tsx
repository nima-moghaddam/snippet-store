import { cloneElement, ReactElement } from "react";

interface Props {
  name: string;
  icon: ReactElement;
}

const FilterPill = ({ icon, name }: Props) => {
  return (
    <div className="mx-2 flex cursor-pointer items-center justify-center rounded-icon bg-white px-2 py-1 shadow">
      {cloneElement(icon, {
        className: `w-3 h-3 text-gray-dark`,
      })}
      <span className="ms-2 text-sm text-gray-dark">{name}</span>
    </div>
  );
};

export default FilterPill;
1;
