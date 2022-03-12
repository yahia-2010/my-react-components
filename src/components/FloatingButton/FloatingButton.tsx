import React from "react";
import { absolutePositions } from "../../global/types/types";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import {
  sizeGenerator,
  positionGenerator,
} from "./FloatingButtonStylesGenerator";
import {
  sizes,
  borderType,
  numberSizes,
  sizedColor,
} from "../../global/types/types";
import "./FloatingButton.css";

export interface FloatingButtonProps {
  position?: absolutePositions;
  border?: borderType;
  size?: sizes;
  textColor?: string;
  bgColor?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
  func?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  position,
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
    roundness,
    shadow,
    bgColor,
    textColor,
    border,
  };
  const generatedSize = sizeGenerator(size);
  const generatedStyles = stylesGenerator(styling!, [
    "width",
    "centering",
    "gap",
  ]);
  const generatedPosition = positionGenerator(position);

  return (
    <button
      className="floatingButton"
      onClick={func}
      style={{
        ...generatedPosition,
        ...generatedStyles,
        ...generatedSize,
      }}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
