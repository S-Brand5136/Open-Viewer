import { StoryObj } from "@storybook/react";
import { BaseScene } from "./BaseScene";

const meta = {
  title: "Components/BaseScene",
  component: BaseScene,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    flat: {
      control: {
        type: "boolean",
        defaultValue: false,
      },
      description: "Whether to use flat shading",
    },
    frameLoop: {
      control: {
        type: "text",
        defaultValue: "always",
      },
      description: "Type of frame loop to use, always, demand or never",
    },
    model_url: {
      control: {
        type: "text",
        defaultValue: "",
      },
      description: "URL of the model to load",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    flat: false,
    frameLoop: "always",
    model_url: "",
  },
};
