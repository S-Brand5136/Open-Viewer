import { StoryObj } from "@storybook/react";
import { BaseScene } from "./BaseScene";

const meta = {
  title: "Components/BaseScene",
  component: BaseScene,
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
