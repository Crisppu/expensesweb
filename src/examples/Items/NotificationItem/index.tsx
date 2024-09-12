import { Theme } from "@mui/material";

export function menuItem(theme:Theme) {
    const { palette, borders, transitions } = theme;

    const { secondary, light } = palette;
    const { borderRadius } = borders;

    return {
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: secondary.main,
      py: 1,
      px: 2,
      borderRadius: borderRadius.md,
      transition: transitions.create("background-color", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),

      "&:not(:last-child)": {
        mb: 1.25,
      },
      "&:hover": {
        backgroundColor: light.main,
      },
    };
}
interface OwnerState {
    color: "dark" | "light" | "white" | "transparent" | "inherit" |string;
}
export function menuImage(theme:Theme, ownerState:OwnerState) {
    const { functions, palette, borders } = theme;
    const { color } = ownerState;
    const { linearGradient } = functions;
    const { gradients } = palette;
    const { borderRadius } = borders;
    console.log(color)

    return {
      display: "grid",
      placeItems: "center",
      backgroundImage: gradients[color as keyof typeof gradients]
        ? linearGradient(gradients[color as keyof typeof gradients].main, gradients[color as keyof typeof gradients].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
      "& img": {
        width: "100%",
        borderRadius: borderRadius.lg,
      },
    };
}