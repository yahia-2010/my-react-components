import {
  bgGenerator,
  borderGenerator,
  textColorGenerator,
  roundnessGenerator,
  shadowGenerator,
  widthGenerator,
  centeringGenerator,
} from "./generators";
import { StylingInterface } from "../interfaces/stylingInterface";

export const stylesGenerator = (
  styling: StylingInterface,
  excludingArray?: string[],
  defaultValues?: StylingInterface
) => {
  const generatedBg = !excludingArray?.includes("bg")
    ? styling?.bg
      ? bgGenerator(styling?.bg)
      : bgGenerator(defaultValues?.bg)
    : {};
  const generatedBorder =
    !excludingArray?.includes("border") && !defaultValues?.border
      ? borderGenerator(styling?.border)
      : borderGenerator(defaultValues?.border) || {};
  const generatedTextColor =
    !excludingArray?.includes("textColor") && !defaultValues?.textColor
      ? textColorGenerator(styling?.textColor)
      : textColorGenerator(defaultValues?.textColor) || {};
  const generatedRoundness =
    !excludingArray?.includes("roundness") && !defaultValues?.roundness
      ? roundnessGenerator(styling?.roundness)
      : roundnessGenerator(defaultValues?.roundness) || {};
  const generatedShadow =
    !excludingArray?.includes("shadow") && !defaultValues?.shadow
      ? shadowGenerator(styling?.shadow)
      : shadowGenerator(defaultValues?.shadow) || {};
  const generatedWidth =
    !excludingArray?.includes("width") && !defaultValues?.width
      ? widthGenerator(styling?.width)
      : widthGenerator(defaultValues?.width) || {};
  const generatedCentering =
    !excludingArray?.includes("centering") && !defaultValues?.centering
      ? centeringGenerator(styling?.centering)
      : centeringGenerator(defaultValues?.centering) || {};

  const styles = {
    ...generatedBg,
    ...generatedBorder,
    ...generatedTextColor,
    ...generatedRoundness,
    ...generatedShadow,
    ...generatedWidth,
    ...generatedCentering,
  };

  return styles;
};
