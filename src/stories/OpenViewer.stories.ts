import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import OpenViewer from "./OpenViewer";

const meta = {
  title: "OpenViewer/OpenViewer",
  component: OpenViewer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    model_url: {
      control: "text",
      defaultValue: "./models/toaster.glb",
      description: "URL of the model to load",
    },
    camera_controls: {
      control: "boolean",
      defaultValue: true,
      description: "Enable camera controls",
    },
    camera_orbit: {
      control: "boolean",
      defaultValue: false,
      description: "Enable camera to orbit around model",
    },
    disable_zoom: {
      control: "boolean",
      defaultValue: false,
      description: "Disable zoom",
    },
    min_zoom: {
      control: "number",
      defaultValue: undefined,
      description: "Minimum camera zoom",
    },
    max_zoom: {
      control: "number",
      defaultValue: undefined,
      description: "Maximum camera zoom",
    },
    skybox: { control: "text", defaultValue: "", description: "Skybox URL" },
    bgColor: {
      control: "color",
      defaultValue: undefined,
      description: "Background color",
    },
    initialCameraPosition: {
      control: "object",
      defaultValue: undefined,
      description: "Initial camera position",
    },
  },
} satisfies Meta<typeof OpenViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    model_url: "./models/toaster.glb",
    camera_controls: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const baseScene = canvas.getByTestId("canvas-container");
    await expect(baseScene).toBeInTheDocument();

    // test for cursor change on hover
    const canvasContainer = canvas.getByTestId("canvas-container");
    await expect(canvasContainer).toBeInTheDocument();

    await waitFor(async () => {
      await userEvent.hover(canvasContainer).then(() => {
        expect(document.body).toHaveStyle("cursor: grab");
      });

      await userEvent.unhover(canvasContainer).then(() => {
        expect(document.body).toHaveStyle("cursor: auto");
      });
    });
  },
};

export const Advanced: Story = {
  args: {
    model_url: "./models/toaster.glb",
    camera_controls: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const baseScene = canvas.getByTestId("canvas-container");
    await expect(baseScene).toBeInTheDocument();

    // test for cursor change on hover
    const canvasContainer = canvas.getByTestId("canvas-container");
    await expect(canvasContainer).toBeInTheDocument();

    await waitFor(async () => {
      await userEvent.hover(canvasContainer).then(() => {
        expect(document.body).toHaveStyle("cursor: grab");
      });

      await userEvent.unhover(canvasContainer).then(() => {
        expect(document.body).toHaveStyle("cursor: auto");
      });
    });
  },
};
