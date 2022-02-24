import React, { ReactElement } from "react";
import { sizes, sizedColor, borderType } from "../../global/types/types";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  boredGenerator,
  shadowGenerator,
  bgGenerator,
  textColorGenerator,
} from "../../global/generators/generators";
import { sizeGenerator } from "./IconButtonPropsGenerator";
import "./IconButton.css";

export interface IconButtonProps {
  icon: ReactElement;
  func?: () => void;
  styling?: StylingInterface;
  size?: sizes;
  bg?: string;
  shadow?: sizedColor;
  border?: borderType;
  textColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  func,
  size,
  bg,
  shadow,
  border,
  textColor,
  styling,
}) => {
  const generatedBg = bgGenerator(bg);
  const generatedShadow = shadowGenerator(shadow);
  const generatedBorder = boredGenerator(border);
  const generatedSize = sizeGenerator(size);
  const generatedTextColor = textColorGenerator(textColor);

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
