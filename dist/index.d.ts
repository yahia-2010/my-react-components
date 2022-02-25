import React, { ReactElement } from 'react';

interface coords {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

declare type sizes = "sm" | "md" | "lg" | "xl";
declare type hPositions = "top" | "bottom";
declare type vPosition = "left" | "right";
declare type doublePositions = `${hPositions} ${vPosition}`;
declare type absolutePositions = doublePositions | coords;
declare type numberSizes = sizes | number;
declare type borderStyles = "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset";
declare type sizedColor = {
    size: sizes;
    color: string;
};
declare type borderType = {
    size: numberSizes;
    color: string;
    style: borderStyles;
};

interface StylingInterface {
    size?: sizes;
    bg?: string;
    shadow?: sizedColor;
    border?: borderType;
    textColor?: string;
    roundness?: numberSizes | "full";
}

interface ButtonProps {
    func?: () => void;
    styling?: StylingInterface;
}
declare const Button: React.FC<ButtonProps>;

interface IconButtonProps {
    icon: ReactElement;
    func?: () => void;
    styling?: StylingInterface;
}
declare const IconButton: React.FC<IconButtonProps>;

interface FloatingButtonProps {
    position?: absolutePositions;
    styling?: StylingInterface;
    func?: () => void;
}
declare const FloatingButton: React.FC<FloatingButtonProps>;

export { Button, FloatingButton, IconButton };
