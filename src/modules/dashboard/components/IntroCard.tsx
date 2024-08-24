import { cloneElement, ReactElement } from "react";
import { useNavigate } from "react-router";
import Card from "../../../components/card/Card";
import { RouteEnum } from "../../../types/RouteModels";
import { useWindowWidth } from "../../../utils/useWindowWidth";

interface Props {
  title: string;
  description: string;
  lottie: ReactElement;
  route: RouteEnum;
}

const IntroCard = ({ description, lottie, title, route }: Props) => {
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  const lottieSize = windowWidth < 480 ? 150 : 200;

  return (
    <Card
      classes="cursor-pointer h-[230px] group"
      onClick={() => navigate(`/${route}`)}
    >
      <div className="flex h-full items-center">
        <div className="me-3 flex h-full w-1/2 flex-col justify-between">
          <div>
            <div className="mb-2 font-bolder text-gray-dark">{title}</div>
            <p className="text-base text-gray">{description}</p>
          </div>
          <div className="ease-in-outtext-nowrap text-base text-gray transition-all duration-150 group-hover:text-[0.9rem] group-hover:font-bolder group-hover:text-secondary">
            View More
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-start overflow-visible">
          {cloneElement(lottie, {
            height: lottieSize,
            width: lottieSize,
          })}
          {/* {lottie} */}
        </div>
      </div>
    </Card>
  );
};

export default IntroCard;
