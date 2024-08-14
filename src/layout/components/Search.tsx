import { useEffect, useState } from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { PiTextTBold } from "react-icons/pi";
import { useNavigate } from "react-router";
import useFilterStore from "../../store/useFilterStore";
import useMenuStore from "../../store/useMenuStore";
import { RouteEnum } from "../../types/RouteModels";
import { SearchByStatusType } from "../../types/SearchByModels";

const Search = () => {
  const [term, setTerm] = useState("");
  const [searchBy, setSearchBy] = useState<SearchByStatusType>("title");

  const navigate = useNavigate();
  const { resetFilters, setSearchFilter } = useFilterStore((state) => state);
  const { resetMenu } = useMenuStore((state) => state);

  const handleSearch = (e: any) => {
    const term = e.target.value;
    setTerm(term);
  };

  const handleSearchOnEnter = (e: any) => {
    if (e.key === "Enter") {
      resetMenu();
      navigate(`/${RouteEnum.Snippet}`);
      setSearchFilter(term, searchBy);
    }
  };

  const handleSearhByOnclick = () => {
    resetFilters();
    setTerm("");
    setSearchBy((prev) => {
      if (prev === "code") return "title";
      else return "code";
    });
  };

  useEffect(() => {
    if (!term) resetFilters();
  }, [term]);

  return (
    <div className="flex items-center">
      <div className="relative me-4">
        <LuSearch className="absolute bottom-[10px] left-2 h-5 w-5" />
        <input
          placeholder={`Search snippet ${searchBy === "code" ? "code" : "title"}`}
          className="min-w-12 rounded-md border border-gray py-2 ps-10 outline-none focus:border-slate-400 md:min-w-[300px]"
          onChange={handleSearch}
          value={term}
          onKeyDown={handleSearchOnEnter}
        />
      </div>
      <div
        className={`relative hidden h-10 w-20 cursor-pointer items-center justify-between rounded-lg border border-gray px-[10px] transition-colors duration-300 sm:flex`}
        onClick={handleSearhByOnclick}
      >
        <IoCodeSlashOutline className="z-20 text-black" />
        <PiTextTBold className="z-20 text-black" />

        <span
          className={`absolute bottom-0 left-0 top-[1px] z-10 h-9 w-10 transform rounded-lg bg-pink shadow-md transition-transform duration-300 ${
            searchBy === "title" ? "translate-x-10" : ""
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Search;
