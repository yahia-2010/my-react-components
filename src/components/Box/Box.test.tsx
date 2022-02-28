import React from "react";
import { render } from "@testing-library/react";

import Box from "./Box";

describe("Box", () => {
  test("renders the Box component", () => {
    render(<Box>Hello Box!</Box>);
  });
});
