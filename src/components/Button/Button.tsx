import React, { Children } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  sizes,
  numberSizes,
  sizedColor,
  borderType,
} from "../../global/types/types";
import { sizeGenerator } from "./ButtonStylesGenerator";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import "./Button.css";

export interface ButtonProps {
  func?: () => void;
  border?: borderType;
  size?: sizes;
  textColor?: string;
  bgColor?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
}

const Button: React.FC<ButtonProps> = ({
  children,
  border,
  size,
  roundness,
  shadow,
  bgColor,
  textColor,
  func,
}) => {
  const styling: StylingInterface = {
    border,
    textColor,
    bgColor,
    roundness,
    shadow,
  };
  const generatedSize = sizeGenerator(size);
  const generatedStyles = stylesGenerator(styling!, [
    "width",
    "centering",
    "gap",
  ]);
  return (
    <button
      onClick={func}
      style={{
        ...generatedSize,
        ...generatedStyles,
      }}
      className="Button"
    >
      {children}
    </button>
  );
};

export default Button;
