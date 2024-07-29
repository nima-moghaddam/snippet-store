import { Category } from "../constants/Category"
import { Snippets } from "../data"
import { ISnippet } from "../types/ISnippetModels"
import Menu from "./components/Menu"

const SideBar = () => {
  const menuList: { categoryName: Category; subCategories: ISnippet[] }[] = Object.entries(Snippets).map(
    ([key, values]) => {
      return { categoryName: key as Category, subCategories: values }
    }
  )

  return (
    <div className="w-[20rem] bg-dark h-[100vh] py-5 px-3">
      {menuList.map((menu) => (
        <Menu key={menu.categoryName} name={menu.categoryName} subMenus={menu.subCategories} classes="mb-5" />
      ))}
    </div>
  )
}

export default SideBar
