import type { Meta, StoryObj } from '@storybook/react';
import { CyberTextFrame } from './CyberTextFrame';

const meta = {
  title: 'Atoms/CyberTextFrame',
  component: CyberTextFrame,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof CyberTextFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CyberTextFrameEx: Story = {
  args: {
    children: 'Example text'
  },
};
