import useAnimation from "../../utils/useAnimation"

interface Props {
  name: string
  percent: string | number
  barColor: "bg-blue" | "bg-pink"
}

export const Bar = ({ name, percent, barColor }: Props) => {
  const { animateClass } = useAnimation()

  return (
    <div className={`relative w-[30px] me-10 ${barColor} ${animateClass}`} style={{ height: `calc(${percent}% + 50px)` }}>
      <span className="absolute bottom-[-50px] right-0 rotate-[-45deg] text-nowrap">{name}</span>
      <span className="absolute top-[50%] rotate-[-55deg] text-white">{percent}%</span>
    </div>
  )
}
