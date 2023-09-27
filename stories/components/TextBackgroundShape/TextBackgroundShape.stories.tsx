import type { Meta, StoryObj } from "@storybook/react";

import { TextBackgroundShape } from "./TextBackgroundShape";

const meta = {
  title: "Components/TextBackgroundShape",
  component: TextBackgroundShape,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof TextBackgroundShape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "cyan",
    variant: "h5",
    label: "Button",
  },
};
