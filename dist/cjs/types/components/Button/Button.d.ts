import React from "react";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import { sizes, numberSizes, sizedColor } from "../../global/types/types";
import "./Button.css";
export interface ButtonProps {
    label: string;
    styling?: StylingInterface;
    func?: (params: any) => void;
    size?: sizes;
    bg?: string;
    textColor?: string;
    shadow?: sizedColor;
    roundness?: numberSizes;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
