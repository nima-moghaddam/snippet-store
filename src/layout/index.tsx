import { Outlet } from "react-router-dom"
import useMenuStore from "../store/useMenuStore"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

const AppLayout = () => {
  const { showSidebar } = useMenuStore((state) => state)

  return (
    <div className="flex h-screen">
      {showSidebar && <SideBar />}
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <Navbar />
        <main className="px-14 py-5">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
