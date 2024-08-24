import { Category } from "../constants/Category";
import { Links, Snippets } from "../data";
import Menu from "./components/Menu";
import { RouteEnum } from "../types/RouteModels";
import { RiDashboardLine } from "react-icons/ri";
import MenuCard from "./components/MenuCard";
import { useLocation, useNavigate } from "react-router";
import { MdHome } from "react-icons/md";
import useMenuStore from "../store/useMenuStore";
import { categoryIconPicker } from "../utils/categoryIconPicker";
import useFilterStore from "../store/useFilterStore";
import MenuTitle from "./components/MenuTitle";
import { HiDocumentText } from "react-icons/hi2";

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
  const { resetMenu, showSidebar, toggleMenu } = useMenuStore();
  const { resetFilters } = useFilterStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <aside
        className={`fixed left-5 top-5 z-[60] h-[95vh] w-[15rem] overflow-y-hidden rounded-card bg-white px-3 py-5 shadow-card transition-transform duration-500 ease-in-out md:static md:block md:h-[100vh] md:w-[20rem] md:rounded-none md:bg-transparent md:shadow-none ${
          showSidebar ? "translate-x-0" : "-translate-x-[120%] md:translate-x-0"
        }`}
      >
        <div className="mb-4 mt-0 flex items-center justify-center px-3 md:mt-4">
          <RiDashboardLine className="me-2 h-6 w-6 text-black" />
          <span className="text-base font-bold text-gray-dark">
            Snippet Dashboard
          </span>
        </div>
        <div className="h-[1px] bg-border-gradient opacity-50" />

        <div className="hide-scrollbar mb-5 h-full overflow-y-scroll px-3 pb-10 pt-5">
          <MenuCard
            onClick={() => {
              navigate("/");
              toggleMenu();
              resetMenu();
            }}
            isActive={pathname === "/"}
            title={"Dashboard"}
            icon={<MdHome />}
            classes="mb-3"
          />
          <MenuCard
            onClick={() => {
              navigate("/documents");
              toggleMenu();
              resetMenu();
            }}
            isActive={pathname === "/documents"}
            title={"Documents"}
            icon={<HiDocumentText />}
            classes="mb-3"
          />
          <MenuTitle
            title="Snippets"
            onClick={() => {
              navigate(`/${RouteEnum.Snippet}`);
              resetFilters();
              toggleMenu();
            }}
          />
          {snippetsMenu.map((menu) => (
            <Menu
              key={menu.categoryName}
              menuTitle={menu.categoryName}
              subMenus={menu.subCategories}
              route={RouteEnum.Snippet}
              menuIcon={menu.icon}
              classes="mb-4"
            />
          ))}
          <MenuTitle
            title="Links"
            onClick={() => {
              navigate(`/${RouteEnum.Links}`);
              resetFilters();
              toggleMenu();
            }}
          />
          {linksMenu.map((menu) => (
            <Menu
              key={menu.categoryName}
              menuTitle={menu.categoryName}
              subMenus={menu.subCategories}
              route={RouteEnum.Links}
              menuIcon={menu.icon}
              classes="mb-4"
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
