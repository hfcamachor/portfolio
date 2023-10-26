import type { Meta, StoryObj } from '@storybook/react';
import { CodeMenuButton } from './CodeMenuButton';

const meta = {
  title: 'Components/CodeMenuButton',
  component: CodeMenuButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof CodeMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonLabel: Story = {
  args: {
    label: "Submit"
  },
};
