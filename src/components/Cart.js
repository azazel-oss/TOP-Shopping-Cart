import { faMinus, faMultiply, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  function handleCartClose(event) {
    if (
      event.target.classList.contains("overlay") ||
      event.target.classList.contains("close") ||
      event.target.parentNode.classList.contains("close")
    )
      props.cartToggler();
  }
  function handleIncreaseQuantity(event) {
    const productId = event.target.closest("button").dataset.id;
    props.increaseQuantityHandler(productId);
  }
  function handleDecreaseQuantity(event) {
    const productId = event.target.closest("button").dataset.id;
    const quantity = props.cartItems.find(
      (item) => item.id === productId
    ).quantity;
    props.decreaseQuantityHandler(productId, quantity);
  }
  function handleClearCart() {
    props.clearCartHandler();
  }
  return (
    <div onClick={handleCartClose} className="overlay">
      <div className="modal-cart">
        <div className="cart-header">
          <h2>Your cart is ready</h2>
          <div>
            <FontAwesomeIcon className="close" icon={faMultiply} />
          </div>
        </div>
        <div className="cart-contents">
          {props.cartItems.length > 0 ? (
            <div className="cart-items">
              {props.cartItems.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    <div className="item-image">
                      <img
                        src={`assets/images/${item.image}`}
                        alt={item.name}
                      />
                    </div>
                    <div className="item-description">
                      <div className="flex">
                        <div className="item-name">{item.name}</div>
                        <div className="item-quantity">
                          <button
                            data-id={item.id}
                            data-testid="decrease-quantity"
                            onClick={handleDecreaseQuantity}
                          >
                            <FontAwesomeIcon
                              className="icon-quantity-toggle"
                              icon={faMinus}
                            />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            data-id={item.id}
                            data-testid="increase-quantity"
                            onClick={handleIncreaseQuantity}
                          >
                            <FontAwesomeIcon
                              className="icon-quantity-toggle"
                              icon={faPlus}
                            />
                          </button>
                        </div>
                      </div>

                      <div className="item-price">${item.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="cart-empty">No items added to the cart</div>
          )}
          <hr />
          <div className="cta">
            <div className="total">
              Total :
              <span>
                {" "}
                $
                {props.cartItems
                  .reduce((acc, b) => {
                    return acc + b.price * b.quantity;
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div className="cta">
              <button className="btn btn-checkout">Checkout</button>
              <button className="btn btn-clear" onClick={handleClearCart}>
                Clear cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
