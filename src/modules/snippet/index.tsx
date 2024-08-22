import { useState } from "react";
import { FaThList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import SnippetList from "./SnippetList";
import useFilterStore from "../../store/useFilterStore";
import SnippetCard from "./SnippetCard";
import Card from "../../components/card/Card";
import useAnimation from "../../utils/useAnimation";

const SnippetPage = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const { snippets } = useFilterStore((state) => state);
  const { animateClass } = useAnimation();

  const onViewChange = () => {
    if (view === "grid") setView("list");
    else setView("grid");
  };

  return (
    <section>
      <div className="mb-3 flex justify-end">
        <span
          className="flex cursor-pointer items-center text-gray-dark hover:text-pink"
          onClick={onViewChange}
        >
          {view === "grid" ? <BsGrid3X3GapFill /> : <FaThList />}
          <span className="ms-2">
            {view === "grid" ? "Grid view" : "List view"}
          </span>
        </span>
      </div>
      {view === "grid" ? (
        <div className="columns-1 gap-4 space-y-8 sm:columns-2 lg:columns-3 xl:columns-4">
          {snippets.map((item) => (
            <SnippetCard key={item.title} snippet={item} />
          ))}
        </div>
      ) : (
        <Card classes={`flex flex-col rounded-xl px-5 py-5 ${animateClass}`}>
          {snippets.map((code, index) => (
            <SnippetList
              key={code.title}
              snippet={code}
              hasBorder={snippets.length !== index + 1}
            />
          ))}
        </Card>
      )}
    </section>
  );
};

export default SnippetPage;
