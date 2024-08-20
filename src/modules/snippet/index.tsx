import { useState } from "react";
import { FaThList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import SnippetList from "./SnippetList";
import useFilterStore from "../../store/useFilterStore";
import SnippetCard from "./SnippetCard";

const SnippetPage = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const { snippets } = useFilterStore((state) => state);

  const onViewChange = () => {
    if (view === "grid") setView("list");
    else setView("grid");
  };

  return (
    <section>
      <div
        className="mb-3 flex cursor-pointer items-center justify-end hover:text-pink"
        onClick={onViewChange}
      >
        {view === "grid" ? <BsGrid3X3GapFill /> : <FaThList />}
        <span className="ms-2">
          {view === "grid" ? "Grid view" : "List view"}
        </span>
      </div>
      {view === "grid" ? (
        <div className="columns-1 gap-4 space-y-8 sm:columns-2 lg:columns-3 xl:columns-4">
          {snippets.map((item) => (
            <SnippetCard key={item.title} snippet={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col rounded-xl border border-gray px-5 pt-5">
          {snippets.map((code, index) => (
            <SnippetList
              key={code.title}
              snippet={code}
              hasBorder={snippets.length !== index + 1}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SnippetPage;
