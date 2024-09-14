import { FaTags } from "react-icons/fa6";
import { Tags } from "../../constants/tags";
import { LinkList, SnippetList } from "../../data";
import TotalCountCard from "./components/TotalCountCard";
import { FaCode } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { RiNumbersFill } from "react-icons/ri";

const tagList = Object.values(Tags).map((tag) => {
  const tagCount = SnippetList.filter((item) => item.tags.includes(tag)).length;
  return { [tag]: +tagCount };
});

const totalTagCountSum = tagList.reduce((sum, item) => {
  const value = Object.values(item)[0];
  return sum + value;
}, 0);

const snippetCount = SnippetList.length;
const linksCount = LinkList.length;
const totalData = snippetCount + linksCount;

const countList = [
  { title: "Snippets", count: snippetCount, icon: <FaCode /> },
  { title: "Links", count: linksCount, icon: <FaLink /> },
  { title: "Tags", count: totalTagCountSum, icon: <FaTags /> },
  { title: "Total Data", count: totalData, icon: <RiNumbersFill /> },
];

const Statistics = () => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
      {countList.map((i) => (
        <TotalCountCard
          key={i.title}
          title={i.title}
          count={i.count}
          icon={i.icon}
        />
      ))}
    </div>
  );
};

export default Statistics;
