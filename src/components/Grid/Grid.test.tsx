import React from "react";
import { render } from "@testing-library/react";

import Grid from "./Grid";

describe("Grid", () => {
  test("renders the Grid component", () => {
    render(
      <Grid>
        {" "}
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
      </Grid>
    );
  });
});
