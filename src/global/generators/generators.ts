import {
  stringStyle,
  sizedColor,
  borderType,
  numberSizesFull,
  numberSizes,
} from "../types/types";
import { StylingInterface } from "../interfaces/stylingInterface";

export const bgGenerator = (bgColor: stringStyle): object => {
  const generatedBg = bgColor;

  return { backgroundColor: bgColor ? generatedBg : "#eee" };
};

export const textColorGenerator = (color: stringStyle): object => {
  const generatedTextColor = color;

  const defaultColorValue = "#000";

  return {
    color: !generatedTextColor ? defaultColorValue : generatedTextColor,
  };
};

export const roundnessGenerator = (
  roundness: numberSizesFull | undefined
): object => {
  const sizeValues = {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px",
    full: "50%",
  };

  const defaultSizeValue = "md";

  const generatedRoundness =
    typeof roundness === "string" ? sizeValues[roundness] : `${roundness}px`;
  return { borderRadius: generatedRoundness };
};

export const shadowGenerator = (shadow: sizedColor | undefined): object => {
  const sizeValues = {
    sm: "-2.5px",
    md: "-1px",
    lg: "1px",
    xl: "2.5px",
  };

  const defaultColorValue = "#eee";
  const defaultSizeValue = "md";

  const generatedShadow = `0 5px 10px ${
    sizeValues[shadow?.size || defaultSizeValue]
  } ${!shadow?.color ? defaultColorValue : shadow?.color} `;
  return { boxShadow: shadow ? generatedShadow : "" };
};

export const borderGenerator = (border: borderType | undefined): object => {
  const sizeValues = {
    sm: 1,
    md: 2,
    lg: 4,
    xl: 6,
  };

  const defaultSizeValue = "sm";

  const defaultColorValue = "#000";

  const defaultStyleValue = "solid";

  const generatedBorder = `${
    typeof border?.size === "string"
      ? sizeValues[border?.size || defaultSizeValue]
      : border?.size
  }px ${!border?.color ? defaultColorValue : border?.color} ${
    !border?.style ? defaultStyleValue : border?.style
  }`;
  return { border: generatedBorder };
};

export const widthGenerator = (width: numberSizesFull | undefined): object => {
  const sizeValues = {
    sm: "5rem",
    md: "15rem",
    lg: "25rem",
    xl: "35rem",
    full: "100%",
  };

  const defaultSizeValue = "auto";

  const generatedWidth = width
    ? typeof width === "string"
      ? sizeValues[width]
      : `${width}px`
    : defaultSizeValue;

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

export const gapGenerator = (gap: numberSizes | undefined): object => {
  const generatedGap =
    gap === "sm"
      ? "0.5rem"
      : gap === "md"
      ? "1.25rem"
      : gap === "lg"
      ? "2.5rem"
      : gap === "xl"
      ? "4rem"
      : typeof gap === "number"
      ? `${gap}px`
      : "1.25rem";
  return { gap: generatedGap };
};
