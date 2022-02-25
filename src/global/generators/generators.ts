import {
  stringStyle,
  numberSizes,
  sizedColor,
  borderType,
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
  roundness: numberSizes | undefined | "full"
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

export const stylesGenerator = (
  styling: StylingInterface,
  excludingArray: string[] = []
) => {
  const generatedBg = !excludingArray.includes("bg")
    ? bgGenerator(styling?.bg)
    : {};
  const generatedBorder = !excludingArray.includes("border")
    ? borderGenerator(styling?.border)
    : {};
  const generatedTextColor = !excludingArray.includes("textColor")
    ? textColorGenerator(styling?.textColor)
    : {};
  const generatedRoundness = !excludingArray.includes("roundness")
    ? roundnessGenerator(styling?.roundness)
    : {};
  const generatedShadow = !excludingArray.includes("shadow")
    ? shadowGenerator(styling?.shadow)
    : {};

  const styles = {
    ...generatedBg,
    ...generatedBorder,
    ...generatedTextColor,
    ...generatedRoundness,
    ...generatedShadow,
  };

  return styles;
};
