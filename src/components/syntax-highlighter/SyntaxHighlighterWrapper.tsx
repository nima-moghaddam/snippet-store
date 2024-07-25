import SyntaxHighlighter from "react-syntax-highlighter"
import { nightOwl, dark, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface Props {
  children: string
}

const SyntaxHighlighterWrapper = ({ children }: Props) => {
  return (
    <SyntaxHighlighter
      codeTagProps={{ style: { fontSize: "12px", lineHeight: "0.3px" } }}
      language="javascript"
      style={nightOwl}
      customStyle={{ overflow: "hidden" }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default SyntaxHighlighterWrapper
