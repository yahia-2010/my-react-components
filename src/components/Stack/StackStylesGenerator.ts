import { directions } from "../../global/types/types";

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
  return { wrap: generatedWrap };
};
