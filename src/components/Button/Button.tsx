import React, { Children } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { sizes, numberSizes, sizedColor } from "../../global/types/types";
import { sizeGenerator } from "./ButtonPropsGenerators";
import {
  bgGenerator,
  textColorGenerator,
  roundnessGenerator,
  shadowGenerator,
} from "../../global/generators/generators";
import "./Button.css";

export interface ButtonProps {
  styling?: StylingInterface;
  func?: (params: any) => void;
  size?: sizes;
  bg?: string;
  textColor?: string;
  shadow?: sizedColor;
  roundness?: numberSizes;
}

const Button: React.FC<ButtonProps> = ({
  children,
  styling,
  func,
  size,
  bg,
  textColor,
  roundness,
}) => {
  const generatedSize = sizeGenerator(size);
  const generatedBg = bgGenerator(bg);
  const generatedTextColor = textColorGenerator(textColor);
  const generatedRoundness = roundnessGenerator(roundness);

  return (
    <button
      onClick={func}
      style={{
        padding: !generatedSize ? "0.75rem 1.1rem" : generatedSize,
        color: generatedTextColor,
        backgroundColor: generatedBg,
        borderRadius: generatedRoundness,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
