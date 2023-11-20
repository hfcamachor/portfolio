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
    color: "blue",
    image: "https://raw.githubusercontent.com/hfcamachor/portfolio/a069dd08b898f7011e1e9c18129575830542ded4/public/assets/home-image-one.png"
  },
};
