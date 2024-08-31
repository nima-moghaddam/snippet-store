import { useRef } from "react";
import { useLocation } from "react-router";
import Card from "../../components/card/Card";
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper";
import { SnippetList } from "../../data";
import { downloadImage } from "../../utils/downloadImage";
import useAnimation from "../../utils/useAnimation";
import DownloadImageBtn from "./DownloadImageBtn";

const SnippetPreviewPage = () => {
  const { pathname } = useLocation();
  const codeRef = useRef(null);
  const { animateClass } = useAnimation();

  const snippetTitle = decodeURIComponent(pathname.split("/").pop() || "");
  const snippet = SnippetList.find((code) => code.title === snippetTitle);

  return (
    <section>
      <Card classes={`${animateClass} mb-3`}>
        <h1 className="mb-2 text-xl font-bold text-gray-dark">Preview</h1>
        <div ref={codeRef}>
          {snippet && (
            <SyntaxHighlighterWrapper>
              {snippet.code + (snippet?.type ? `\n\n${snippet?.type}` : "")}
            </SyntaxHighlighterWrapper>
          )}
        </div>
      </Card>
      <div className="mb-10 flex flex-col items-center justify-end sm:flex-row md:mb-10">
        <DownloadImageBtn
          name="Download PNG"
          onClick={() => downloadImage("png", codeRef)}
        />
        <DownloadImageBtn
          name="Download JPEG"
          onClick={() => downloadImage("jpeg", codeRef)}
        />
      </div>
    </section>
  );
};

export default SnippetPreviewPage;
