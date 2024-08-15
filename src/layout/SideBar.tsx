import { Category } from "../constants/Category";
import { Links, Snippets } from "../data";
import { FaCode } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import Menu from "./components/Menu";
import { RouteEnum } from "../types/RouteModels";
import { IoChevronForward } from "react-icons/io5";
import { useRef, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";

const snippetsMenu = Object.entries(Snippets).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values };
});

const linksMenu = Object.entries(Links).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values };
});

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useOutsideAlerter({
    ref: menuRef,
    handleOutsidClick() {
      setOpenMenu(false);
    },
  });

  return (
    <>
      <div
        onClick={() => setOpenMenu((prev) => !prev)}
        className={`absolute top-[40%] z-[70] flex cursor-pointer items-center rounded-xl rounded-l bg-white py-8 pr-2 opacity-80 shadow-sm shadow-slate-800 transition-all duration-300 ease-in-out md:hidden ${openMenu ? "left-[20rem]" : "left-0"}`}
      >
        {openMenu && <IoChevronBackSharp className="ms-1 mt-1" />}
        <span className="ms-1 font-bold">Menu</span>
        {!openMenu && <IoChevronForward className="ms-1 mt-1" />}
      </div>
      <aside
        ref={menuRef}
        className={`hide-scrollbar fixed left-0 top-0 z-[60] h-[100vh] w-[20rem] overflow-y-scroll bg-dark px-3 py-5 opacity-90 transition-transform duration-300 ease-in-out md:static md:block md:opacity-100 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
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
    </>
  );
};

export default SideBar;
