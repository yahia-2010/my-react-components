import { stringStyle, sizes, numberSizes, sizedColor } from "../types/types";

export const bgGenerator = (bg: stringStyle): stringStyle => {
  const generatedBg = bg;
  return generatedBg;
};

export const textColorGenerator = (color: stringStyle): stringStyle => {
  const generatedTextColor = color;
  return generatedTextColor;
};

export const roundnessGenerator = (
  roundness: numberSizes | undefined
): string => {
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
  return generatedRoundness;
};

export const shadowGenerator = (shadow: sizedColor | undefined): string => {
  const generatedShadow = `0 5px 10px ${
    shadow?.size === "sm"
      ? "-2.5px"
      : shadow?.size === "md"
      ? "-1px"
      : shadow?.size === "lg"
      ? "1px"
      : shadow?.size === "xl"
      ? "12.5px"
      : ""
  } ${shadow?.color} `;
  return generatedShadow;
};
