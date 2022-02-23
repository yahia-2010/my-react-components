import React, { Children } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  sizes,
  numberSizes,
  sizedColor,
  numberSizedColor,
} from "../../global/types/types";
import { sizeGenerator } from "./ButtonPropsGenerators";
import {
  bgGenerator,
  textColorGenerator,
  roundnessGenerator,
  shadowGenerator,
  boredGenerator,
} from "../../global/generators/generators";
import "./Button.css";

export interface ButtonProps {
  styling?: StylingInterface;
  func?: () => void;
  size?: sizes;
  bg?: string;
  textColor?: string;
  shadow?: sizedColor;
  roundness?: numberSizes;
  border?: numberSizedColor;
}

const Button: React.FC<ButtonProps> = ({
  children,
  styling,
  func,
  size,
  bg,
  textColor,
  roundness,
  shadow,
  border,
}) => {
  const generatedSize = sizeGenerator(size);
  const generatedBg = bgGenerator(bg);
  const generatedTextColor = textColorGenerator(textColor);
  const generatedRoundness = roundnessGenerator(roundness);
  const generatedShadow = shadowGenerator(shadow);
  const generatedBorder = boredGenerator(border);

  return (
    <button
      onClick={func}
      style={{
        ...generatedSize,
        ...generatedTextColor,
        ...generatedBg,
        ...generatedRoundness,
        ...generatedShadow,
        ...generatedBorder,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
