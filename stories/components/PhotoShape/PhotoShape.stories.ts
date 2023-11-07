import type { Meta, StoryObj } from '@storybook/react';
import { PhotoShape } from './PhotoShape';

const meta = {
  title: 'Components/PhotoShape',
  component: PhotoShape,
  tags: ['autodocs'],
  argTypes: {
    photoImage: {
      control: 'text',
    }
  },
} satisfies Meta<typeof PhotoShape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoShapeEx: Story = {
  args: {
    photoImage: "https://raw.githubusercontent.com/hfcamachor/portfolio/2b81945795e284029ec50142214ce5ac60a7fa26/public/photos/photo.png",
    alt: "Photo"
  },
};
