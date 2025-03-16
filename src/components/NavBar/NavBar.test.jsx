import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("NavBar component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  })

  it("Renders NavBar component", async () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  })

  it("Contains store name", () => {
    expect(screen.getByRole("heading").textContent).toMatch("Fake Shop");
  });

  it("Should render a home button that links to '/' route", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "Home button" });
    await user.click(button);

    expect(window.location.pathname).toBe("/");
  })

  it("Should render a shop button that links to '/shop' route", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "Shop button" });
    await user.click(button);

    expect(window.location.pathname).toBe("/shop");
  })

  it("Should render a cart button that links to '/cart' route", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "Cart button" });
    await user.click(button);

    expect(window.location.pathname).toBe("/cart");
  })
});
