import { Bar } from "./Bar";

interface Props {
  data: Record<string, number>[];
}

const Chart = ({ data }: Props) => {
  return (
    <div className="flex h-[400px] w-[200px] rotate-0 flex-col items-center justify-center sm:h-[200px] sm:rotate-[-90deg]">
      {data.map((item) => (
        <Bar
          key={Object.keys(item)[0]}
          name={Object.keys(item)[0]}
          percent={Object.values(item)[0]}
        />
      ))}
    </div>
  );
};

export default Chart;
