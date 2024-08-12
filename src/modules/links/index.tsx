import useFilterStore from "../../store/useFilterStore"
import LinkCard from "./LinkCard"

const LinksPage = () => {
  const { links } = useFilterStore((state) => state)

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {links.map((link) => (
          <LinkCard key={link.title} link={link.link} title={link.title} />
        ))}
      </div>
    </section>
  )
}

export default LinksPage
