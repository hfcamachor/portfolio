import type { Meta, StoryObj } from '@storybook/react';
import FontComponent from './FontComponent';

const meta = {
  title: 'Components/FontComponent',
  component: FontComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      control: "text",
    }
  }
} satisfies Meta<typeof FontComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontComponentSection: Story = {
  args: {
    fontName: "roboto",
    children: "Font family"
  },
};
