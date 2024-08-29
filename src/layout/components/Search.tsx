import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useFilterStore from "../../store/useFilterStore";
import useMenuStore from "../../store/useMenuStore";
import { RouteEnum } from "../../types/RouteModels";
import { SearchByEnum } from "../../types/SearchByModels";
import { PiCodeBold } from "react-icons/pi";
import { PiTextTBold } from "react-icons/pi";

const Search = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const [term, setTerm] = useState("");
  const [searchBy, setSearchBy] = useState<SearchByEnum>(SearchByEnum.Snippet);

  const navigate = useNavigate();
  const {
    resetFilters,
    setSearchFilter,
    term: storeTermValue,
  } = useFilterStore((state) => state);
  const { resetMenu } = useMenuStore((state) => state);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setTerm(term);
  };

  const handleSearchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      resetMenu();
      setSearchFilter(term, searchBy);

      if (searchBy === SearchByEnum.Snippet) navigate(`/${RouteEnum.Snippet}`);
      else navigate(`/${RouteEnum.Links}`);
    }
  };

  const handleSearhByOnclick = () => {
    resetFilters();
    setTerm("");
    setSearchBy((prev) => {
      if (prev === SearchByEnum.Snippet) return SearchByEnum.Link;
      return SearchByEnum.Snippet;
    });
  };

  useEffect(() => {
    if (!term) resetFilters();
  }, [term]);

  useEffect(() => {
    if (!storeTermValue) setTerm("");
  }, [storeTermValue]);

  return (
    <div className="flex items-center">
      <div className="relative">
        <div
          className={`absolute bottom-[-0.6rem] right-[-1rem] rounded-full p-2 ${hasScrolled ? "bg-primary" : "bg-primary"}`}
        >
          <div
            className="h-full w-full cursor-pointer rounded-full bg-white p-3 shadow shadow-gray-lighter"
            onClick={handleSearhByOnclick}
            style={{
              transition: "transform 1s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "rotateY(180deg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "rotateY(0deg)")
            }
          >
            {searchBy === SearchByEnum.Snippet ? (
              <PiCodeBold className="h-5 w-5 text-gray" />
            ) : (
              <PiTextTBold className="h-5 w-5 text-gray" />
            )}
          </div>
        </div>
        <input
          placeholder={`Search ${searchBy === SearchByEnum.Snippet ? "snippets" : "links"}...`}
          className="min-w-8 rounded-lg py-2 ps-5 text-gray-light shadow-sm shadow-gray-lighter outline-none sm:min-w-[100px] lg:min-w-[300px]"
          onChange={handleSearch}
          value={term}
          onKeyDown={handleSearchOnEnter}
        />
      </div>
    </div>
  );
};

export default Search;
