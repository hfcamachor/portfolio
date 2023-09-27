import type { Meta, StoryObj } from "@storybook/react";

import { ShapeParagraph } from "./ShapeParagraph";

const meta = {
  title: "Components/ShapeParagraph",
  component: ShapeParagraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ShapeParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "default",
    children: <p>Text Example</p>
  },
};
