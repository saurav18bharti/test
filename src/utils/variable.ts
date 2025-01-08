import { tv } from "tailwind-variants";

export const appContent = tv({
  base: "px-4 py-6 mx-auto",
  variants: {
    place: {
      console: "py-6 max-w-screen-lg",
      train: "py-6 max-w-screen-xl",
      overview: "py-6 max-w-screen-xl",
    },
  },
});