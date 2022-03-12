import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import {
  directions,
  numberSizes,
  sizedColor,
  borderType,
  numberSizesFull,
} from "../../global/types/types";
import { directionGenerator, wrapGenerator } from "./StackStylesGenerator";
import "./Stack.css";

export interface StackProps {
  border?: borderType;
  width?: numberSizesFull;
  textColor?: string;
  bgColor?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
  direction?: directions;
  wrap?: boolean;
  gap?: numberSizes;
  centering?: boolean;
}

const Stack: React.FC<StackProps> = ({
  children,
  direction,
  wrap,
  gap,
  border,
  roundness,
  shadow,
  bgColor,
  textColor,
  width,
  centering,
}) => {
  const styling: StylingInterface = {
    border,
    textColor,
    bgColor,
    roundness,
    shadow,
    width,
    centering,
    gap,
  };
  const generatedDirection = directionGenerator(direction);
  const generatedWrap = wrapGenerator(wrap);
  const generatedStyles = stylesGenerator(styling!, [], {
    bgColor: "transparent",
  });
  return (
    <div
      className="stack"
      style={{
        ...generatedDirection,
        ...generatedWrap,
        ...generatedStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
