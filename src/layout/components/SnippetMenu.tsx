import { ISnippet } from "../../types/SnippetModels"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import useMenuStore from "../../store/useMenuStore"
import { Category } from "../../constants/Category"
import useFilterStore from "../../store/useFilterStore"
import { useNavigate } from "react-router"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Menu from "./Menu"
import { RouteEnum } from "../../types/RouteModels"

interface Props {
  menuTitle: Category
  subMenus: ISnippet[]
  classes?: string
}

const SnippetMenu = ({ menuTitle, subMenus, classes }: Props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { setMenuFilter } = useFilterStore((state) => state)
  const { activeMenu, setActiveMenu } = useMenuStore((state) => state)

  const isMenuActive = activeMenu === menuTitle
  const activeSubmenuTitle = decodeURIComponent(pathname.startsWith("/") ? pathname.slice(1) : pathname)

  const handleMenuClick = () => {
    navigate(`/${RouteEnum.Snippet}`)
    setActiveMenu(menuTitle)
    setMenuFilter(menuTitle)
  }

  // check if menu remain active when its child submenus were active on reload or state loss
  useEffect(() => {
    const currentSubmenu = subMenus.find((i) => i.title === activeSubmenuTitle)
    if (currentSubmenu) {
      const menuHasActiveSub = subMenus.some((menu) => menu.category === currentSubmenu.category)
      if (menuHasActiveSub) setActiveMenu(menuTitle)
    }
  }, [activeSubmenuTitle])

  return (
    <Menu
      handleMenuClick={handleMenuClick}
      isMenuActive={isMenuActive}
      menuTitle={menuTitle}
      route={RouteEnum.Snippet}
      subMenus={subMenus}
    />
  )
}

export default SnippetMenu
