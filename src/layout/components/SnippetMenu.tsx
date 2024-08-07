import { ISnippet } from "../../types/ISnippetModels"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import useMenuStore from "../../store/useMenuStore"
import { Category } from "../../constants/Category"
import useFilterStore from "../../store/useFilterStore"
import { useNavigate } from "react-router"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

interface Props {
  name: Category
  subMenus: ISnippet[]
  classes?: string
}

const SnippetMenu = ({ name, subMenus, classes }: Props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { setMenuFilter, setSubMenuFilter } = useFilterStore((state) => state)
  const { activeMenu, setActiveMenu } = useMenuStore((state) => state)

  const isMenuActive = activeMenu === name
  const activeSubmenuTitle = decodeURIComponent(pathname.startsWith("/") ? pathname.slice(1) : pathname)

  const handleMenuClick = () => {
    navigate("/snippet")
    setActiveMenu(name)
    setMenuFilter(name)
  }

  const handleSubMenuClick = (name: string) => {
    navigate(`/snippet/${name}`)
    setSubMenuFilter(name)
  }

  // check if menu remain active when its child submenus were active on reload or state loss
  useEffect(() => {
    const currentSubmenu = subMenus.find((i) => i.title === activeSubmenuTitle)
    if (currentSubmenu) {
      const menuHasActiveSub = subMenus.some((menu) => menu.category === currentSubmenu.category)
      if (menuHasActiveSub) setActiveMenu(name)
    }
  }, [activeSubmenuTitle])

  return (
    <div className={`group text-white font-bold cursor-pointer ${classes}`}>
      <div
        className={`flex items-center subMenus-center mb-1 group-hover:text-pink ${isMenuActive ? "text-pink" : ""}`}
        onClick={handleMenuClick}
      >
        <span className="me-3">{name}</span>
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

export default SnippetMenu
