import { StoryObj } from "@storybook/react";
import { Model } from "./Model";

const meta = {
  title: "Components/Model",
  component: Model,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    model_url: {
      control: {
        type: "text",
        defaultValue: "./models/toaster.glb",
      },
      description: "URL of the model to load.",
    },
    groupProps: {
      control: {
        type: "object",
        defaultValue: {},
      },
      description: "Props to pass to the group that wraps the model.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    model_url: "./models/toaster.glb",
    groupProps: {},
  },
};
