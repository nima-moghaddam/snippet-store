import Chart from "../../components/chart"
import { Tags } from "../../constants/Tags"
import { SnippetList } from "../../data"
import { RouteEnum } from "../../types/RouteModels"
import NavigateCard from "./NavigateCard"

const Dashboard = () => {
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
    return { [key]: Math.round(percentage) }
  })

  const categoryList = Object.values(Tags).map((tag) => {
    const tagCount = SnippetList.filter((item) => item.tags.includes(tag)).length
    return { [tag]: tagCount }
  })


  return (
    <section>
      <div className="flex mb-20">
        <NavigateCard link={`/${RouteEnum.Snippet}`} title="Snippets" icon={RouteEnum.Snippet} classes="me-5" />
        <NavigateCard link={`/${RouteEnum.Links}`} title="Links" icon={RouteEnum.Links} />
      </div>
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <Chart barColor="bg-pink" data={tagPercentsList} title="Tags Chart" />
        <Chart barColor="bg-blue" data={tagPercentsList} title="Category Chart" />
      </div>
    </section>
  )
}

export default Dashboard
