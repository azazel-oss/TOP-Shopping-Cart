import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
