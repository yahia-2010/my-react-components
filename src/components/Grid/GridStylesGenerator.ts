const generateAuto = (n: number | undefined): string => {
  let autoString = "";

  for (let x = 0; x <= (n || 1); x++) {
    autoString += "auto ";
  }

  return autoString;
};

export const cellsGenerator = (cells: number | undefined): object => {
  const generatedCells = {
    gridTemplateColumns: generateAuto(cells),
    gridTemplateRows: generateAuto(cells),
  };
  return { ...generatedCells };
};

export const columnsGenerator = (columns: number | undefined): object => {
  const generatedColumns = {
    gridTemplateColumns: generateAuto(columns),
  };
  return { ...generatedColumns };
};

export const rowsGenerator = (rows: number | undefined): object => {
  const generatedRows = {
    gridTemplateRows: generateAuto(rows),
  };
  return { ...generatedRows };
};
