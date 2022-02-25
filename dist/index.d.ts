import React, { ReactElement } from 'react';

interface coords {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

declare type directions = "vertical" | "horizontal";
declare type sizes = "sm" | "md" | "lg" | "xl";
declare type hPositions = "top" | "bottom";
declare type vPosition = "left" | "right";
declare type doublePositions = `${hPositions} ${vPosition}`;
declare type absolutePositions = doublePositions | coords;
declare type numberSizes = sizes | number;
declare type numberSizesFull = numberSizes | "full";
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

interface ButtonProps {
    func?: () => void;
    border?: borderType;
    size?: sizes;
    textColor?: string;
    bg?: string;
    roundness?: numberSizes;
    shadow?: sizedColor;
}
declare const Button: React.FC<ButtonProps>;

interface IconButtonProps {
    icon: ReactElement;
    func?: () => void;
    border?: borderType;
    size?: sizes;
    textColor?: string;
    bg?: string;
    roundness?: numberSizes;
    shadow?: sizedColor;
}
declare const IconButton: React.FC<IconButtonProps>;

interface FloatingButtonProps {
    position?: absolutePositions;
    border?: borderType;
    size?: sizes;
    textColor?: string;
    bg?: string;
    roundness?: numberSizes;
    shadow?: sizedColor;
    func?: () => void;
}
declare const FloatingButton: React.FC<FloatingButtonProps>;

interface StackProps {
    border?: borderType;
    width?: numberSizesFull;
    textColor?: string;
    bg?: string;
    roundness?: numberSizes;
    shadow?: sizedColor;
    direction?: directions;
    wrap?: boolean;
    gap?: numberSizes;
    centering?: boolean;
}
declare const Stack: React.FC<StackProps>;

export { Button, FloatingButton, IconButton, Stack };
