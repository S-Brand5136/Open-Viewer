import { StoryObj } from "@storybook/react";
import { BaseControls } from "./BaseControls";

const meta = {
  title: "Controls/BaseControls",
  component: BaseControls,
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
