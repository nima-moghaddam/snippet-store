import { Category } from "../constants/Category";
import { Links, Snippets } from "../data";
import { FaCode } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import Menu from "./components/Menu";
import { RouteEnum } from "../types/RouteModels";

const snippetsMenu = Object.entries(Snippets).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values };
});

const linksMenu = Object.entries(Links).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values };
});

const SideBar = () => {
  return (
    <div className="hide-scrollbar hidden h-[100vh] w-[20rem] overflow-y-scroll bg-dark px-3 py-5 md:block">
      <div className="mb-8 me-5 flex items-center justify-center text-[1.5rem] font-bold text-pink">
        <FaCode className="me-3 mt-1" />
        <span>Snippets</span>
      </div>
      {snippetsMenu.map((menu) => (
        <Menu
          key={menu.categoryName}
          menuTitle={menu.categoryName}
          subMenus={menu.subCategories}
          route={RouteEnum.Snippet}
          classes="mb-2"
        />
      ))}
      <div className="mb-8 me-5 mt-8 flex items-center justify-center text-[1.5rem] font-bold text-pink">
        <PiLinkSimpleBold className="me-3 mt-1" />
        <span>Links</span>
      </div>
      {linksMenu.map((menu) => (
        <Menu
          key={menu.categoryName}
          menuTitle={menu.categoryName}
          subMenus={menu.subCategories}
          route={RouteEnum.Links}
          classes="mb-2"
        />
      ))}
    </div>
  );
};

export default SideBar;
