import type { Meta, StoryObj } from "@storybook/react";
import { CyberInfoFrame } from "./CyberInfoFrame";

const meta = {
  title: "Molecules/CyberInfoFrame",
  component: CyberInfoFrame,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof CyberInfoFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CyberInfoFrameEx: Story = {
  args: {
    title: "Box title",
    subtitle: "Box subtitle",
    buttonLabel: "Create another response",
    responseTitle: "Ai response",
    responseText:
      "Lorem ipsum dolor sit amet. Quo corporis cupiditate qui aliquam explicabo ut rerum galisum. Aut sint consequatur ea porro ullam id neque nemo non voluptas aperiam est unde adipisci aut internos iusto. Sed repellendus autem ea blanditiis illo ut aliquam internos nam quos labore in voluptatum reprehenderit qui nostrum laboriosam est molestiae ipsam. Ut fuga harum a dolor distinctio eum beatae galisum vel explicabo dolorum qui odit odio et nulla consequatur.",
  },
};
