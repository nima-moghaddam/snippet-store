import { MdContentCopy } from "react-icons/md"
import { toastFire } from "../../../components/toast/Toast"
import { ISnippet } from "../../../types/ISnippetModels"
import copy from "copy-to-clipboard"
import { IoCameraOutline } from "react-icons/io5"

interface Props {
  snippet: ISnippet
  isForCard?: boolean
}

const Toolbar = ({ snippet, isForCard }: Props) => {
  const { code, type, title } = snippet

  const handleCodeCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    copy(code + (`\n${type}` || ""))
    toastFire("success", "Code copied")
  }

  const handleDownloadImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(`/preview/${title}`)
  }

  return (
    <div className="flex items-center">
      <IoCameraOutline
        className={`w-5 h-5 text-black z-30 hover:text-pink cursor-pointer me-2 ${
          isForCard && "text-white hidden group-hover:block"
        }`}
        onClick={handleDownloadImage}
      />
      <MdContentCopy
        className={`w-4 h-4 text-black z-30 hover:text-pink cursor-pointer ${
          isForCard && "text-white hidden group-hover:block"
        }`}
        onClick={handleCodeCopy}
      />
    </div>
  )
}

export default Toolbar
