import { AiFillHome } from "react-icons/ai"
import { useNavigate } from "react-router"
import useFilterStore from "../store/useFilterStore"
import useMenuStore from "../store/useMenuStore"
import { LuSearch } from "react-icons/lu"
import { useEffect, useState } from "react"
import { IoCodeSlashOutline } from "react-icons/io5"
import { PiTextTBold } from "react-icons/pi"
import { SearchByStatusType } from "../types/SearchByModels"

const Navbar = () => {
  const [term, setTerm] = useState("")
  const [searchBy, setSearchBy] = useState<SearchByStatusType>("title")

  const navigate = useNavigate()
  const { resetFilters, setSearchFilter } = useFilterStore((state) => state)
  const { resetMenu } = useMenuStore((state) => state)

  const handleNavigateHome = () => {
    navigate("/")
    resetFilters()
    resetMenu()
  }

  const handleSearch = (e: any) => {
    const term = e.target.value
    setTerm(term)
  }

  const handleSearchOnEnter = (e: any) => {
    if (e.key === "Enter") {
      resetMenu()
      navigate("/")
      setSearchFilter(term, searchBy)
    }
  }

  const handleSearhByOnclick = () => {
    resetFilters()
    setTerm("")
    setSearchBy((prev) => {
      if (prev === "code") return "title"
      else return "code"
    })
  }

  useEffect(() => {
    if (!term) resetFilters()
  }, [term])

  return (
    <div className="min-h-[80px] w-full flex justify-between items-center px-14">
      <div className="flex items-center">
        <div className="relative me-4">
          <LuSearch className="w-5 h-5 absolute left-2 bottom-[10px]" />
          <input
            placeholder={`Search snippet ${searchBy === "code" ? "code" : "title"}`}
            className="border border-gray rounded-md py-2 outline-none ps-10 min-w-[300px] focus:border-slate-400"
            onChange={handleSearch}
            value={term}
            onKeyDown={handleSearchOnEnter}
          />
        </div>
        <div
          className={`relative flex justify-between items-center w-20 h-10 transition-colors duration-300 border border-gray cursor-pointer rounded-lg px-[10px]`}
          onClick={handleSearhByOnclick}
        >
          <IoCodeSlashOutline className="text-black z-20" />
          <PiTextTBold className="text-black z-20" />

          <span
            className={`absolute z-10 bg-pink left-0 top-[1px] bottom-0 h-9 w-10 rounded-lg shadow-md transform transition-transform duration-300 ${
              searchBy === "title" ? "translate-x-10" : ""
            }`}
          ></span>
        </div>
      </div>

      <div className="flex items-center">
        <AiFillHome onClick={handleNavigateHome} className="w-6 h-6 cursor-pointer hover:text-pink" />
      </div>
    </div>
  )
}

export default Navbar
