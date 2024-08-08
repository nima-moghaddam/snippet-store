import { useNavigate } from "react-router"
import { RouteEnum } from "../../types/RouteModels"
import { FaCode } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

interface Props {
  title: string
  link: string
  icon: RouteEnum
  classes?: string
}

const NavigateCard = ({ link, title, icon, classes }: Props) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(link)}
      className={`group flex items-center justify-center bg-dark_lighter w-[350px] py-5 rounded-md cursor-pointer hover:shadow-3xl pe-5 ${classes}`}
    >
      {icon === RouteEnum.Snippet ? (
        <FaCode className="w-7 h-7 text-blue group-hover:text-pink mt-1" />
      ) : (
        <PiLinkSimpleBold className="w-7 h-7 text-blue group-hover:text-pink mt-1" />
      )}
      <span className="font-semibold text-[2rem] text-blue ms-5 group-hover:text-pink">{title}</span>
    </div>
  )
}

export default NavigateCard
