import type { Meta, StoryObj } from '@storybook/react';
import { CyberTitle } from './CyberTitle';

const meta = {
  title: 'Atoms/CyberTitle',
  component: CyberTitle,
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
} satisfies Meta<typeof CyberTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CyberTitleEx: Story = {
  args: {
    title: "Hi, my name is",
    titleTwo: "Homer Simpson",
    color: "yellow"
  },
};
