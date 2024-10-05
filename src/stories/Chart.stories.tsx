import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Chart from "../components/chart";

type ChartProps = ComponentProps<typeof Chart>;

const meta: Meta<ChartProps> = {
  component: Chart,
};

export default meta;

type Story = StoryObj<ChartProps>;

export const ChartStory: Story = {
  args: {
    data: [
      { item1: 10 },
      { item2: 30 },
      { item3: 45 },
      { item4: 25 },
      { item5: 5 },
    ],
  },
  render: (args) => {
    return <Chart {...args} />;
  },
};
