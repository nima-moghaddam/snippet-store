import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useMenuStore from "../store/useMenuStore";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const AppLayout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { showSidebar, setShowSidebar, setHideSidebar } = useMenuStore(
    (state) => state,
  );
  const { pathname } = useLocation();
  const pathList = pathname.split("/");
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop } = scrollRef.current;
      setScrollPosition(scrollTop);
    }
  };

  const hasScrolled = scrollPosition > 1;

  useEffect(() => {
    if (pathList[2] === "preview") setHideSidebar();
    else setShowSidebar();
  }, [pathname]);

  return (
    <div className="flex h-screen bg-primary">
      <SideBar />
      <div
        className="flex h-full w-full flex-col overflow-y-auto"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <Navbar hasScrolled={hasScrolled} />
        <main className="z-10 px-5 py-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
