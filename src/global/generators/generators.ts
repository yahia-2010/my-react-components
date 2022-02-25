import {
  stringStyle,
  sizedColor,
  borderType,
  numberSizesFull,
} from "../types/types";
import { StylingInterface } from "../interfaces/stylingInterface";

export const bgGenerator = (bg: stringStyle): object => {
  const generatedBg = bg;
  return { backgroundColor: generatedBg };
};

export const textColorGenerator = (color: stringStyle): object => {
  const generatedTextColor = color;
  return { color: generatedTextColor };
};

export const roundnessGenerator = (
  roundness: numberSizesFull | undefined
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
      : roundness === "full"
      ? "50%"
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

export const borderGenerator = (border: borderType | undefined): object => {
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

export const widthGenerator = (width: numberSizesFull | undefined): object => {
  const generatedWidth =
    typeof width === "string"
      ? width === "sm"
        ? "5rem"
        : width === "md"
        ? "15rem"
        : width === "lg"
        ? "25rem"
        : width === "xl"
        ? "35rem"
        : width === "full"
        ? "100%"
        : "auto"
      : `${width}px`;

  return { width: generatedWidth };
};

export const centeringGenerator = (centering: boolean | undefined): object => {
  const generatedCentering = centering
    ? {
        alignItems: "center",
        justifyContent: "center",
      }
    : {};

  return { ...generatedCentering };
};
