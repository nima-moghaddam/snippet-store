import SyntaxHighlighter from "react-syntax-highlighter"
import { nightOwl, dark, atomOneDark, atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface Props {
  children: string
}

const SyntaxHighlighterWrapper = ({ children }: Props) => {
  return (
    <SyntaxHighlighter
      codeTagProps={{ style: { fontSize: "12px" } }}
      language="javascript"
      style={nightOwl}
      customStyle={{ backgroundColor: "#304351", lineHeight: "17px", scrollbarWidth: "none" }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default SyntaxHighlighterWrapper
