import type { Meta, StoryObj } from '@storybook/react';
import { CyberInfoFrame } from './CyberInfoFrame';

const meta = {
  title: 'Atoms/CyberInfoFrame',
  component: CyberInfoFrame,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof CyberInfoFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CyberInfoFrameEx: Story = {
  args: {
    children: 'Example text'
  },
};
