import type { Meta, StoryObj } from "@storybook/react";

import { PlayButton } from "./PlayButton";

const meta: Meta<typeof PlayButton> = {
  title: "PlayButton",
  component: PlayButton,
};

export default meta;
type Story = StoryObj<typeof PlayButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "PlayButton",
  },
};
