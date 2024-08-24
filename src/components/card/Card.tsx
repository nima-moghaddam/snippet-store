import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classes?: string;
  title?: string;
  subTitle?: string;
  onClick?: () => void;
}

const Card = ({ children, classes = "", title, subTitle, onClick }: Props) => {
  return (
    <div
      className={`rounded-card bg-white px-4 py-3 shadow-card ${classes}`}
      onClick={onClick}
    >
      {title && <div className="mb-2 font-bolder text-gray-dark">{title}</div>}
      {subTitle && <p className="mb-3 text-base text-gray">{subTitle}</p>}
      {children}
    </div>
  );
};

export default Card;
