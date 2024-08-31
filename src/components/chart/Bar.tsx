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
        className="relative h-[20px] bg-primary-gradient lg:h-[32px]"
        style={{ width: `calc(${percent}% + 50px)` }}
      >
        <span className="absolute left-[50%] top-[15%] text-sm text-white lg:top-[20%] lg:text-base">
          {percent}%
        </span>
      </div>
      <div className="ms-2 text-sm font-bold text-gray-dark lg:text-base">
        {name}
      </div>
    </div>
  );
};
