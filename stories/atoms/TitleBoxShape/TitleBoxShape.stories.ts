import type { Meta, StoryObj } from '@storybook/react';
import { TitleBoxShape } from './TitleBoxShape';

const meta = {
  title: 'Atoms/TitleBoxShape',
  component: TitleBoxShape,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    title: {
      control: 'text',
    }
  },
} satisfies Meta<typeof TitleBoxShape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleBoxShapeEx: Story = {
  args: {
    title: "Hi, my name is",
    color: "red"
  },
};
