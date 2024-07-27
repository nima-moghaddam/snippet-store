import SnippetCard from "../../components/snippet-card/SnippetCard"
import { Snippets } from "../../data"
import { ISnippet } from "../../types/ISnippetModels"

const Dashboard = () => {
  let allSnippets: ISnippet[] = []
  Object.entries(Snippets).map(([_, value]) => {
    value.map((i: ISnippet) => allSnippets.push(i))
  })

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-8 p-4">
      {allSnippets.map((item) => (
        <SnippetCard key={item.title} details={item} />
      ))}
    </div>
  )
}

export default Dashboard
