import copy from "copy-to-clipboard"
import React, { useState } from "react"
import { useNavigate } from "react-router"
import { toastFire } from "../../components/toast/Toast"
import { ISnippet } from "../../types/ISnippetModels"
import SyntaxHighlighterWrapper from "../../components/syntax-highlighter/SyntaxHighlighterWrapper"
import { MdContentCopy } from "react-icons/md"
import TagList from "./components/TagList"
import { FiChevronRight } from "react-icons/fi"
import { FiChevronDown } from "react-icons/fi"

interface Props {
  details: ISnippet
  hasBorder?: boolean
}

const SnippetList = ({ details, hasBorder = false }: Props) => {
  const [openList, setOpenList] = useState(false)
  const navigate = useNavigate()
  const { title, code, tags } = details

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    copy(code)
    toastFire("success", "Code copied")
  }

  return (
    <div className="flex flex-col mb-4">
      <TagList tags={tags} />
      <div className="flex items-center mt-1">
        {openList ? (
          <span className="rounded-full bg-sky-50 p-1 cursor-pointer" onClick={() => setOpenList(false)}>
            <FiChevronDown className="w-5 h-5" />
          </span>
        ) : (
          <span className="rounded-full bg-sky-50 p-1 cursor-pointer" onClick={() => setOpenList(true)}>
            <FiChevronRight className="w-5 h-5" />
          </span>
        )}
        <div
          className="font-semibold hover:text-pink ms-3 cursor-pointer text-[1.3rem]"
          onClick={() => navigate(`/${title}`)}
        >
          {title}
        </div>
      </div>
      {openList && (
        <div className="rounded-xl mt-4 mb-2 overflow-hidden">
          <SyntaxHighlighterWrapper>{code}</SyntaxHighlighterWrapper>
        </div>
      )}
      <div className={`flex justify-end items-center pb-2 ${hasBorder && "border-b border-gray "}`}>
        <MdContentCopy
          className="w-5 h-5 group-hover:block text-black hover:text-pink cursor-pointer"
          onClick={handleCopy}
        />
      </div>
    </div>
  )
}

export default SnippetList
