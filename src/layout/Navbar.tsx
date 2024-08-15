import ToolBar from "./components/ToolBar";
import { IoMenu } from "react-icons/io5";
import Search from "./components/Search";
import { useRef, useState } from "react";
import { useOutsideAlerter } from "../utils/useOutsideAlerter";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const sideBarRef = useRef(null);

  const closeMenu = () => setOpenMenu(false);

  useOutsideAlerter({
    ref: sideBarRef,
    handleOutsidClick() {
      closeMenu();
    },
  });

  return (
    <div className="flex min-h-[80px] w-full items-center justify-between px-5 md:px-14">
      <Search />
      <div className="hidden lg:block">
        <ToolBar />
      </div>
      <div className="relative block lg:hidden">
        <IoMenu
          className="h-6 w-6 cursor-pointer"
          onClick={() => setOpenMenu((prev) => !prev)}
        />

        <div
          className={`fixed right-0 top-0 z-50 h-[100vh] w-full bg-white shadow-xl transition-transform duration-300 ease-in-out xs:w-[250px] ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
          ref={sideBarRef}
        >
          <div className="mb-2 flex justify-start p-5">
            <IoMdClose className="h-5 w-5 cursor-pointer" onClick={closeMenu} />
          </div>
          <ToolBar isSideMenu closeMenu={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
