import React from "react";
import {
  borderType,
  sizes,
  numberSizes,
  sizedColor,
} from "../../global/types/types";
import { sizeGenerator } from "./BoxStylesGenerator";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import "./Box.css";

export interface BoxProps {
  border?: borderType;
  size?: sizes;
  textColor?: string;
  bg?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
}

const Box: React.FC<BoxProps> = ({
  children,
  border,
  size,
  roundness,
  shadow,
  bg,
  textColor,
}) => {
  const styling: StylingInterface = {
    border,
    textColor,
    bg,
    roundness,
    shadow,
  };
  const generatedSize = sizeGenerator(size);
  const generatedStyles = stylesGenerator(styling!, ["width", "centering"]);

  return (
    <div
      style={{
        ...generatedSize,
        ...generatedStyles,
      }}
      className="Box"
    >
      {children}
    </div>
  );
};

export default Box;
