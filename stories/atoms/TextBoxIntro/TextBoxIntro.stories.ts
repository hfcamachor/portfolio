import type { Meta, StoryObj } from '@storybook/react';
import { TextBoxIntro } from './TextBoxIntro';

const meta = {
  title: 'Atoms/TextBoxIntro',
  component: TextBoxIntro,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    titleTwo: {
      control: 'text',
    },
  },
} satisfies Meta<typeof TextBoxIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextBoxIntroEx: Story = {
  args: {
    title: "Hi, my name is",
    titleTwo: "Homer Simpson",
    color: "yellow",
    level: 1
  },
};
