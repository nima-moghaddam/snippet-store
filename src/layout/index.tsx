import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

const AppLayout = () => {
  return (
    <div className="flex h-[100vh]">
      <SideBar />
      <div className="w-full h-full">
        <Navbar />
        <main className="px-10 py-5 overflow-y-scroll h-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
