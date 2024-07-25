import { ISnippetFormat } from "../../types/ISnippetFormat"
import SyntaxHighlighterWrapper from "../syntax-highlighter/SyntaxHighlighterWrapper"

interface Props {
  details: ISnippetFormat
}

const SnippetCard = ({ details }: Props) => {
  const { title, code } = details

  return (
    <div className="rounded-md max-h-[700px] overflow-hidden cursor-pointer hover:shadow-3xl">
      <div className="bg-dark p-5 border-b-2 border-gray shadow-lg shadow-black">
        <span className="text-white">{title}</span>
      </div>
      <SyntaxHighlighterWrapper>{code}</SyntaxHighlighterWrapper>
    </div>
  )
}

export default SnippetCard
