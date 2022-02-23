import React, { ReactElement } from 'react';

interface StylingInterface {
}

declare type sizes = "sm" | "md" | "lg" | "xl";
declare type numberSizes = sizes | number;
declare type borderStyles = "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset";
declare type sizedColor = {
    size: sizes;
    color: string;
};
declare type numberSizedColor = {
    size: numberSizes;
    color: string;
    style: borderStyles;
};

interface ButtonProps {
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

interface IconButtonProps {
    icon: ReactElement;
    func?: () => void;
    styling?: StylingInterface;
    size?: sizes;
    bg?: string;
    shadow?: sizedColor;
    border?: numberSizedColor;
    textColor?: string;
}
declare const IconButton: React.FC<IconButtonProps>;

export { Button, IconButton };
