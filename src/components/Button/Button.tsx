import React, { Children } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  sizes,
  numberSizes,
  sizedColor,
  borderType,
} from "../../global/types/types";
import { sizeGenerator } from "./ButtonStylesGenerators";
import { stylesGenerator } from "../../global/generators/generators";
import "./Button.css";

export interface ButtonProps {
  func?: () => void;
  styling?: StylingInterface;
}

const Button: React.FC<ButtonProps> = ({ children, styling, func }) => {
  const generatedSize = sizeGenerator(styling?.size);
  const generatedStyles = stylesGenerator(styling!);
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
