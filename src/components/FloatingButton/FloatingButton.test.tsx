import React from "react";
import { render } from "@testing-library/react";

import FloatingButton from "./FloatingButton";

describe("FloatingButton", () => {
  test("renders the FloatingButton component", () => {
    render(<FloatingButton>Hello Button!</FloatingButton>);
  });
});
