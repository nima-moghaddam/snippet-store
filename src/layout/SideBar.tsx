import { Category } from "../constants/Category"
import { Links, Snippets } from "../data"
import { FaCode } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"
import Menu from "./components/Menu"
import { RouteEnum } from "../types/RouteModels"

const snippetsMenu = Object.entries(Snippets).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values }
})

const linksMenu = Object.entries(Links).map(([key, values]) => {
  return { categoryName: key as Category, subCategories: values }
})

const SideBar = () => {
  // console.log(linksMenu)

  return (
    <div className="w-[20rem] bg-dark h-[100vh] py-5 px-3 overflow-y-scroll hide-scrollbar">
      <div className="text-pink text-[1.5rem] font-bold mb-8 flex items-center justify-center me-5">
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
      <div className="text-pink text-[1.5rem] font-bold mb-8 flex items-center justify-center me-5">
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
    </div>
  )
}

export default SideBar
