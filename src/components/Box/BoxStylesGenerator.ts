import { sizes } from "../../global/types/types";

export const sizeGenerator = (size: sizes | undefined): object => {
  const generatedSize =
    size === "sm"
      ? "1rem"
      : size === "md"
      ? "1.5rem"
      : size === "lg"
      ? "2rem"
      : size === "xl"
      ? "2.5rem"
      : "1.5rem";
  return { padding: generatedSize };
};
