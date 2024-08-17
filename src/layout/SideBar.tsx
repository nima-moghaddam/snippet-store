import { Category } from "../constants/Category";
import { Links, Snippets } from "../data";
import Menu from "./components/Menu";
import { RouteEnum } from "../types/RouteModels";
import { useState } from "react";
import ToggleMenuBtn from "./components/ToggleMenuBtn";
import { RiDashboardLine } from "react-icons/ri";
import MenuItem from "./components/MenuItem";
import { useLocation, useNavigate } from "react-router";
import { MdHome } from "react-icons/md";
import useMenuStore from "../store/useMenuStore";
import { categoryIconPicker } from "../utils/categoryIconPicker";

const snippetsMenu = Object.entries(Snippets).map(([key, values]) => {
  return {
    categoryName: key as Category,
    subCategories: values,
    icon: categoryIconPicker(key as Category),
  };
});

const linksMenu = Object.entries(Links).map(([key, values]) => {
  return {
    categoryName: key as Category,
    subCategories: values,
    icon: categoryIconPicker(key as Category),
  };
});

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const { resetMenu } = useMenuStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <aside
        className={`hide-scrollbar fixed left-0 top-0 z-[60] h-[100vh] w-full overflow-y-scroll px-3 py-5 opacity-90 shadow-md shadow-dark_lighter transition-transform duration-300 ease-in-out sm:w-[20rem] md:static md:block md:opacity-100 md:shadow-none ${
          openMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="my-5 flex items-center justify-center">
          <RiDashboardLine className="me-2 h-6 w-6 text-black" />
          <span className="text-normal text-font-dark font-bold">
            Snippet Dashboard
          </span>
        </div>
        <div className="bg-border-gradient mb-5 h-[1px] opacity-70" />
        <MenuItem
          onClick={() => {
            navigate("/");
            resetMenu();
          }}
          isActive={pathname === "/"}
          title={"Dashboard"}
          icon={<MdHome />}
          classes="mb-3"
        />
        <div
          onClick={() => navigate(`/${RouteEnum.Snippet}`)}
          className="text-normal text-font-normal hover:text-font-dark mb-3 ms-5 flex cursor-pointer items-center justify-start font-bold"
        >
          Snippets
        </div>
        {snippetsMenu.map((menu) => (
          <Menu
            key={menu.categoryName}
            menuTitle={menu.categoryName}
            subMenus={menu.subCategories}
            route={RouteEnum.Snippet}
            menuIcon={menu.icon}
            classes="mb-2"
          />
        ))}
        <div
          onClick={() => navigate(`/${RouteEnum.Links}`)}
          className="text-normal hover:text-font-dark text-font-normal mb-3 ms-5 flex cursor-pointer items-center justify-start font-bold"
        >
          Links
        </div>
        {linksMenu.map((menu) => (
          <Menu
            key={menu.categoryName}
            menuTitle={menu.categoryName}
            subMenus={menu.subCategories}
            route={RouteEnum.Links}
            menuIcon={menu.icon}
            classes="mb-2"
          />
        ))}
      </aside>
      <ToggleMenuBtn openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default SideBar;
