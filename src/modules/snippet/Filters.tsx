import useFilterStore from "../../store/useFilterStore";
import FilterPill from "./components/FilterPill";
import { FaHashtag } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { ImSpinner11 } from "react-icons/im";

const Filters = () => {
  const { tag, term, resetFilters } = useFilterStore((state) => state);

  return (
    <div className="flex items-center">
      <ImSpinner11
        className="me-2 h-4 w-4 cursor-pointer text-gray-dark hover:animate-spin"
        onClick={resetFilters}
      />
      <span className="me-2 text-gray-dark">Filters</span>
      {tag && <FilterPill icon={<FaHashtag />} name={tag} />}
      {term && <FilterPill icon={<IoSearchOutline />} name={term} />}
    </div>
  );
};

export default Filters;
