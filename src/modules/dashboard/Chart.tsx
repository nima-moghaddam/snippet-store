import { IoChevronUpSharp } from "react-icons/io5"
import { IoChevronForwardOutline } from "react-icons/io5"
import { Tags } from "../../constants/Tags"
import { SnippetList } from "../../data"

interface Bar {
  name: string
  percent: string | number
}

const Bar = ({ name, percent }: Bar) => {
  return (
    <div className={`relative w-[30px] bg-pink me-10`} style={{ height: `calc(${percent}% + 50px)` }}>
      <span className="absolute bottom-[-50px] right-0 rotate-[-45deg] text-nowrap">{name}</span>
      <span className="absolute top-[50%] rotate-[-55deg]">{percent}%</span>
    </div>
  )
}

const Chart = () => {
  const tagList = Object.values(Tags).map((tag) => {
    const tagCount = SnippetList.filter((item) => item.tags.includes(tag)).length
    return { [tag]: tagCount }
  })

  const totalTagCountSum = tagList.reduce((sum, item) => {
    const value = Object.values(item)[0]
    return sum + value
  }, 0)

  const tagPercentsList = tagList.map((item) => {
    const key = Object.keys(item)[0]
    const value = Object.values(item)[0]
    const percentage = (value / totalTagCountSum) * 100
    return { [key]: Math.floor(percentage) }
  })

  return (
    <div className="relative flex items-end border-s border-b w-[600px] h-[300px] ps-10">
      <span className="absolute left-[-55px] top-[50%] rotate-[-90deg] font-bold">Tags Chart</span>
      <IoChevronUpSharp className="absolute top-[-10px] left-[-9px]" />
      <IoChevronForwardOutline className="absolute bottom-[-9px] right-[-9px]" />

      {tagPercentsList.map((tag) => {
        const tagName = Object.keys(tag)[0]
        const percent = Object.values(tag)[0]
        return <Bar key={tagName} name={tagName} percent={percent} />
      })}
    </div>
  )
}

export default Chart
