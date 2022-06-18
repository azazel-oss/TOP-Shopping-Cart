import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import "./App.css";
import products from "./components/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  function handleAddToCart(id) {
    const product = cartItems.find((element) => element.id === id);
    if (product) {
      const newCartItems = cartItems.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            quantity: element.quantity + 1,
          };
        } else return element;
      });
      setCartItems(newCartItems);
    } else {
      let newProduct = products.find((element) => element.id === id);
      setCartItems((prevState) => {
        return [
          ...prevState,
          {
            ...newProduct,
            quantity: 1,
          },
        ];
      });
    }
  }
  function handleToggleCart() {
    setShowModal((prevState) => !prevState);
  }
  function handleIncreaseQuantity(id) {
    setCartItems((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });
  }
  function handleClearCart() {
    setCartItems([]);
  }
  function handleDecreaseQuantity(id, quantity) {
    if (quantity === 1) {
      setCartItems((prevState) => {
        return prevState.filter((item) => item.id !== id);
      });
    } else {
      setCartItems((prevState) => {
        return prevState.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      });
    }
  }
  return (
    <div className="container">
      {showModal && (
        <Cart
          cartToggler={handleToggleCart}
          increaseQuantityHandler={handleIncreaseQuantity}
          decreaseQuantityHandler={handleDecreaseQuantity}
          clearCartHandler={handleClearCart}
          cartItems={cartItems}
        />
      )}
      <header>
        <div className="logo">JuiceMart</div>

        <ul className="navbar">
          <li>
            <a href="/TOP-Shopping-Cart">Home</a>
          </li>
          <li>
            <a href="/TOP-Shopping-Cart/shopping">Shopping</a>
          </li>
          <li>
            <a href="/TOP-Shopping-Cart/contact">Contact</a>
          </li>
          <li>
            <button onClick={handleToggleCart} className="btn-cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <div data-testid="noti-badge" className="noti-badge">
                {cartItems.length
                  ? cartItems.length > 9
                    ? "9+"
                    : cartItems.length
                  : ""}
              </div>
            </button>
          </li>
        </ul>
      </header>
      <BrowserRouter basename="/TOP-Shopping-Cart">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shopping"
            element={
              <Shopping
                addToCartHandler={handleAddToCart}
                products={products}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <footer>
        <FontAwesomeIcon icon={faGithub} />
        <span className="footer-copyright">&copy;</span>
        <a href="https://github.com/azazel-oss"> Asad Mahmood</a>
      </footer>
    </div>
  );
}

export default App;
