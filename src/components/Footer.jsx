import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="banner">
        <div className="footer-title">
          <h1>MomentFlow</h1>
          <p>Your Dream Events, Perfectly Planned</p>
        </div>
        <div className="newsletter">
          <h3>Stay Updated!</h3>
          <p>Sign up with your email address to receive the latest news and updates.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MomentFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
