import { Category, CategoryType } from "../constants/Category";
import { GrDocumentText } from "react-icons/gr";
import { TbBrandReact } from "react-icons/tb";
import { FaQuora } from "react-icons/fa6";
import { LuRegex } from "react-icons/lu";
import { GoAlertFill } from "react-icons/go";
import { CgTemplate } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import { GoTools } from "react-icons/go";
import { SiNextdotjs } from "react-icons/si";

export const categoryIconPicker = (category: CategoryType) => {
  let icon = <></>;
  switch (category) {
    case Category.Blogs:
      icon = <GrDocumentText />;
      break;
    case Category.ReactHooks:
      icon = <TbBrandReact />;
      break;
    case Category.ReactQuery:
      icon = <FaQuora />;
      break;
    case Category.Regex:
      icon = <LuRegex />;
      break;
    case Category.SweetAlert2:
      icon = <GoAlertFill />;
      break;
    case Category.Templates:
      icon = <CgTemplate />;
      break;
    case Category.Utils:
      icon = <GoTools />;
      break;
    case Category.WebTools:
      icon = <FaTools />;
      break;
    case Category.NextJs:
      icon = <SiNextdotjs />;
      break;
    default:
      break;
  }

  return icon;
};
