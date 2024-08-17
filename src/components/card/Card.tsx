import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  transparent?: boolean;
  classes?: string;
}

const Card = ({
  children,
  classes = "",
  transparent = false,
  ...props
}: Props) => {
  return (
    <div
      className={`rounded-icon px-4 py-3 ${transparent ? "bg-transparent" : "shadow-card bg-white"} ${classes}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
