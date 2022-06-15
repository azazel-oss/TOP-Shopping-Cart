import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Shopping from "./Shopping";

function App() {
  return (
    <div>
      <header>
        <div className="logo">Logo</div>
        <ul className="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/shopping">Shopping</a>
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
      <footer>Copyright &copy; Asad Mahmood</footer>
    </div>
  );
}

export default App;
