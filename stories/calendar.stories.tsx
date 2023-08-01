// [build] library: 'shadcn'
import { Meta, StoryObj } from "@storybook/react";
import { Loader2, Mail } from "lucide-react";

import { Calendar } from "../components/ui/calendar";

const meta: Meta<typeof Calendar> = {
  title: "ui/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Base: Story = {
  render: (args) => <Calendar {...args}>Calendar</Calendar>,
  args: {
    mode: "single",
    className: "rounded-md border",
  },
};
