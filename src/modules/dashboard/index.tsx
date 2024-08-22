import Card from "../../components/card/Card";
import Chart from "../../components/chart";
import { Tags } from "../../constants/Tags";
import { SnippetList } from "../../data";
import { RouteEnum } from "../../types/RouteModels";
import CodeAnimation from "../../lotties/CodeAnimation";
import DocumentAnimation from "../../lotties/DocumentAnimation";
import { useWindowWidth } from "../../utils/useWindowWidth";
import IntroCard from "./components/IntroCard";
import CountList from "./CountList";
import SocialLinks from "./SocialLinks";
import CategoryList from "./CategoryList";
import useAnimation from "../../utils/useAnimation";

const Dashboard = () => {
  const { animateClass } = useAnimation();
  const windowWidth = useWindowWidth();
  const lottieSize = windowWidth < 480 ? 150 : 200;

  const tagList = Object.values(Tags).map((tag) => {
    const tagCount = SnippetList.filter((item) =>
      item.tags.includes(tag),
    ).length;
    return { [tag]: tagCount };
  });

  const totalTagCountSum = tagList.reduce((sum, item) => {
    const value = Object.values(item)[0];
    return sum + value;
  }, 0);

  const tagPercentsList = tagList.map((item) => {
    const key = Object.keys(item)[0];
    const value = Object.values(item)[0];
    const percentage = (value / totalTagCountSum) * 100;
    return { [key]: Math.round(percentage) };
  });

  // const categoryList = Object.values(Category).map((category) => {
  //   const categoryCount = SnippetList.filter((item) => item.category === category).length
  //   return { [category]: categoryCount }
  // })

  return (
    <section className={animateClass}>
      <CountList />
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-2">
        <IntroCard
          description="This is for all stored legacy codes from diffrent project. Click on card for more info."
          title="Snippets"
          lottie={<CodeAnimation height={lottieSize} width={lottieSize} />}
          route={RouteEnum.Snippet}
        />

        <IntroCard
          description="A library for all utility links, web tools and blogs. Click on card for more info."
          title="Links"
          lottie={<DocumentAnimation height={lottieSize} width={lottieSize} />}
          route={RouteEnum.Links}
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <CategoryList />
        <SocialLinks />
      </div>

      {/* <div className="flex mb-20">
        <NavigateCard link={`/${RouteEnum.Snippet}`} title="Snippets" icon={RouteEnum.Snippet} classes="me-5" />
        <NavigateCard link={`/${RouteEnum.Links}`} title="Links" icon={RouteEnum.Links} />
      </div>
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <Chart barColor="bg-pink" data={tagPercentsList} title="Tags Chart" />
\      </div> */}
    </section>
  );
};

export default Dashboard;
