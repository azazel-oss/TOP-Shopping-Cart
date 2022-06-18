import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Shopping from "../Shopping";

describe("Add to cart button click", () => {
  it("calls the correct handler after add to cart button click", () => {
    const handleAddToCartMock = jest.fn();
    render(
      <Shopping
        addToCartHandler={handleAddToCartMock}
        products={[
          {
            id: "ce4fe9a1-3f14-47e6-b098-ab2ad56620c9",
            name: "Bang Energy",
            image: "bang.jpg",
            price: 3.86,
          },
        ]}
      />
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleAddToCartMock).toHaveBeenCalled();
  });
  it("sends the correct id after clicking add to cart button", () => {
    const handleAddToCartMock = jest.fn();
    const dummyProducts = [
      {
        id: "ce4fe9a1-3f14-47e6-b098-ab2ad56620c9",
        name: "Bang Energy",
        image: "bang.jpg",
        price: 3.86,
      },
    ];
    render(
      <Shopping
        addToCartHandler={handleAddToCartMock}
        products={dummyProducts}
      />
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleAddToCartMock).toHaveBeenCalledWith(dummyProducts[0].id);
  });
});
