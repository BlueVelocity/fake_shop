import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ItemCheckoutCard from "./ItemCheckoutCard";

describe("ItemCheckoutCard component", () => {

  const mockProps = {
    imgUrl: "test-image.jpg",
    name: "Test Item",
    price: 10.99,
    qty: 2,
    addToCartHandler: vi.fn(),
    removeFromCartHandler: vi.fn()
  }

  beforeEach(() => {
    mockProps.addToCartHandler.mockReset();
    mockProps.removeFromCartHandler.mockReset();
    act(() => render(<ItemCheckoutCard {...mockProps} />, { wrapper: BrowserRouter }))
  })

  it("Has price", () => {
    expect(screen.getByLabelText(`Price: ${mockProps.price}`)).toBeInTheDocument();
  })

  it("Has quantity", () => {
    expect(screen.getByLabelText(`Quantity: ${mockProps.qty}`)).toBeInTheDocument();
  })

  it("Has increment item button", () => {
    expect(screen.getByRole("button", { name: /decrement/i })).toBeInTheDocument();
  })

  it("Has decrement item button", () => {
    expect(screen.getByRole("button", { name: /increment/i })).toBeInTheDocument();
  })

  it("Has remove all item button", () => {
    expect(screen.getByRole("button", { name: /remove this item/i })).toBeInTheDocument();
  })

  it("Calls addToCartHandler when increment button is clicked", async () => {
    const user = userEvent.setup();
    const increment = screen.getByRole("button", { name: /increment/i });
    await user.click(increment);
    expect(mockProps.addToCartHandler).toHaveBeenCalledTimes(1);
    expect(mockProps.addToCartHandler).toHaveBeenCalledWith({
      imgUrl: "test-image.jpg",
      name: "Test Item",
      price: 10.99,
      qty: 2,
    });
  })

  it("Calls removeFromCartHandler when decrement button is clicked", async () => {
    const user = userEvent.setup();
    const decrement = screen.getByRole("button", { name: /decrement/i });
    await user.click(decrement);
    expect(mockProps.removeFromCartHandler).toHaveBeenCalledTimes(1);
    expect(mockProps.removeFromCartHandler).toHaveBeenCalledWith({
      imgUrl: "test-image.jpg",
      name: "Test Item",
      price: 10.99,
      qty: 2,
    });
  })

  it("Calls removeFromCartHandler when remove this item button is clicked", async () => {
    const user = userEvent.setup();
    const removeItem = screen.getByRole("button", { name: /remove this item/i });
    await user.click(removeItem);
    expect(mockProps.removeFromCartHandler).toHaveBeenCalledTimes(1);
    expect(mockProps.removeFromCartHandler).toHaveBeenCalledWith({
      imgUrl: "test-image.jpg",
      name: "Test Item",
      price: 10.99,
      qty: 2,
    }, true);
  })

})
