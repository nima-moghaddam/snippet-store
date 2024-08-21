import { ReactElement } from "react";
import IconBox from "../../../components/IconBox/IconBox";
import CountUp from "react-countup";
import Card from "../../../components/card/Card";

interface Props {
  icon: ReactElement;
  count: number;
  title: string;
}

const TotalCountCard = ({ count, icon, title }: Props) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-gray-dark font-bold me-5">{title}</div>
          <div className="flex items-center">
            <CountUp className="text-xl font-bold" start={0} end={count} />
            <span className="text-xs ms-1 mt-3 text-gray font-light">Total</span>
          </div>
        </div>
        <IconBox size="lg" isActive gradiant icon={icon} />
      </div>
    </Card>
  );
};

export default TotalCountCard;
