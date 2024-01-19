import { StoryObj } from "@storybook/react";
import { UseControls } from "./UseControls";

const meta = {
  title: "Hooks/useControls",
  component: UseControls,
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
