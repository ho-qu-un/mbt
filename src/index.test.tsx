import * as React from "react";
import { assert, describe, test } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("shows play button", () => {
    const { getByRole } = render(<App />);
    assert.ok(getByRole("play-button"));
  });
});
