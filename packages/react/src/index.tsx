/* eslint-disable prettier/prettier */
import { styled } from "./styles";
import { ComponentProps } from "react";

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  padding: "$4",
  height: "$4",

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
