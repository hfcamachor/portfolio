import type { Meta, StoryObj } from '@storybook/react';
import { PhotoFrame } from './PhotoFrame';

const meta = {
  title: 'Components/PhotoFrame',
  component: PhotoFrame,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PhotoFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoFrameEx: Story = {
  args: {
    color: 'blue'
  },
};
