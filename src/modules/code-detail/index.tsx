import { useLocation, useNavigate } from "react-router"
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper"
import { Tags } from "../../constants/Tags"
import { SnippetList } from "../../data"
import useFilterStore from "../../store/useFilterStore"
import useMenuStore from "../../store/useMenuStore"
import copy from "copy-to-clipboard"
import { MdContentCopy } from "react-icons/md"
import { toastFire } from "../../components/toast/Toast"

const CodeDetail = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { setTagFilter } = useFilterStore((state) => state)
  const { resetMenu } = useMenuStore((state) => state)

  const snippetTitle = decodeURIComponent(pathname.slice(1))
  const snippet = SnippetList.find((code) => code.title === snippetTitle)

  const handleTagFilter = (tag: Tags) => {
    setTagFilter(tag)
    resetMenu()
    navigate("/")
  }

  const handleCodeCopy = () => {
    if (snippet) {
      copy(snippet?.code)
      toastFire("success", "Code copied")
    }
  }

  return (
    <section>
      <div className="border-b border-slate-300 pb-5 mb-1">
        <h1 className="font-semibold text-[2rem]">{snippet?.title}</h1>
      </div>
      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-wrap">
          {snippet?.tags?.map((tag) => (
            <div className="me-1 text-blue hover:text-pink cursor-pointer" onClick={() => handleTagFilter(tag)}>
              #{tag}
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={handleCodeCopy}
            className="flex items-center justify-center px-2 py-1 hover:text-pink cursor-pointer"
          >
            <MdContentCopy className="w-4 h-4 me-2" />
            <span>Copy</span>
          </button>
        </div>
      </div>

      {snippet && (
        <div className="rounded-md overflow-hidden mb-10">
          <SyntaxHighlighterWrapper>{snippet.code}</SyntaxHighlighterWrapper>
        </div>
      )}
      {snippet?.description && (
        <div className="relative rounded-lg border px-3 py-5 border-gray">
          <span className="absolute bg-blue text-white rounded-md px-3 top-[-10px] right-3">Description</span>
          {snippet?.description}
        </div>
      )}
    </section>
  )
}

export default CodeDetail
