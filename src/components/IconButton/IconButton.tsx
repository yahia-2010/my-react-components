import React, { ReactElement } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  sizes,
  borderType,
  numberSizes,
  sizedColor,
} from "../../global/types/types";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import { sizeGenerator } from "./IconButtonStylesGenerator";
import "./IconButton.css";

export interface IconButtonProps {
  icon: ReactElement;
  func?: () => void;
  border?: borderType;
  size?: sizes;
  textColor?: string;
  bgColor?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  func,
  border,
  size,
  roundness,
  shadow,
  bgColor,
  textColor,
}) => {
  const styling: StylingInterface = {
    border,
    roundness,
    shadow,
    bgColor,
    textColor,
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
        ...generatedStyles,
        ...generatedSize,
      }}
      className="IconButton"
    >
      {icon}
    </button>
  );
};

export default IconButton;
