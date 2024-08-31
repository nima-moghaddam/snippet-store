import { MdDownload } from "react-icons/md";

interface Props {
  name: string;
  onClick: () => void;
}

const DownloadImageBtn = ({ name, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="mx-2 mb-3 flex w-[200px] cursor-pointer items-center justify-center rounded-md bg-primary-gradient py-2 text-white shadow-md shadow-slate-400 transition-all duration-300 hover:scale-105"
    >
      <span className="me-3">{name}</span>
      <MdDownload className="h-5 w-5" />
    </button>
  );
};

export default DownloadImageBtn;
