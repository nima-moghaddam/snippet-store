import { RouteEnum } from "../../types/RouteModels"
import Chart from "./Chart"
import NavigateCard from "./NavigateCard"

const Dashboard = () => {
  return (
    <section>
      <div className="flex mb-20">
        <NavigateCard link={`/${RouteEnum.Snippet}`} title="Snippets" icon={RouteEnum.Snippet} classes="me-5" />
        <NavigateCard link={`/${RouteEnum.Links}`} title="Links" icon={RouteEnum.Links} />
      </div>
      <Chart />
    </section>
  )
}

export default Dashboard
