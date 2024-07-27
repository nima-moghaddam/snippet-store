import { ISnippetFormat } from "../../types/ISnippetFormat"
import SyntaxHighlighterWrapper from "../syntax-highlighter/SyntaxHighlighterWrapper"
import copy from "copy-to-clipboard"
import { MdContentCopy } from "react-icons/md"
import { toastFire } from "../toast/Toast"

interface Props {
  details: ISnippetFormat
}

const SnippetCard = ({ details }: Props) => {
  const { title, code, tags } = details

  const handleCopy = () => {
    copy(code)
    toastFire("success", "Code copied")
  }

  return (
    <div className="rounded-lg max-h-[700px] overflow-hidden cursor-pointer hover:shadow-3xl group">
      <div className="bg-dark pb-5 pt-3 px-3 border-b-2 border-gray shadow-lg shadow-black">
        <div className="flex justify-end h-3">
          <MdContentCopy className="w-4 h-4 hidden text-white group-hover:block hover:text-pink" onClick={handleCopy} />
        </div>
        <span className="text-white mb-2 line-clamp-1 group-hover:text-pink">{title}</span>
        <div className="flex flex-wrap">
          {tags?.map((i) => (
            <span className="text-blue me-1 hover:text-pink">#{i}</span>
          ))}
        </div>
      </div>
      <SyntaxHighlighterWrapper>{code}</SyntaxHighlighterWrapper>
    </div>
  )
}

export default SnippetCard
