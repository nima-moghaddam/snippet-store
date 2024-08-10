import { IoChevronForwardOutline, IoChevronUpSharp } from "react-icons/io5"
import { Bar } from "./Bar"

interface Props {
  data: Record<string, number>[]
  title: string
  barColor: "bg-blue" | "bg-pink"
}

const Chart = ({ data, title, barColor }: Props) => {
  return (
    <div className="relative flex items-end border-s border-b w-[600px] h-[300px] ps-10">
      <span className="absolute left-[-55px] top-[50%] rotate-[-90deg] font-bold">{title}</span>
      <IoChevronUpSharp className="absolute top-[-10px] left-[-9px]" />
      <IoChevronForwardOutline className="absolute bottom-[-9px] right-[-9px]" />

      {data.map((item) => (
        <Bar key={Object.keys(item)[0]} name={Object.keys(item)[0]} percent={Object.values(item)[0]} barColor={barColor} />
      ))}
    </div>
  )
}

export default Chart
