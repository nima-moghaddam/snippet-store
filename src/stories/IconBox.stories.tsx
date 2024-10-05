import IconBox from "../components/IconBox/IconBox";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FaHome } from "react-icons/fa";

type IconBoxProps = ComponentProps<typeof IconBox>;

const meta: Meta<IconBoxProps> = {
  component: IconBox,
};

export default meta;

type Story = StoryObj<IconBoxProps>;

export const IconBoxStory: Story = {
  args: {
    size: "lg",
    gradiant: false,
    icon: <FaHome />,
    isActive: false,
  },
  render: (args) => {
    return <IconBox {...args} />;
  },
};
