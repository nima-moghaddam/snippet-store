import { RouteEnum } from "../../types/RouteModels";
import CodeAnimation from "../../lotties/CodeAnimation";
import DocumentAnimation from "../../lotties/DocumentAnimation";
import IntroCard from "./components/IntroCard";
import Statistics from "./Statistics";
import SocialLinks from "./SocialLinks";
import CategoryList from "./CategoryList";
import useAnimation from "../../utils/useAnimation";
import TagsChart from "./TagsChart";
import CategoryChart from "./CategoryChart";

const Dashboard = () => {
  const { animateClass } = useAnimation();

  return (
    <section className={animateClass}>
      <Statistics />
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <IntroCard
          title="Snippets"
          description="This is for all stored legacy codes from diffrent project. Click on card for more info."
          lottie={<CodeAnimation />}
          route={RouteEnum.Snippet}
        />

        <IntroCard
          title="Links"
          description="A library for all utility links, web tools and blogs. Click on card for more info."
          lottie={<DocumentAnimation />}
          route={RouteEnum.Links}
        />
      </div>
      <div className="mb-4 flex flex-col gap-4 lg:flex-row">
        <CategoryList classes="w-full lg:w-2/3" />
        <SocialLinks classes="w-full lg:w-1/3" />
      </div>
      <div className="mb-4 flex flex-col gap-4 xl:flex-row">
        <TagsChart classes="w-full " />
        <CategoryChart classes="w-full " />
      </div>
    </section>
  );
};

export default Dashboard;
