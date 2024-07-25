import SyntaxHighlighter from "react-syntax-highlighter"
import { nightOwl, dark } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface Props {
  children: string
}

const SyntaxHighlighterWrapper = ({ children }: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={nightOwl}>
      {children}
    </SyntaxHighlighter>
  )
}

export default SyntaxHighlighterWrapper
