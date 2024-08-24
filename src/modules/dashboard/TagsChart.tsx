import Card from "../../components/card/Card";
import Chart from "../../components/chart";
import { Tags } from "../../constants/tags";
import { SnippetList } from "../../data";

const tagList = Object.values(Tags).map((tag) => {
  const tagCount = SnippetList.filter((item) => item.tags.includes(tag)).length;
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

const TagsChart = ({ classes }: { classes: string }) => {
  return (
    <Card
      classes={`relative ${classes}`}
      title="Tags Chart"
      subTitle="Comlpete tags statistics are defined in chart."
    >
      <div className="flex items-center justify-center p-0 md:p-5">
        <Chart data={tagPercentsList} />
      </div>
    </Card>
  );
};

export default TagsChart;
