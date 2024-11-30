import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MomentFlow</div>
      <div className="navLinks">
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
