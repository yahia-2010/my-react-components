import { sizes } from "../../global/types/types";

export const sizeGenerator = (size: sizes | undefined): object => {
  const generatedSize =
    size === "sm"
      ? "2.1rem"
      : size === "md"
      ? "2.75rem"
      : size === "lg"
      ? "3.25rem"
      : size === "xl"
      ? "4rem"
      : "2.75rem";
  return { width: generatedSize, height: generatedSize };
};
