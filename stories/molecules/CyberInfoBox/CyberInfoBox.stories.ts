import type { Meta, StoryObj } from '@storybook/react';
import { CyberInfoBox } from './CyberInfoBox';

const meta = {
  title: 'Molecules/CyberInfoBox',
  component: CyberInfoBox,
  tags: ['autodocs'],
  argTypes: {
    photoImage: {
      control: 'text',
    }
  },
} satisfies Meta<typeof CyberInfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CyberInfoBoxEx: Story = {
  args: {
    photoImage: "https://raw.githubusercontent.com/hfcamachor/portfolio/d3d0a479f673cc9897c755e1da9b2752681ceab2/public/photos/photo-s.png",
    alt: "Photo"
  },
};
