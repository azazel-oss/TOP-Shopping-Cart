import React from "react";
import "./Shopping.css";

const Shopping = (props) => {
  function addButtonHandler(event) {
    props.addToCartHandler(event.target.parentNode.dataset.id);
  }
  return (
    <main className="products-container">
      {props.products.map((product) => (
        <div key={product.id} data-id={product.id} className="product">
          <img src={`/assets/images/${product.image}`} alt={product.name} />
          <div className="product-info">
            <div className="product-info__name">{product.name}</div>
            <div className="product-info__price">${product.price}</div>
          </div>
          <button onClick={addButtonHandler} className="btn btn-add-cart">
            Add to Cart
          </button>
        </div>
      ))}
    </main>
  );
};

export default Shopping;
