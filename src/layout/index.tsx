import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useMenuStore from "../store/useMenuStore";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const AppLayout = () => {
  const { showSidebar, setShowSidebar, setHideSidebar } = useMenuStore(
    (state) => state,
  );
  const { pathname } = useLocation();
  const pathList = pathname.split("/");

  useEffect(() => {
    if (pathList[2] === "preview") setHideSidebar();
    else setShowSidebar();
  }, [pathname]);

  return (
    <div className="flex h-screen">
      {showSidebar && <SideBar />}
      <div className="flex h-full w-full flex-col overflow-y-auto">
        <Navbar />
        <main className="z-10 px-5 py-5 md:px-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
