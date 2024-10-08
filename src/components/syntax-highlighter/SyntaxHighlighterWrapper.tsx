import SyntaxHighlighter from "react-syntax-highlighter";
import {
  // nightOwl,
  a11yLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CSSProperties } from "react";

interface Props {
  children: string;
  styles?: CSSProperties;
  fontSize?: string;
}

const SyntaxHighlighterWrapper = ({
  children,
  styles,
  fontSize = "12px",
}: Props) => {
  return (
    <SyntaxHighlighter
      codeTagProps={{ style: { fontSize } }}
      language="javascript"
      style={a11yLight}
      customStyle={{
        // backgroundColor: "white",
        lineHeight: "17px",
        padding: " 20px",
        ...styles,
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterWrapper;
