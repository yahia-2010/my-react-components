import {
  stringStyle,
  numberSizes,
  sizedColor,
  borderType,
} from "../types/types";

export const bgGenerator = (bg: stringStyle): object => {
  const generatedBg = bg;
  return { backgroundColor: generatedBg };
};

export const textColorGenerator = (color: stringStyle): object => {
  const generatedTextColor = color;
  return { color: generatedTextColor };
};

export const roundnessGenerator = (
  roundness: numberSizes | undefined
): object => {
  const generatedRoundness =
    roundness === "sm"
      ? "4px"
      : roundness === "md"
      ? "8px"
      : roundness === "lg"
      ? "12px"
      : roundness === "xl"
      ? "20px"
      : `${roundness}px`;
  return { borderRadius: generatedRoundness };
};

export const shadowGenerator = (shadow: sizedColor | undefined): object => {
  const generatedShadow = `0 5px 10px ${
    shadow?.size === "sm"
      ? "-2.5px"
      : shadow?.size === "md"
      ? "-1px"
      : shadow?.size === "lg"
      ? "1px"
      : shadow?.size === "xl"
      ? "2.5px"
      : ""
  } ${shadow?.color} `;
  return { boxShadow: generatedShadow };
};

export const boredGenerator = (border: borderType | undefined): object => {
  const generatedBorder = `${
    border?.size === "sm"
      ? 1
      : border?.size === "md"
      ? 2
      : border?.size === "lg"
      ? 4
      : border?.size === "xl"
      ? 6
      : border?.size
  }px ${border?.color} ${border?.style}`;
  return { border: generatedBorder };
};
