import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Createpost from "./pages/CreatePost";
import Login from "./pages/Login";
import KumbatiaLogo from "../src/assets/Kumbatia.jpeg";
import Partners from "./pages/Partners";
import Programming from "./pages/Programming";
import Contact from "./pages/Contact";
import "./Styles/App.css";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
      <div className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="Logo" onClick={closeMenu}>
          <img src={KumbatiaLogo} alt="Logo" className="logo-img" />
        </Link>
        <div
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <div className="close-btn">-</div>
          ) : (
            <div className="breadcrumb-btn">&#9776;</div>
          )}
        </div>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/programming" onClick={closeMenu}>
            Programming
          </Link>
          <Link to="/partners" onClick={closeMenu}>
            Partners
          </Link>
          <Link to="/createpost" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/login" onClick={closeMenu}>
            Login
          </Link>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
