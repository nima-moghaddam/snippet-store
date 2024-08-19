import ToolBar from "./components/ToolBar";
import { IoMenu } from "react-icons/io5";
import Search from "./components/Search";
import { useRef, useState } from "react";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";
import { IoMdClose } from "react-icons/io";
import useMenuStore from "../store/useMenuStore";
import { CgMenuRight } from "react-icons/cg";

interface Props {
  hasScrolled: boolean;
}

const Navbar = ({ hasScrolled }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const sideBarRef = useRef(null);
  const { toggleMenu, showSidebar } = useMenuStore((state) => state);

  const closeMenu = () => setOpenMenu(false);

  useOutsideAlerter({
    ref: sideBarRef,
    handleOutsidClick() {
      closeMenu();
    },
  });

  return (
    <nav
      className={`shadow-navbar sticky top-2 z-50 mx-[55px] mt-5 flex min-h-[80px] items-center justify-between rounded-xl px-5 transition-all duration-300 ease-in-out md:px-5 ${hasScrolled ? "bg-semi-transparent-white backdrop-blur-sm backdrop-saturate-200" : "bg-white"}`}
    >
      <Search />
      <div className="relative block md:hidden">
        {showSidebar ? (
          <CgMenuRight
            className="h-6 w-6 cursor-pointer"
            onClick={() => toggleMenu()}
          />
        ) : (
          <IoMenu
            className="h-6 w-6 cursor-pointer"
            onClick={() => toggleMenu()}
          />
        )}
      </div>
      {/* <div className="hidden lg:block">
        <ToolBar />
      </div>
      <div className="relative block lg:hidden">
        <IoMenu
          className="h-6 w-6 cursor-pointer"
          onClick={() => setOpenMenu((prev) => !prev)}
        />

        <div
          className={`fixed right-0 top-0 z-50 h-[100vh] w-full bg-white transition-transform duration-300 ease-in-out xs:w-[250px] ${
            openMenu
              ? "translate-x-0 shadow-xl shadow-slate-300"
              : "translate-x-full"
          }`}
          ref={sideBarRef}
        >
          <div className="mb-2 flex justify-start p-5">
            <IoMdClose className="h-5 w-5 cursor-pointer" onClick={closeMenu} />
          </div>
          <ToolBar isSideMenu closeMenu={closeMenu} />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
