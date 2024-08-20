import { IoMenu } from "react-icons/io5";
import Search from "./components/Search";
import useMenuStore from "../store/useMenuStore";
import { CgMenuRight } from "react-icons/cg";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";

interface Props {
  hasScrolled: boolean;
}

const Navbar = ({ hasScrolled }: Props) => {
  const { toggleMenu, showSidebar } = useMenuStore((state) => state);

  return (
    <nav
      className={`sticky top-2 z-50 mx-[20px] mt-5 flex min-h-[80px] items-center justify-between rounded-xl text-base transition-all duration-300 ease-in-out md:text-lg ${hasScrolled ? "bg-semi-transparent-white px-3 shadow-navbar backdrop-blur-sm backdrop-saturate-200 md:px-5" : "bg-transparent"}`}
    >
      <div>
        <BreadCrumb />
      </div>
      <div className="flex items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
