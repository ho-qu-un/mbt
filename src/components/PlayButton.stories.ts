import type { Meta, StoryObj } from "@storybook/react";

import { PlayButton } from "./PlayButton";

const meta: Meta<typeof PlayButton> = {
  title: "PlayButton",
  component: PlayButton,
};

export default meta;

export const Primary: StoryObj<typeof PlayButton> = {
  args: {},
};
