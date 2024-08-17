import { MdContentCopy } from "react-icons/md";
import { toastFire } from "../../../components/toast/Toast";
import { ISnippet } from "../../../types/SnippetModels";
import copy from "copy-to-clipboard";
import { IoCameraOutline } from "react-icons/io5";
import { RouteEnum } from "../../../types/RouteModels";
import { ImLink } from "react-icons/im";

interface Props {
  snippet: ISnippet;
  isForCard?: boolean;
}

const Toolbar = ({ snippet, isForCard }: Props) => {
  const { code, type, title, link } = snippet;

  const handleCodeCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    copy(code + (`\n${type}` || ""));
    toastFire("success", "Code copied");
  };

  const handleDownloadImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`${RouteEnum.Snippet}/preview/${title}`);
  };

  const handleOpenLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link);
  };

  return (
    <div className="flex items-center">
      {link && (
        <ImLink
          className={`z-30 me-3 h-4 w-4 cursor-pointer text-black hover:text-pink ${
            isForCard && "block text-white group-hover:block md:hidden"
          }`}
          onClick={handleOpenLink}
        />
      )}
      <IoCameraOutline
        className={`z-30 me-3 h-6 w-6 cursor-pointer text-black hover:text-pink sm:me-3 sm:h-5 sm:w-5 ${
          isForCard && "block text-white group-hover:block md:hidden"
        }`}
        onClick={handleDownloadImage}
      />
      <MdContentCopy
        className={`z-30 h-4 w-4 cursor-pointer text-black hover:text-pink ${
          isForCard && "block text-white group-hover:block md:hidden"
        }`}
        onClick={handleCodeCopy}
      />
    </div>
  );
};

export default Toolbar;
