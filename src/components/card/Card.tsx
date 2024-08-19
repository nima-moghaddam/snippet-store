import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  classes?: string;
}

const Card = ({ children, classes = "", ...props }: Props) => {
  return (
    <div
      className={`rounded-card bg-white px-4 py-3 shadow-card ${classes}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
