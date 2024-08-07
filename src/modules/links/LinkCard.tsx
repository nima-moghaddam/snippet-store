import copy from "copy-to-clipboard"
import { MdContentCopy } from "react-icons/md"
import { toastFire } from "../../components/toast/Toast"

interface Props {
  link: string
  title: string
}

const LinkCard = ({ link, title }: Props) => {
  const handleCodeCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    copy(link)
    toastFire("success", "Link copied")
  }

  return (
    <div
      className="bg-dark rounded-md p-5 cursor-pointer relative flex flex-col hover:shadow-3xl group"
      onClick={() => window.open(link)}
    >
      <MdContentCopy
        className="w-4 h-4 text-white z-30 absolute right-4 top-4 hover:text-pink cursor-pointer hidden group-hover:block"
        onClick={handleCodeCopy}
      />
      <span className="text-white font-semibold mb-2 text-[1.3rem] group-hover:text-pink">{title}</span>
      <div className="text-blue line-clamp-1 text-[.9rem]">{link}</div>
    </div>
  )
}

export default LinkCard
