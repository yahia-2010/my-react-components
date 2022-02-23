import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { sizes, numberSizes, sizedColor, numberSizedColor } from "../../global/types/types";
import "./Button.css";
export interface ButtonProps {
    styling?: StylingInterface;
    func?: () => void;
    size?: sizes;
    bg?: string;
    textColor?: string;
    shadow?: sizedColor;
    roundness?: numberSizes;
    border?: numberSizedColor;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
