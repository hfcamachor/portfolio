import type { Meta, StoryObj } from '@storybook/react';
import { HeaderButton } from './HeaderButton';

const meta = {
  title: 'Components/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof HeaderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonLabel: Story = {
  args: {
    label: "Submit"
  },
};
