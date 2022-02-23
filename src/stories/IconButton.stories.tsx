import { IconButton } from "../components";

export default {
  title: "Icon Button",
  component: IconButton,
};

// Sizes

export const Small = () => <IconButton icon={<p>A</p>} size="sm" />;
export const Medium = () => <IconButton icon={<p>A</p>} size="md" />;
export const Large = () => <IconButton icon={<p>A</p>} size="lg" />;
export const XLarge = () => <IconButton icon={<p>A</p>} size="xl" />;
