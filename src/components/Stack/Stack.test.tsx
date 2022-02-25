import React from "react";
import { render } from "@testing-library/react";

import Stack from "./Stack";

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <Stack>
        <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Child
        </div>
        <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Child
        </div>
        <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Child
        </div>
      </Stack>
    );
  });
});
