import { useState } from "react"
import { FaThList } from "react-icons/fa"
import { BsGrid3X3GapFill } from "react-icons/bs"
import SnippetList from "./SnippetList"
import useFilterStore from "../../store/useFilterStore"
import SnippetCard from "./SnippetCard"

const Dashboard = () => {
  const [view, setView] = useState<"grid" | "list">("grid")
  const { snippets } = useFilterStore((state) => state)

  const onViewChange = () => {
    if (view === "grid") setView("list")
    else setView("grid")
  }

  return (
    <section>
      <div className="flex justify-end items-center cursor-pointer mb-3 hover:text-pink" onClick={onViewChange}>
        {view === "grid" ? <BsGrid3X3GapFill /> : <FaThList />}
        <span className="ms-2">{view === "grid" ? "Grid view" : "List view"}</span>
      </div>
      {view === "grid" ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-8">
          {snippets.map((item) => (
            <SnippetCard key={item.title} snippet={item} />
          ))}
        </div>
      ) : (
        <div className="border border-gray rounded-xl pt-5 px-5 flex flex-col">
          {snippets.map((code, index) => (
            <SnippetList key={code.title} snippet={code} hasBorder={snippets.length !== index + 1} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Dashboard
