import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorPickerSection: Story = {
  args: {},
};
