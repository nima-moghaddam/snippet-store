import { ISnippet } from "../../types/ISnippetModels"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import useMenuStore from "../../store/useMenuStore"
import { Category } from "../../constants/Category"
import useFilterStore from "../../store/useFilterStore"

interface Props {
  name: Category
  subMenus: ISnippet[]
  classes?: string
}

const Menu = ({ name, subMenus, classes }: Props) => {
  const { setMenuFilter, setSubMenuFilter } = useFilterStore((state) => state)
  const { activeMenu, activeSubMenu, setActiveMenu, setActiveSubMenu } = useMenuStore((state) => state)
  const isMenuActive = activeMenu === name

  const handleMenuClick = () => {
    if (!isMenuActive) {
      setActiveMenu(name)
      setMenuFilter(name)
    }
  }

  const handleSubMenuClick = (name: string) => {
    setActiveSubMenu(name)
    setSubMenuFilter(name)
  }

  return (
    <div className={`group text-white font-bold cursor-pointer ${classes}`}>
      <div
        className={`flex items-center subMenus-center mb-3 group-hover:text-pink ${isMenuActive ? "text-pink" : ""}`}
        onClick={handleMenuClick}
      >
        <span className="me-3">{name}</span>
        {isMenuActive ? <IoIosArrowDown className="w-4 h-4" /> : <IoIosArrowForward className="w-4 h-4" />}
      </div>
      {isMenuActive && (
        <ul className="flex flex-col ps-5">
          {subMenus.map((i) => (
            <li
              onClick={() => handleSubMenuClick(i.title)}
              key={i.title}
              className={`flex subMenus-center mb-2 hover:text-pink ${activeSubMenu === i.title ? "text-pink" : ""}`}
            >
              -<span className="ms-2">{i.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Menu
