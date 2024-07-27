import { Snippets } from "../data"
import Menu from "./components/Menu"

const SideBar = () => {
  const sidebarList = Object.entries(Snippets).map(([key, values]) => {
    return { categoryName: key, subCategories: values }
  })

  console.log(sidebarList)
  return (
    <div className="w-[20rem] bg-dark h-[100vh] py-5 px-3">
      {sidebarList.map((item) => (
        <Menu key={item.categoryName} name={item.categoryName} items={item.subCategories} classes='mb-5' />
      ))}
    </div>
  )
}

export default SideBar
