import { useRef } from "react";
import { useLocation } from "react-router";
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
    <div
      className={`mt-8 flex flex-col items-center justify-center ${animateClass}`}
    >
      <div className="mb-2 text-[1.5rem] font-semibold">Preview:</div>
      <div
        className="mb-8 w-[100%] bg-slate-200 p-4 md:w-[60%] md:p-8"
        ref={codeRef}
      >
        <div className="w-full overflow-hidden rounded-md">
          {snippet && (
            <SyntaxHighlighterWrapper>
              {snippet.code + (snippet?.type ? `\n\n${snippet?.type}` : "")}
            </SyntaxHighlighterWrapper>
          )}
        </div>
      </div>
      <div className="mb-20 flex flex-col items-center sm:flex-row">
        <DownloadImageBtn
          name="DOWNLOAD PNG"
          onClick={() => downloadImage("png", codeRef)}
        />
        <DownloadImageBtn
          name="DOWNLOAD JPEG"
          onClick={() => downloadImage("jpeg", codeRef)}
        />
      </div>
    </div>
  );
};

export default SnippetPreviewPage;
