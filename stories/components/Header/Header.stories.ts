import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    navItems: [
      {
        label: "Home",
        onClick: () => {console.log("My home")}
      },
      {
        label: "About",
        onClick: () => {console.log("About")}
      },
      {
        label: "Experience",
      },
      {
        label: "Work",
        onClick: () => {console.log("My Work")}
      },
    ]
  },
};
