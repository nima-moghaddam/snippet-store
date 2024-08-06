import { Category } from "../constants/Category"
import { Links, Snippets } from "../data"
import SnippetMenu from "./components/SnippetMenu"
import { FaCode } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"
import LinkMenu from "./components/LinkMenu"

const SideBar = () => {
  const snippetsMenu = Object.entries(Snippets).map(([key, values]) => {
    return { categoryName: key as Category, subCategories: values }
  })

  const linksMenu = Object.entries(Links).map(([key, values]) => {
    return { categoryName: key as Category, subCategories: values }
  })

  console.log(linksMenu)

  return (
    <div className="w-[20rem] bg-dark h-[100vh] py-5 px-3">
      <div className="text-pink text-[1.5rem] font-bold mb-8 flex items-center justify-center me-5">
        <FaCode className="me-3 mt-1" />
        <span>Snippets</span>
      </div>
      {snippetsMenu.map((menu) => (
        <SnippetMenu key={menu.categoryName} name={menu.categoryName} subMenus={menu.subCategories} classes="mb-2" />
      ))}
      <div className="text-pink text-[1.5rem] font-bold mb-8 flex items-center justify-center me-5">
        <PiLinkSimpleBold className="me-3 mt-1" />
        <span>Links</span>
      </div>
      {linksMenu.map((menu) => (
        <LinkMenu key={menu.categoryName} name={menu.categoryName} subMenus={menu.subCategories} classes="mb-2" />
      ))}
    </div>
  )
}

export default SideBar
