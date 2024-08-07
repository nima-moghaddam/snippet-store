import { LinkList } from "../../data"
import LinkCard from "./LinkCard"

const LinksPage = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-8">
        {LinkList.map((link) => (
          <LinkCard key={link.title} link={link.link} title={link.title} />
        ))}
      </div>
    </section>
  )
}

export default LinksPage
