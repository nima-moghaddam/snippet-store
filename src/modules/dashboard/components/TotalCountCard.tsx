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
        <div className="flex flex-col items-start md:flex-row md:items-center">
          <div className="me-0 font-bold text-gray-dark md:me-5">{title}</div>
          <div className="flex items-center">
            <CountUp
              duration={5}
              className="text-xl font-bold text-gray-dark"
              start={0}
              end={count}
            />
            <span className="ms-1 mt-3 text-xs font-light text-gray">
              Total
            </span>
          </div>
        </div>
        <IconBox size="lg" isActive gradiant icon={icon} />
      </div>
    </Card>
  );
};

export default TotalCountCard;
