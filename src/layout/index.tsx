import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import useMenuStore from "../store/useMenuStore"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

const AppLayout = () => {
  const { showSidebar, setShowSidebar, setHideSidebar } = useMenuStore((state) => state)
  const { pathname } = useLocation()
  const pathList = pathname.split("/")

  useEffect(() => {
    if (pathList[2] === "preview") setHideSidebar()
    else setShowSidebar()
  }, [pathname])

  return (
    <div className="flex h-screen">
      {showSidebar && <SideBar />}
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <Navbar />
        <main className="px-14 py-5 z-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
