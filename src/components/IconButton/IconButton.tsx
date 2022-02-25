import React, { ReactElement } from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  boredGenerator,
  shadowGenerator,
  bgGenerator,
  textColorGenerator,
} from "../../global/generators/generators";
import { sizeGenerator } from "./IconButtonStylesGenerator";
import "./IconButton.css";

export interface IconButtonProps {
  icon: ReactElement;
  func?: () => void;
  styling?: StylingInterface;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, func, styling }) => {
  const generatedBg = bgGenerator(styling?.bg);
  const generatedShadow = shadowGenerator(styling?.shadow);
  const generatedBorder = boredGenerator(styling?.border);
  const generatedSize = sizeGenerator(styling?.size);
  const generatedTextColor = textColorGenerator(styling?.textColor);

  return (
    <button
      onClick={func}
      style={{
        ...generatedBg,
        ...generatedBorder,
        ...generatedShadow,
        ...generatedSize,
        ...generatedTextColor,
      }}
      className="IconButton"
    >
      {icon}
    </button>
  );
};

export default IconButton;
