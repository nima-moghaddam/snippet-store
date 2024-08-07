import { ISnippet } from "../../types/SnippetModels"
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper"
import { useNavigate } from "react-router"
import TagList from "./components/TagList"
import Toolbar from "./components/Toolbar"

interface Props {
  snippet: ISnippet
}

const SnippetCard = ({ snippet }: Props) => {
  const navigate = useNavigate()
  const { title, code, tags } = snippet

  return (
    <div
      onClick={() => navigate(`snippet/${title}`)}
      className="rounded-lg max-h-[700px] overflow-hidden cursor-pointer hover:shadow-3xl group z-20"
    >
      <div className="bg-dark pb-5 pt-4 px-3 border-b-2 border-gray shadow-lg shadow-black">
        <div className="flex justify-end h-3">
          <Toolbar snippet={snippet} isForCard />
        </div>
        <span className="text-white mb-2 line-clamp-1 group-hover:text-pink">{title}</span>
        <TagList tags={tags} />
      </div>
      <SyntaxHighlighterWrapper styles={{ scrollbarWidth: "none", paddingBottom: "1rem" }}>
        {code}
      </SyntaxHighlighterWrapper>
    </div>
  )
}

export default SnippetCard
