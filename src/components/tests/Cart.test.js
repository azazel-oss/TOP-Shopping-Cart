import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import userEvent from "@testing-library/user-event";

const handleToggleCartMock = jest.fn();
const handleIncreaseQuantityMock = jest.fn();
const handleDecreaseQuantityMock = jest.fn();
const handleClearCartMock = jest.fn();
const dummyCartItems = [
  {
    id: "ce4fe9a1-3f14-47e6-b098-ab2ad56620c9",
    name: "Bang Energy",
    image: "bang.jpg",
    price: 3.86,
    quantity: 2,
  },
];

describe("Cart Clear Tests", () => {
  it("calls the correct handler when clear cart button is pressed", () => {
    render(
      <Cart
        cartToggler={handleToggleCartMock}
        increaseQuantityHandler={handleIncreaseQuantityMock}
        decreaseQuantityHandler={handleDecreaseQuantityMock}
        clearCartHandler={handleClearCartMock}
        cartItems={dummyCartItems}
      />
    );
    const clearCartBtn = screen.getByRole("button", { name: /clear cart/i });
    userEvent.click(clearCartBtn);
    expect(handleClearCartMock).toHaveBeenCalled();
  });
});

describe("Increase Quantity Tests", () => {
  it("calls the increase quantity handler when + is clicked", () => {
    render(
      <Cart
        cartToggler={handleToggleCartMock}
        increaseQuantityHandler={handleIncreaseQuantityMock}
        decreaseQuantityHandler={handleDecreaseQuantityMock}
        clearCartHandler={handleClearCartMock}
        cartItems={dummyCartItems}
      />
    );
    const increaseButton = screen.getByTestId("increase-quantity");
    userEvent.click(increaseButton);
    expect(handleIncreaseQuantityMock).toHaveBeenCalled();
  });
  it("sends the correct id to the parent handler", () => {
    render(
      <Cart
        cartToggler={handleToggleCartMock}
        increaseQuantityHandler={handleIncreaseQuantityMock}
        decreaseQuantityHandler={handleDecreaseQuantityMock}
        clearCartHandler={handleClearCartMock}
        cartItems={dummyCartItems}
      />
    );
    const increaseButton = screen.getByTestId("increase-quantity");
    userEvent.click(increaseButton);
    expect(handleIncreaseQuantityMock).toHaveBeenCalledWith(
      dummyCartItems[0].id
    );
  });
});

describe("Decrease Quantity Tests", () => {
  it("calls the decrease quantity handler when - is clicked", () => {
    render(
      <Cart
        cartToggler={handleToggleCartMock}
        increaseQuantityHandler={handleIncreaseQuantityMock}
        decreaseQuantityHandler={handleDecreaseQuantityMock}
        clearCartHandler={handleClearCartMock}
        cartItems={dummyCartItems}
      />
    );
    const decreaseButton = screen.getByTestId("decrease-quantity");
    userEvent.click(decreaseButton);
    expect(handleDecreaseQuantityMock).toHaveBeenCalled();
  });
  it("sends the correct product id to the handler", () => {
    render(
      <Cart
        cartToggler={handleToggleCartMock}
        increaseQuantityHandler={handleIncreaseQuantityMock}
        decreaseQuantityHandler={handleDecreaseQuantityMock}
        clearCartHandler={handleClearCartMock}
        cartItems={dummyCartItems}
      />
    );
    const decreaseButton = screen.getByTestId("decrease-quantity");
    userEvent.click(decreaseButton);
    expect(handleDecreaseQuantityMock).toHaveBeenCalledWith(
      dummyCartItems[0].id,
      dummyCartItems[0].quantity
    );
  });
});
