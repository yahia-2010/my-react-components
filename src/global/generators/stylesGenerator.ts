import {
  bgGenerator,
  borderGenerator,
  textColorGenerator,
  roundnessGenerator,
  shadowGenerator,
  widthGenerator,
  centeringGenerator,
  gapGenerator,
} from "./generators";
import { StylingInterface } from "../interfaces/stylingInterface";

export const stylesGenerator = (
  styling: StylingInterface,
  excludingArray?: string[],
  defaultValues?: StylingInterface
) => {
  const generatedBg = excludingArray?.includes("bgColor")
    ? {}
    : defaultValues?.bgColor
    ? bgGenerator(defaultValues?.bgColor)
    : bgGenerator(styling?.bgColor);
  const generatedBorder = excludingArray?.includes("border")
    ? {}
    : defaultValues?.border
    ? borderGenerator(defaultValues?.border)
    : borderGenerator(styling?.border);
  const generatedTextColor = excludingArray?.includes("textColor")
    ? {}
    : defaultValues?.textColor
    ? textColorGenerator(defaultValues?.textColor)
    : textColorGenerator(styling?.textColor);
  const generatedRoundness = excludingArray?.includes("roundness")
    ? {}
    : defaultValues?.roundness
    ? roundnessGenerator(defaultValues?.roundness)
    : roundnessGenerator(styling?.roundness);
  const generatedShadow = excludingArray?.includes("shadow")
    ? {}
    : defaultValues?.shadow
    ? shadowGenerator(defaultValues?.shadow)
    : shadowGenerator(styling?.shadow);
  const generatedWidth = excludingArray?.includes("width")
    ? {}
    : defaultValues?.width
    ? widthGenerator(defaultValues?.width)
    : widthGenerator(styling?.width);
  const generatedCentering = excludingArray?.includes("centering")
    ? {}
    : defaultValues?.centering
    ? centeringGenerator(defaultValues?.centering)
    : centeringGenerator(styling?.centering);

  const generatedGap = excludingArray?.includes("gap")
    ? {}
    : defaultValues?.gap
    ? gapGenerator(defaultValues?.gap)
    : gapGenerator(styling?.gap);

  const styles = {
    ...generatedBg,
    ...generatedBorder,
    ...generatedTextColor,
    ...generatedRoundness,
    ...generatedShadow,
    ...generatedWidth,
    ...generatedCentering,
    ...generatedGap,
  };

  return styles;
};
