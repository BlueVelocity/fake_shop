import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar component", () => {
  it("Renders correct heading on load", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch("Fake Shop");
  });
});
