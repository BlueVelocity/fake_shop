
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ItemCard from "./ItemCard";

describe("ItemCard component", () => {

  const mockProps = {
    cartContents: [],
    imgUrl: "https://fakeUrl.com/",
    name: "item",
    desc: "item description",
    price: 10.99,
    qty: 0,
    addToCartHandler: vi.fn(),
    removeFromCartHandler: vi.fn(),
  }

  beforeEach(() => {
    mockProps.addToCartHandler.mockReset();
    mockProps.removeFromCartHandler.mockReset();
    act(() => render(<ItemCard {...mockProps} />, { wrapper: BrowserRouter }))
  })

  it("Has quantity", () => {
    expect(screen.getByLabelText("quantity")).toBeInTheDocument();
  })

  it("Has increment button", () => {
    expect(screen.getByLabelText("increment")).toBeInTheDocument();
  })

  it("Calls increment handler on click", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "increment" });

    await user.click(button);
    expect(mockProps.addToCartHandler).toHaveBeenCalledTimes(1);
    expect(mockProps.addToCartHandler).toHaveBeenCalledWith({
      imgUrl: "https://fakeUrl.com/",
      name: "item",
      price: 10.99,
      qty: 0,
    })
  })

  it("If cart length is 0, qty is 0", () => {
    expect(screen.getByLabelText("quantity").textContent).toBe("0");
  })

  it("Increases quantity when increment button is clicked", async () => {
    const user = userEvent.setup();
    const incrementButton = screen.getByRole("button", { name: "increment" });
    const timesToRun = 5;

    for (let i = 1; i < timesToRun; i++) {
      await user.click(incrementButton);
      expect(screen.getByLabelText("quantity").textContent).toBe(i.toString());
    }
  })

  it("Has decrement button", () => {
    expect(screen.getByLabelText("decrement")).toBeInTheDocument();
  })

  it("Decreases quantity when decrement button is clicked", async () => {
    const user = userEvent.setup();
    const decrementButton = screen.getByRole("button", { name: "decrement" });
    let i = 1;

    // First increments quantity
    const incrementButton = screen.getByRole("button", { name: "increment" });
    for (; i < 5; i++) {
      await user.click(incrementButton);
      expect(screen.getByLabelText("quantity").textContent).toBe(i.toString());
    }

    for (i -= 2; i > 0; i--) {
      await user.click(decrementButton);
      expect(screen.getByLabelText("quantity").textContent).toBe(i.toString());
    }
  })

  it("Will not decrement below 0", async () => {
    const user = userEvent.setup();
    const decrementButton = screen.getByRole("button", { name: "decrement" });

    for (let i = 2; i > 0; i--) {
      await user.click(decrementButton);
      expect(screen.getByLabelText("quantity").textContent).toBe("0");
    }
  })

  it("Calls decrement handler on click", async () => {
    const user = userEvent.setup();
    const incrementButton = screen.getByRole("button", { name: "increment" });
    const decrementbutton = screen.getByRole("button", { name: "decrement" });

    await user.click(incrementButton);
    await user.click(decrementbutton);
    expect(mockProps.removeFromCartHandler).toHaveBeenCalledTimes(1);

    expect(mockProps.removeFromCartHandler).toHaveBeenCalledWith({
      imgUrl: "https://fakeUrl.com/",
      name: "item",
      price: 10.99,
      qty: 1,
    })
  })

})
