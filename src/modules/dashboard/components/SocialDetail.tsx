import { cloneElement, ReactElement } from "react";
import copy from "copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { ImLink } from "react-icons/im";
import { toastFire } from "../../../components/toast/Toast";

interface Props {
  name: string;
  link: string;
  icon: ReactElement;
  hasBorder: boolean;
  iconColor?: string;
}

const SocialDetail = ({ icon, link, name, hasBorder, iconColor }: Props) => {
  const copyLink = () => {
    copy(link);
    toastFire("success", "Link copied!");
  };
  return (
    <div
      className={`mb-3 flex items-center justify-between pb-1 ${hasBorder && "border-b border-gray-lighter"}`}
    >
      <div className="flex items-center">
        {cloneElement(icon, {
          className: `w-4 h-4 ${iconColor}`,
        })}
        <span className="ms-2 font-bold text-gray">{name}</span>
      </div>
      <div className="flex items-center">
        <ImLink
          className={`cursor-pointer text-gray-dark hover:text-secondary`}
          onClick={() =>
            window.open(name === "Gmail" ? `mailto:${link}` : link)
          }
        />

        <MdContentCopy
          className={`ms-3 cursor-pointer text-gray-dark hover:text-secondary`}
          onClick={copyLink}
        />
      </div>
    </div>
  );
};

export default SocialDetail;
