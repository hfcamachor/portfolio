import type { Meta, StoryObj } from '@storybook/react';
import { CyberButton } from './CyberButton';

const meta = {
  title: 'Atoms/CyberButton',
  component: CyberButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof CyberButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonLabel: Story = {
  args: {
    label: "Submit"
  },
};
