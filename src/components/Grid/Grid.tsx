import React from "react";
import { stylesGenerator } from "../../global/generators/stylesGenerator";
import { StylingInterface } from "../../global/interfaces/stylingInterface";
import {
  cellsGenerator,
  columnsGenerator,
  rowsGenerator,
} from "./GridStylesGenerator";
import {
  borderType,
  numberSizes,
  numberSizesFull,
  sizedColor,
} from "../../global/types/types";
import "./Grid.css";

export interface GridProps {
  border?: borderType;
  width?: numberSizesFull;
  textColor?: string;
  bgColor?: string;
  roundness?: numberSizes;
  shadow?: sizedColor;
  gap?: numberSizes;
  centering?: boolean;
  cells?: number;
  columns?: number;
  rows?: number;
}

const Grid: React.FC<GridProps> = ({
  children,
  gap,
  border,
  roundness,
  shadow,
  bgColor,
  textColor,
  width,
  centering,
  cells,
  columns,
  rows,
}) => {
  const styling: StylingInterface = {
    border,
    textColor,
    bgColor,
    roundness,
    shadow,
    width,
    centering,
    gap,
  };
  const generatedStyles = stylesGenerator(styling!, [], {
    bgColor: "transparent",
  });
  const generatedCells = cellsGenerator(
    cells || Math.floor(Math.sqrt(Array(children).length))
  );
  const generatedColumns = columnsGenerator(columns);
  const generatedRows = rowsGenerator(rows);

  console.log("cells", generatedCells);
  console.log("columns", generatedColumns);
  console.log("rows", generatedRows);

  return (
    <div
      className="grid"
      style={{
        ...generatedStyles,
        ...generatedCells,
        ...generatedColumns,
        ...generatedRows,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
