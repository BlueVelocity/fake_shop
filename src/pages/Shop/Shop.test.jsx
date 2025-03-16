import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop";

describe("Shop page", () => {
  it("Renders shop page", () => {
    let container;

    act(() => {
      container = render(
        <BrowserRouter>
          <Shop />
        </BrowserRouter>
      ).container;
    })

    expect(container).toMatchSnapshot();
  })
})
