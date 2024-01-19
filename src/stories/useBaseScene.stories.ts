import { StoryObj } from "@storybook/react";
import { UseBaseScene } from "./UseBaseScene";

const meta = {
  title: "Hooks/useBaseScene",
  component: UseBaseScene,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
