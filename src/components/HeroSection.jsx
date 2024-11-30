import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.css";
import restaurantImage from "../assets/restaurant.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div> 
      <img className="hero-image" src={restaurantImage} alt="restaurant" />
      <div className="hero-content">
        <h3>TIME TO PARTY</h3>
        <h1>THE PERFECT VENUE FOR YOUR NEXT EVENT</h1>
        <p>
          We believe that it is all about the <span className="highlight">BIG DREAMS</span> and <span className="highlight">BIG CHEERS</span>!!!
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500} className="btn">
          BOOK NOW
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

