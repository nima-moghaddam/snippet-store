import SnippetCard from "../../components/snippet-card/SnippetCard"
import { Snippets } from "../../data"

const Dashboard = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
      {[...Snippets, ...Snippets, ...Snippets, ...Snippets].map((item) => (
        <SnippetCard key={item.title} details={item} />
      ))}
    </div>
  )
}

export default Dashboard
