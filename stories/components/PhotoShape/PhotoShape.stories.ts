import type { Meta, StoryObj } from '@storybook/react';
import { PhotoShape } from './PhotoShape';

const meta = {
  title: 'Components/PhotoShape',
  component: PhotoShape,
  tags: ['autodocs'],
  argTypes: {
    imageShape: {
      control: 'text',
    }
  },
} satisfies Meta<typeof PhotoShape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonLabel: Story = {
  args: {
    imageShape: "Submit"
  },
};
