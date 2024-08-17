import { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { Category } from "../../constants/Category";
import useFilterStore from "../../store/useFilterStore";
import useMenuStore from "../../store/useMenuStore";
import { RouteEnum } from "../../types/RouteModels";
import { ISnippet } from "../../types/SnippetModels";
import MenuItem from "./MenuItem";
import { MdHome } from "react-icons/md";
import Card from "../../components/card/Card";

interface Props {
  menuTitle: Category;
  subMenus: ISnippet[];
  route: RouteEnum;
  classes?: string;
}

const Menu = ({ menuTitle, subMenus, route, classes }: Props) => {
  const { setSubMenuFilter, setMenuFilter } = useFilterStore((state) => state);
  const { activeMenu, setActiveMenu } = useMenuStore((state) => state);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeSubmenuTitle = decodeURIComponent(
    pathname.split(`/${route}/`)[1],
  );
  const isMenuActive = activeMenu === menuTitle;

  const handleMenuClick = () => {
    navigate(`/${route}`);
    setActiveMenu(menuTitle);
    setMenuFilter(menuTitle, route);
  };

  const handleSubMenuClick = (subMenuTitle: string) => {
    setSubMenuFilter(subMenuTitle, route);
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
        onClick={handleMenuClick}
        isActive={isMenuActive}
        title={menuTitle}
        icon={<MdHome />}
        // classes="mb-2"
      />
      <Card
        transparent={!isMenuActive}
        classes={`transition-all overflow-hidden duration-300 ease-in-out ${
          isMenuActive
            ? "max-h-96 mt-2 opacity-100"
            : "max-h-0 py-0 px-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {subMenus.map((i, index) => (
            <li
              onClick={() => handleSubMenuClick(i.title)}
              key={i.title}
              className={`hover:text-font-dark text-small flex ${activeSubmenuTitle === i.title ? "text-font-dark" : "text-font-normal"} ${index !== subMenus.length - 1 && "mb-2"}`}
            >
              -<span className="ms-1">{i.title}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Menu;
