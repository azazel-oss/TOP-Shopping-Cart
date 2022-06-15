import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">Logo</div>
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
        Copyright &copy;
        <a href="https://github.com/azazel-oss"> Asad Mahmood</a>
      </footer>
    </div>
  );
}

export default App;
