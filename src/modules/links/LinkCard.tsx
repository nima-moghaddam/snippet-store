import copy from "copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import Card from "../../components/card/Card";
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
    <Card
      classes={`group relative flex cursor-pointer flex-col hover:shadow-gray-lighter ${animateClass}`}
      onClick={() => window.open(link)}
    >
      <MdContentCopy
        className="absolute right-4 top-4 z-30 block h-4 w-4 cursor-pointer text-gray-dark hover:text-secondary"
        onClick={handleCodeCopy}
      />
      <span className="mb-2 text-lg font-bold text-gray-dark group-hover:text-secondary">
        {title}
      </span>
      <div className="line-clamp-1 text-sm text-blue">{link}</div>
    </Card>
  );
};

export default LinkCard;
