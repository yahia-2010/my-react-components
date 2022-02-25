import { absolutePositions, sizes } from "../../global/types/types";

export const sizeGenerator = (size: sizes | undefined): object => {
  const generatedSize =
    size === "sm"
      ? "0.5rem 0.75rem"
      : size === "md"
      ? "0.75rem 1.2rem"
      : size === "lg"
      ? "1rem 2rem"
      : size === "xl"
      ? "1.5rem 3rem"
      : "0.75rem 1.2rem";
  return { padding: generatedSize };
};

export const positionGenerator = (
  position: absolutePositions | undefined
): object => {
  const generatedPosition =
    position === "top left"
      ? { top: "auto", left: "auto", bottom: "auto", right: "auto" }
      : position === "top right"
      ? { top: "auto", left: "auto", bottom: "auto", right: "30px" }
      : position === "bottom left"
      ? { top: "auto", left: "auto", bottom: "30px", right: "auto" }
      : position === "bottom right"
      ? { top: "auto", left: "auto", bottom: "30px", right: "30px" }
      : typeof position !== "string"
      ? position
      : { top: "auto", left: "auto", bottom: "30px", right: "30px" };
  return { ...generatedPosition };
};
