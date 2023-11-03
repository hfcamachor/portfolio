import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedCircle } from './AnimatedCircle';

const meta = {
  title: 'Components/AnimatedCircle',
  component: AnimatedCircle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    image: {
      control: "text"
    }
  }
} satisfies Meta<typeof AnimatedCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnimatedCircleSection: Story = {
  args: {
    image: "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Cyberpunk2077_A_mercenary_on_the_rise_RGB.png?w=1296",
    alt: "",
    color: ""
  },
};
