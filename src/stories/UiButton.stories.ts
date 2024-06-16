import type { Meta, StoryObj } from "@storybook/react";
import { UiButton } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI Components/Button",
  component: UiButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean" },
    variant: {
      control: "radio",
      options: ["flushed", "outline", "ghost", "link"],
    },
  },
  args: { onClick: () => alert("clicked") },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const UiButtonDisabled: Story = {
  args: {
    isDisabled: true,
    children: "Sample button",
    variant: "outline",
    colorScheme: "blue",
  },
};
