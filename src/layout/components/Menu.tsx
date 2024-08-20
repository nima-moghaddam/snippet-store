import { ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Category } from "../../constants/Category";
import useFilterStore from "../../store/useFilterStore";
import useMenuStore from "../../store/useMenuStore";
import { RouteEnum } from "../../types/RouteModels";
import { ISnippet } from "../../types/SnippetModels";
import MenuItem from "./MenuCard";

interface Props {
  menuTitle: Category;
  menuIcon: ReactElement;
  subMenus: ISnippet[];
  route: RouteEnum;
  classes?: string;
}

const Menu = ({
  menuTitle,
  subMenus,
  route,
  classes = "",
  menuIcon,
}: Props) => {
  const { setSubMenuFilter, setMenuFilter } = useFilterStore((state) => state);
  const { activeMenu, setActiveMenu, toggleMenu } = useMenuStore(
    (state) => state,
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeSubmenuTitle = decodeURIComponent(
    pathname.split(`/${route}/`)[1],
  );
  const isMenuActive = activeMenu === menuTitle;

  const onMenuClick = () => {
    navigate(`/${route}`);
    setActiveMenu(menuTitle);
    setMenuFilter(menuTitle, route);
  };

  const onSubMenuClick = (subMenuTitle: string) => {
    setSubMenuFilter(subMenuTitle, route);
    toggleMenu();
    if (route === RouteEnum.Snippet) navigate(`/${route}/${subMenuTitle}`);
  };

  useEffect(() => {
    const currentSubmenu = subMenus.find((i) => i.title === activeSubmenuTitle);
    if (currentSubmenu) {
      const menuHasActiveSub = subMenus.some(
        (menu) => menu.category === currentSubmenu.category,
      );
      if (menuHasActiveSub) setActiveMenu(menuTitle);
    }
  }, [activeSubmenuTitle]);

  return (
    <div className={`group cursor-pointer font-bold text-black ${classes}`}>
      <MenuItem
        onClick={onMenuClick}
        isActive={isMenuActive}
        title={menuTitle}
        icon={menuIcon}
      />
      <div
        className={`overflow-hidden rounded-icon p-3 transition-all duration-300 ease-in-out ${
          isMenuActive
            ? "mt-2 max-h-[500px] bg-white opacity-100 shadow-card"
            : "max-h-0 bg-transparent !px-0 !py-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {subMenus.map((i, index) => (
            <li
              onClick={() => onSubMenuClick(i.title)}
              key={i.title}
              className={`flex text-sm hover:font-bold hover:text-gray-dark ${activeSubmenuTitle === i.title ? "font-bold text-gray-dark" : "font-light text-gray"} ${index !== subMenus.length - 1 && "mb-2"}`}
            >
              -<span className="ms-1">{i.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
