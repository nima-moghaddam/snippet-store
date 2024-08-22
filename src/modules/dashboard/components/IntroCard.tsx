import { ReactElement } from "react";
import { useNavigate } from "react-router";
import Card from "../../../components/card/Card";
import { RouteEnum } from "../../../types/RouteModels";

interface Props {
  title: string;
  description: string;
  lottie: ReactElement;
  classes?: string;
  route: RouteEnum;
}

const IntroCard = ({
  description,
  lottie,
  title,
  route,
  classes = "",
}: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      classes={`me-0 mb-5 md:mb-0 md:me-5 cursor-pointer h-[230px]  group w-full ${classes}`}
      onClick={() => navigate(`/${route}`)}
    >
      <div className="flex h-full items-center">
        <div className="me-3 flex h-full w-1/3 flex-col justify-between md:w-1/2">
          <div>
            <div className="mb-2 font-bolder text-gray-dark">{title}</div>
            <p className="text-base text-gray">{description}</p>
          </div>
          <div className="ease-in-outtext-nowrap text-base text-gray transition-all duration-150 group-hover:text-[0.9rem] group-hover:font-bolder group-hover:text-secondary">
            View More
          </div>
        </div>
        <div className="flex w-2/3 items-center justify-start overflow-visible md:w-1/2">
          {lottie}
        </div>
      </div>
    </Card>
  );
};

export default IntroCard;
