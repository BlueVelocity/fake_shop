import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Shop page", () => {
  it("Renders shop page", () => {
    const { container } = render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  })
})
