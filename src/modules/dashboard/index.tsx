import SnippetCard from "../../components/snippet-card/SnippetCard"
import useFilterStore from "../../store/useFilterStore"

const Dashboard = () => {
  const { snippets } = useFilterStore((state) => state)

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-8 p-4">
      {snippets.map((item) => (
        <SnippetCard key={item.title} details={item} />
      ))}
    </div>
  )
}

export default Dashboard
