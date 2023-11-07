import type { Meta, StoryObj } from '@storybook/react';
import { TextBox } from './TextBox';

const meta = {
  title: 'Components/TextBox',
  component: TextBox,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextBoxEx: Story = {
  args: {
    children: 'Example text'
  },
};
