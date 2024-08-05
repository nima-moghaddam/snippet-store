import { ISnippet } from "../../types/ISnippetModels"
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper"
import copy from "copy-to-clipboard"
import { useNavigate } from "react-router"
import TagList from "./components/TagList"
import { toastFire } from "../../components/toast/Toast"
import { MdContentCopy } from "react-icons/md"

interface Props {
  details: ISnippet
}

const SnippetCard = ({ details }: Props) => {
  const navigate = useNavigate()
  const { title, code, tags, type } = details

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    copy(code + (`\n${type}` || ""))
    toastFire("success", "Code copied")
  }

  return (
    <div
      onClick={() => navigate(`/${title}`)}
      className="rounded-lg max-h-[700px] overflow-hidden cursor-pointer hover:shadow-3xl group z-20"
    >
      <div className="bg-dark pb-5 pt-3 px-3 border-b-2 border-gray shadow-lg shadow-black">
        <div className="flex justify-end h-3">
          <MdContentCopy
            className="w-4 h-4 hidden text-white group-hover:block hover:text-pink z-30"
            onClick={handleCopy}
          />
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
