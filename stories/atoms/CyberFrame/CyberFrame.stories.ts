import type { Meta, StoryObj } from '@storybook/react';
import { CyberFrame } from './CyberFrame';

const meta = {
  title: 'Atoms/CyberFrame',
  component: CyberFrame,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof CyberFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CyberFrameEx: Story = {
  args: {
    children: 'Example text',
    color: "blue"
  },
};
