import copy from "copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { toastFire } from "../../components/toast/Toast";
import useAnimation from "../../utils/useAnimation";

interface Props {
  link: string;
  title: string;
}

const LinkCard = ({ link, title }: Props) => {
  const { animateClass } = useAnimation();

  const handleCodeCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    copy(link);
    toastFire("success", "Link copied");
  };

  return (
    <div
      className={`group relative flex cursor-pointer flex-col rounded-md bg-dark p-5 hover:shadow-3xl ${animateClass}`}
      onClick={() => window.open(link)}
    >
      <MdContentCopy
        className="absolute right-4 top-4 z-30 block h-4 w-4 cursor-pointer text-white hover:text-pink group-hover:block md:hidden"
        onClick={handleCodeCopy}
      />
      <span className="mb-2 text-[1.3rem] font-semibold text-white group-hover:text-pink">
        {title}
      </span>
      <div className="line-clamp-1 text-[.9rem] text-blue">{link}</div>
    </div>
  );
};

export default LinkCard;
