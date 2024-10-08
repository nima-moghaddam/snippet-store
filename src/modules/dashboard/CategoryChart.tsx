import Card from "../../components/card/Card";
import Chart from "../../components/chart";
import { Category } from "../../constants/Category";
import { SnippetList, LinkList } from "../../data";

const categoryList = Object.values(Category).map((category) => {
  const categoryCount = [...SnippetList, ...LinkList].filter(
    (item) => item.category === category,
  ).length;
  return { [category]: categoryCount };
});

const totalCategoryCountSum = categoryList.reduce((sum, item) => {
  const value = Object.values(item)[0];
  return sum + value;
}, 0);

const categoryPercentsList = categoryList.map((item) => {
  const key = Object.keys(item)[0];
  const value = Object.values(item)[0];
  const percentage = (value / totalCategoryCountSum) * 100;
  return { [key]: Math.round(percentage) };
});

const CategoryChart = ({ classes }: { classes: string }) => {
  return (
    <Card
      classes={`${classes}`}
      title="Categoty Chart"
      subTitle="Comlpete category statistics are defined in chart."
    >
      <div className="mt-10 flex items-center justify-center pe-24 ps-0 sm:mt-0 sm:p-5">
        <Chart data={categoryPercentsList} />
      </div>
    </Card>
  );
};

export default CategoryChart;
