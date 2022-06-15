import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">CartWheel</div>

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
            <button className="btn-cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="noti-badge">10</div>
            </button>
          </li>
        </ul>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping" element={<Shopping />} />
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
