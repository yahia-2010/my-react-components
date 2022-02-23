import React from "react";
import { render } from "@testing-library/react";

import IconButton from "./IconButton";

describe("IconButton", () => {
  test("renders the IconButton component", () => {
    render(<IconButton icon={<svg>A</svg>} />);
  });
});
