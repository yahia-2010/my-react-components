import { sizes } from "../../global/types/types";

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
