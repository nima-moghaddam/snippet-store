import { MdDownload } from "react-icons/md"

interface Props {
  name: string
  onClick: () => void
}

const DownloadImageBtn = ({ name, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-blue shadow-md shadow-slate-400 hover:bg-black transition-all mx-2 duration-300 px-3 py-2 cursor-pointer rounded-md flex items-center"
    >
      <span className="me-3">{name}</span>
      <MdDownload className="w-5 h-5" />
    </button>
  )
}

export default DownloadImageBtn
