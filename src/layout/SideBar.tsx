import { Category } from "../constants/Category";
import { Links, Snippets } from "../data";
import { FaCode } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import Menu from "./components/Menu";
import { RouteEnum } from "../types/RouteModels";
import { useState } from "react";
import ToggleMenuBtn from "./components/ToggleMenuBtn";

const snippetsMenu = Object.entries(Snippets).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values };
});

const linksMenu = Object.entries(Links).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values };
});

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <aside
        className={`hide-scrollbar fixed left-0 top-0 z-[60] h-[100vh] w-full overflow-y-scroll bg-dark px-3 py-5 opacity-90 shadow-md shadow-dark_lighter transition-transform duration-300 ease-in-out sm:w-[20rem] md:static md:block md:opacity-100 md:shadow-none ${
          openMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
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
      </aside>
      <ToggleMenuBtn openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default SideBar;
