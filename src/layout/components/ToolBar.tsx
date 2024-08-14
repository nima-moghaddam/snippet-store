import { ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { useNavigate } from "react-router";
import useFilterStore from "../../store/useFilterStore";
import useMenuStore from "../../store/useMenuStore";
import { RouteEnum } from "../../types/RouteModels";

interface Props {
  isSideMenu?: boolean;
  closeMenu?: () => void;
}

const ToolBarItem = ({
  name,
  icon,
  onClick,
}: {
  name: string;
  icon: ReactElement;
  onClick: () => void;
}) => {
  return (
    <div
      className="mb-2 flex cursor-pointer items-center justify-between border-b border-gray px-3 pb-3"
      onClick={onClick}
    >
      <span className="me-5">{name}</span>
      {icon}
    </div>
  );
};

const ToolBar = ({ isSideMenu = false, closeMenu }: Props) => {
  const navigate = useNavigate();
  const { resetMenu } = useMenuStore((state) => state);
  const { resetFilters } = useFilterStore((state) => state);

  const handleNavigateHome = () => {
    navigate("/");
    resetFilters();
    resetMenu();
    closeMenu?.();
  };

  const handleNavigateSnippets = () => {
    navigate(`/${RouteEnum.Snippet}`);
    resetFilters();
    resetMenu();
    closeMenu?.();
  };

  const handleNavigateLinks = () => {
    navigate(`/${RouteEnum.Links}`);
    resetFilters();
    resetMenu();
    closeMenu?.();
  };

  return (
    <>
      {isSideMenu ? (
        <nav className="flex flex-col py-5">
          <ToolBarItem
            name="Home"
            onClick={handleNavigateHome}
            icon={
              <AiFillHome className="h-6 w-6 cursor-pointer hover:text-pink" />
            }
          />
          <ToolBarItem
            name="Snippets"
            onClick={handleNavigateSnippets}
            icon={<FaCode className="h-6 w-6 cursor-pointer hover:text-pink" />}
          />
          <ToolBarItem
            name="Links"
            onClick={handleNavigateLinks}
            icon={
              <PiLinkSimpleBold className="h-6 w-6 cursor-pointer hover:text-pink" />
            }
          />
        </nav>
      ) : (
        <nav className="flex items-center">
          <FaCode
            onClick={handleNavigateSnippets}
            className="h-6 w-6 cursor-pointer hover:text-pink"
          />
          <PiLinkSimpleBold
            onClick={handleNavigateLinks}
            className="ms-5 h-6 w-6 cursor-pointer hover:text-pink"
          />
          <AiFillHome
            onClick={handleNavigateHome}
            className="ms-5 h-6 w-6 cursor-pointer hover:text-pink"
          />
        </nav>
      )}
    </>
  );
};

export default ToolBar;
