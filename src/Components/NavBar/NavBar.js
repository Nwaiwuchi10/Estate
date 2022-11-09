import { useRef } from "react";
import { Image } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar2() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div style={{ display: "flex", gap: "10px" }}></div>

      <nav type="button" ref={navRef} onClick={showNavbar}>
        <button className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
        {/* <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>

        <a href="/#" className="div-pst-tat">
          Request a demo
        </a> */}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar2;
