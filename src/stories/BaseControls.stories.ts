import { Meta, StoryObj } from "@storybook/react";
import { BaseControls as Controls } from "./BaseControls";

const meta = {
  title: "Controls/Controls",
  component: Controls,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    model_url: {
      control: {
        type: "text",
        defaultValue: "./models/toaster.glb",
        description: "URL of the model to load",
      },
    },
  },
} satisfies Meta<typeof Controls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    model_url: "./models/toaster.glb",
  },
};

export const Advanced: Story = {
  args: {
    model_url: "./models/toaster.glb",
    cameraOrbit: true,
    cameraOrbitSpeed: 0.1,
    disableZoom: true,
    minZoom: 5,
    maxZoom: 10,
  },
};
