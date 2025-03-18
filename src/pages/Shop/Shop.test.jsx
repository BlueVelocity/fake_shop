import { describe, it, expect, vi } from "vitest";
import { act } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Shop from "./Shop";

describe("Shop page", () => {
  it("Renders shop page", () => {
    let container;

    act(() => container = render(<Shop />, { wrapper: BrowserRouter }).container);

    expect(container).toMatchSnapshot();
  })

  it("Fetches data from an api and parses json", () => {
    const mock = vi.spyOn(global, "fetch").mockImplementation(() => {
      return { json: () => null }
    });

    act(() => render(<Shop />, { wrapper: BrowserRouter }).container)

    expect(mock).toHaveBeenCalledTimes(1);
  })

  it("Displays error if data fetch fails", () => {
    vi.spyOn(global, "fetch").mockImplementation(() => new Promise.reject());

    act(() => render(<Shop />, { wrapper: BrowserRouter }));

    const errElement = screen.getByRole("error");

    expect(errElement).toBeInTheDocument();
  })

})
