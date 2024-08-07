import { useEffect } from "react"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { useLocation, useNavigate } from "react-router"
import { Category } from "../../constants/Category"
import useFilterStore from "../../store/useFilterStore"
import useMenuStore from "../../store/useMenuStore"
import { RouteEnum } from "../../types/RouteModels"
import { ISnippet } from "../../types/SnippetModels"

interface Props {
  menuTitle: Category
  subMenus: ISnippet[]
  route: RouteEnum
  classes?: string
}

const Menu = ({ menuTitle, subMenus, route, classes }: Props) => {
  const { setSubMenuFilter, setMenuFilter } = useFilterStore((state) => state)
  const { activeMenu, setActiveMenu } = useMenuStore((state) => state)

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const activeSubmenuTitle = decodeURIComponent(pathname.split(`/${route}/`)[1])
  const isMenuActive = activeMenu === menuTitle

  const handleMenuClick = () => {
    navigate(`/${route}`)
    setActiveMenu(menuTitle)
    setMenuFilter(menuTitle)
  }

  const handleSubMenuClick = (subMenuTitle: string) => {
    navigate(`${route}/${subMenuTitle}`)
    setSubMenuFilter(subMenuTitle, route)
  }

  useEffect(() => {
    const currentSubmenu = subMenus.find((i) => i.title === activeSubmenuTitle)
    if (currentSubmenu) {
      const menuHasActiveSub = subMenus.some((menu) => menu.category === currentSubmenu.category)
      if (menuHasActiveSub) setActiveMenu(menuTitle)
    }
  }, [activeSubmenuTitle])

  return (
    <div className={`group text-white font-bold cursor-pointer ${classes}`}>
      <div
        className={`flex items-center subMenus-center mb-1 group-hover:text-pink ${isMenuActive ? "text-pink" : ""}`}
        onClick={handleMenuClick}
      >
        <span className="me-3">{menuTitle}</span>
        {isMenuActive ? <IoIosArrowDown className="w-4 h-4" /> : <IoIosArrowForward className="w-4 h-4" />}
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isMenuActive ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col ps-5 opacity-100 transition-opacity duration-200 ease-in-out">
          {subMenus.map((i) => (
            <li
              onClick={() => handleSubMenuClick(i.title)}
              key={i.title}
              className={`flex subMenus-center mb-2 hover:text-pink ${activeSubmenuTitle === i.title ? "text-pink" : ""}`}
            >
              -<span className="ms-2">{i.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
