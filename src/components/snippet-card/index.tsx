import { ISnippetFormat } from "../../types/ISnippetFormat"
import SyntaxHighlighterWrapper from "../syntax-highlighter"

interface Props {
  details: ISnippetFormat
}

const SnippetCard = ({ details }: Props) => {
  const { title, code } = details

  return (
    <div className="rounded-md max-h-[150px]">
      <div className="bg-dark p-5">
        <span className="text-white">{title}</span>
      </div>
      <SyntaxHighlighterWrapper>{code}</SyntaxHighlighterWrapper>
    </div>
  )
}

export default SnippetCard
