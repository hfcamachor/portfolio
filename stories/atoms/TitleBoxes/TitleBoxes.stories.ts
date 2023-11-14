import type { Meta, StoryObj } from '@storybook/react';
import { TitleBoxes } from './TitleBoxes';

const meta = {
  title: 'Atoms/TitleBoxes',
  component: TitleBoxes,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    title: {
      control: 'text',
    }
  },
} satisfies Meta<typeof TitleBoxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleBoxesEx: Story = {
  args: {
    title: "Hi, my name is",
    color: "red"
  },
};
