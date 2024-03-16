/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@ignite-ui/react";

export default {
  title: "Form/Button",
  component: Button,
} as Meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Envias",
  },
};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "small",
  },
};
