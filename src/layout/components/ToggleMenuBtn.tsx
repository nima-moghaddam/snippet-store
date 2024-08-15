import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";

interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleMenuBtn = ({ openMenu, setOpenMenu }: Props) => {
  return (
    <div
      onClick={() => setOpenMenu((prev) => !prev)}
      className={`absolute top-[40%] z-[70] flex cursor-pointer items-center bg-white py-8 pr-2 opacity-80 shadow-sm shadow-slate-800 transition-all duration-300 ease-in-out md:hidden ${openMenu ? "left-[70%] rounded-l-xl rounded-r-none xs:rounded-l-none xs:rounded-r-xl sm:left-[20rem]" : "left-0 rounded-r-xl"}`}
    >
      {openMenu && <IoChevronBackSharp className="ms-1 mt-1" />}
      <span className="ms-1 font-bold">Menu</span>
      {!openMenu && <IoChevronForward className="ms-1 mt-1" />}
    </div>
  );
};

export default ToggleMenuBtn;
