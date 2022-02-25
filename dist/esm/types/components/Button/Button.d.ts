import React from "react";
import { sizes, numberSizes, sizedColor, borderType } from "../../global/types/types";
import "./Button.css";
export interface ButtonProps {
    func?: () => void;
    border?: borderType;
    size?: sizes;
    textColor?: string;
    bg?: string;
    roundness?: numberSizes;
    shadow?: sizedColor;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
