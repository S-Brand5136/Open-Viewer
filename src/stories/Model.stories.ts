import { StoryObj } from "@storybook/react";
import { Model } from "./Model";

const meta = {
  title: "Components/Model",
  component: Model,
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
