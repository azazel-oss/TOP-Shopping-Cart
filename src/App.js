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

function App() {
  const [cartItems, setCartItems] = useState([]);
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
            id: newProduct.id,
            price: newProduct.price,
            quantity: 1,
          },
        ];
      });
    }
  }
  function handleShowCart() {
    console.log(cartItems);
  }
  return (
    <div className="container">
      <header>
        <div className="logo">JuiceMart</div>

        <ul className="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shopping">Shopping</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <button onClick={handleShowCart} className="btn-cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="noti-badge">
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
      <BrowserRouter>
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
