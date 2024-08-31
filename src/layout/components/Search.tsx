import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useFilterStore from "../../store/useFilterStore";
import useMenuStore from "../../store/useMenuStore";
import { RouteEnum } from "../../types/RouteModels";
import { SearchByEnum } from "../../types/SearchByModels";
import { PiCodeBold } from "react-icons/pi";
import { PiTextTBold } from "react-icons/pi";

const Search = () => {
  const [term, setTerm] = useState("");
  const [searchBy, setSearchBy] = useState<SearchByEnum>(SearchByEnum.Snippet);
  const [rotation, setRotation] = useState(0);

  const {
    resetFilters,
    setSearchFilter,
    term: storeTermValue,
  } = useFilterStore((state) => state);
  const { resetMenu } = useMenuStore((state) => state);
  const navigate = useNavigate();

  const searchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      resetMenu();
      setSearchFilter(term, searchBy);

      if (searchBy === SearchByEnum.Snippet) navigate(`/${RouteEnum.Snippet}`);
      else navigate(`/${RouteEnum.Links}`);
    }
  };

  const onSearchBy = () => {
    resetFilters();
    setTerm("");
    setRotation((prevRotation) => prevRotation + 180);

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
      <div className="relative me-4">
        <div className="absolute bottom-[-0.55rem] right-[-2rem] rounded-3xl border-l border-slate-200 bg-primary py-2 pe-2 ps-2 md:bottom-[-0.3em] md:right-[-0.4rem] md:pe-2">
          <div
            className="h-full w-full cursor-pointer rounded-full bg-primary-gradient p-2 shadow shadow-gray-lighter md:p-[0.4rem]"
            onClick={onSearchBy}
            style={{
              transition: "transform 1s",
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {searchBy === SearchByEnum.Snippet ? (
              <PiCodeBold className="size-4 text-white" />
            ) : (
              <PiTextTBold className="size-4 text-white" />
            )}
          </div>
        </div>
        <input
          placeholder={`Search ${searchBy === SearchByEnum.Snippet ? "snippets" : "links"}`}
          className="min-w-8 rounded-lg py-2 ps-2 text-sm text-gray-light shadow-sm shadow-gray-lighter outline-none sm:min-w-[150px] md:ps-5 md:text-base lg:min-w-[300px]"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          onKeyDown={searchOnEnter}
        />
      </div>
    </div>
  );
};

export default Search;
