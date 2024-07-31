import { AiFillHome } from "react-icons/ai"
import { useNavigate } from "react-router"
import useFilterStore from "../store/useFilterStore"
import useMenuStore from "../store/useMenuStore"
import { LuSearch } from "react-icons/lu"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [term, setTerm] = useState("")
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
      setSearchFilter(term)
    }
  }

  useEffect(() => {
    if (!term) resetFilters()
  }, [term])

  return (
    <div className="min-h-[80px] w-full flex justify-between items-center px-[70px]">
      <div className="relative">
        <LuSearch className="w-5 h-5 absolute left-2 bottom-[10px]" />
        <input
          placeholder="Search snippet"
          className="border border-gray rounded-md py-2 outline-none ps-10 min-w-[300px] focus:border-slate-400"
          onChange={handleSearch}
          value={term}
          onKeyDown={handleSearchOnEnter}
        />
      </div>
      <div className="flex items-center">
        <AiFillHome onClick={handleNavigateHome} className="w-6 h-6 cursor-pointer hover:text-pink" />
      </div>
    </div>
  )
}

export default Navbar
