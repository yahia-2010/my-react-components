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
  const generatedWidth = !excludingArray.includes("width")
    ? widthGenerator(styling?.width)
    : {};
  const generatedCentering = !excludingArray.includes("centering")
    ? centeringGenerator(styling?.centering)
    : {};

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
