import { AiFillHome } from "react-icons/ai"
import { FaCode } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"
import { useNavigate } from "react-router"
import useFilterStore from "../../store/useFilterStore"
import useMenuStore from "../../store/useMenuStore"
import { RouteEnum } from "../../types/RouteModels"

const NavigationToolbar = () => {
  const navigate = useNavigate()
  const { resetMenu } = useMenuStore((state) => state)
  const { resetFilters } = useFilterStore((state) => state)

  const handleNavigateHome = () => {
    navigate("/")
    resetFilters()
    resetMenu()
  }

  const handleNavigateSnippets = () => {
    navigate(`/${RouteEnum.Snippet}`)
    resetFilters()
    resetMenu()
  }

  const handleNavigateLinks = () => {
    navigate(`/${RouteEnum.Links}`)
    resetFilters()
    resetMenu()
  }

  return (
    <div className="flex items-center">
      <FaCode onClick={handleNavigateSnippets} className="w-6 h-6 cursor-pointer hover:text-pink" />
      <PiLinkSimpleBold onClick={handleNavigateLinks} className="w-6 h-6 ms-5 cursor-pointer hover:text-pink" />
      <AiFillHome onClick={handleNavigateHome} className="w-6 h-6 ms-5 cursor-pointer hover:text-pink" />
    </div>
  )
}

export default NavigationToolbar
