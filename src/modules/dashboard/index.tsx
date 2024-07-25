import SnippetCard from "../../components/snippet-card"
import { Snippets } from "../../data"

const Dashboard = () => {
  return (
    <div className="h-full">
      {Snippets.map((item) => (
        <SnippetCard key={item.title} details={item} />
      ))}
    </div>
  )
}

export default Dashboard
