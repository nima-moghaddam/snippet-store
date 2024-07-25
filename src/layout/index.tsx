import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
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
