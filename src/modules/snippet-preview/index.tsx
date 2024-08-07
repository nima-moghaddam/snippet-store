import { useEffect, useRef } from "react"
import { useLocation } from "react-router"
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper"
import { SnippetList } from "../../data"
import useMenuStore from "../../store/useMenuStore"
import { downloadImage } from "../../utils/downloadImage"
import DownloadImageBtn from "./DownloadImageBtn"

const SnippetPreviewPage = () => {
  const { setHideSidebar } = useMenuStore((state) => state)
  const { pathname } = useLocation()
  const codeRef = useRef(null)

  const snippetTitle = decodeURIComponent(pathname.split("/").pop() || "")
  const snippet = SnippetList.find((code) => code.title === snippetTitle)

  useEffect(() => {
    setHideSidebar()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="font-semibold mb-2 text-[1.5rem]">Preview:</div>
      <div className="bg-slate-200 p-8 mb-8 min-w-[60%]" ref={codeRef}>
        <div className="rounded-md overflow-hidden w-full">
          {snippet && (
            <SyntaxHighlighterWrapper>
              {snippet.code + (snippet?.type ? `\n\n${snippet?.type}` : "")}
            </SyntaxHighlighterWrapper>
          )}
        </div>
      </div>
      <div className="mb-20 flex items-center">
        <DownloadImageBtn name="DOWNLOAD PNG" onClick={() => downloadImage("png", codeRef)} />
        <DownloadImageBtn name="DOWNLOAD JPEG" onClick={() => downloadImage("jpeg", codeRef)} />
      </div>
    </div>
  )
}

export default SnippetPreviewPage
