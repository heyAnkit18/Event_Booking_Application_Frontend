import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert("Thank you for subscribing!");
      setEmail(""); // Clear the email field after subscription
    } else {
      alert("Please enter a valid email.");
    }
  };

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
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
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

