import Card from "../../components/card/Card";
import Chart from "../../components/chart";
import { Tags } from "../../constants/Tags";
import { SnippetList } from "../../data";
import { RouteEnum } from "../../types/RouteModels";
import CodeAnimation from "../../lotties/CodeAnimation";
import NavigateCard from "./NavigateCard";
import DocumentAnimation from "../../lotties/DocumentAnimation";
import { useWindowWidth } from "../../utils/useWindowWidth";
import IntroCard from "./components/IntroCard";
import {
  Category,
  LinksCategory,
  SnippetCategory,
} from "../../constants/Category";
import CategoryPill from "./components/CategoryPill";
import { categoryIconPicker } from "../../utils/categoryIconPicker";

const Dashboard = () => {
  const windowWidth = useWindowWidth();
  const lottieSize = windowWidth < 480 ? 150 : 200;

  const snippetCategories = Object.values(SnippetCategory);
  const linkCategories = Object.values(LinksCategory);

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
    <section>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
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
      <div className="flex flex-row lg:flex-col">
        <Card classes="w-full lg:w-2/3">
          <div className="flex flex-col">
            <div className="mb-3 font-bolder text-gray-dark">Category List</div>
            <p className="mb-3 text-base text-gray">
              This is the list of all active categories. for more info click on
              each pill.
            </p>
            <div className="flex flex-wrap">
              {snippetCategories.map((category) => (
                <CategoryPill
                  key={category}
                  name={category}
                  icon={categoryIconPicker(category)}
                  route={RouteEnum.Snippet}
                />
              ))}
              {linkCategories.map((category) => (
                <CategoryPill
                  key={category}
                  name={category}
                  icon={categoryIconPicker(category)}
                  route={RouteEnum.Links}
                />
              ))}
            </div>
          </div>
        </Card>
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
