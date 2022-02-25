import React, { Children } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  sizes,
  numberSizes,
  sizedColor,
  borderType,
} from "../../global/types/types";
import { sizeGenerator } from "./ButtonStylesGenerators";
import {
  bgGenerator,
  textColorGenerator,
  roundnessGenerator,
  shadowGenerator,
  boredGenerator,
} from "../../global/generators/generators";
import "./Button.css";

export interface ButtonProps {
  func?: () => void;
  styling?: StylingInterface;
}

const Button: React.FC<ButtonProps> = ({ children, styling, func }) => {
  const generatedSize = sizeGenerator(styling?.size);
  const generatedBg = bgGenerator(styling?.bg);
  const generatedTextColor = textColorGenerator(styling?.textColor);
  const generatedRoundness = roundnessGenerator(styling?.roundness);
  const generatedShadow = shadowGenerator(styling?.shadow);
  const generatedBorder = boredGenerator(styling?.border);

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
      className="Button"
    >
      {children}
    </button>
  );
};

export default Button;
