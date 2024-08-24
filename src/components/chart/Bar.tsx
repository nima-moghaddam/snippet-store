import useAnimation from "../../utils/useAnimation";

interface Props {
  name: string;
  percent: string | number;
}

export const Bar = ({ name, percent }: Props) => {
  const { animateClass } = useAnimation();

  return (
    <div className={`mb-3 flex w-full items-center ${animateClass}`}>
      <div
        className="relative h-[40px] bg-primary-gradient"
        style={{ width: `calc(${percent}% + 50px)` }}
      >
        <span className="absolute left-[50%] top-[20%] text-white">
          {percent}%
        </span>
      </div>
      <div className="ms-2 font-bold text-gray-dark">{name}</div>
    </div>
  );
};
