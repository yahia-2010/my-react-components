import { directions, numberSizes } from "../../global/types/types";

export const directionGenerator = (
  direction: directions | undefined
): object => {
  const generatedDirection =
    direction === "horizontal"
      ? "row"
      : direction === "vertical"
      ? "column"
      : "row";
  return { flexDirection: generatedDirection };
};

export const wrapGenerator = (wrap: boolean | undefined): object => {
  const generatedWrap = wrap ? "wrap" : "no-wrap";
  return { flexWrap: generatedWrap };
};

export const gapGenerator = (gap: numberSizes | undefined): object => {
  const generatedGap =
    gap === "sm"
      ? "0.5rem"
      : gap === "md"
      ? "1.25rem"
      : gap === "lg"
      ? "2.5rem"
      : gap === "xl"
      ? "4rem"
      : typeof gap === "number"
      ? `${gap}px`
      : "1.25rem";
  return { gap: generatedGap };
};
