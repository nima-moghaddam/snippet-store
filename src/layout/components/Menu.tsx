import { useState } from "react"
import { ISnippet } from "../../types/ISnippetModels"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import { RiCodeSSlashFill } from "react-icons/ri"

interface Props {
  name: string
  items: ISnippet[]
  classes?: string
}

const Menu = ({ name, items, classes }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`group text-white font-bold cursor-pointer ${classes}`}>
      <div className="flex items-center mb-3 group-hover:text-pink" onClick={handleMenuClick}>
        <span className="me-3">{name}</span>
        {isOpen ? <IoIosArrowDown className="w-4 h-4" /> : <IoIosArrowForward className="w-4 h-4" />}
      </div>
      {isOpen && (
        <ul className="flex flex-col ps-5">
          {items.map((i) => (
            <li key={i.title} className="flex items-center mb-2 hover:text-pink">
              <RiCodeSSlashFill className="w-4 h-4 me-2" />
              <span className="">{i.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Menu
