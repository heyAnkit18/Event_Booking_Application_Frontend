import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="info-row">
        <div className="info-item">
          <h4>Address</h4>
          <p>EventBliss Palace in Jodhpur, Rajasthan. Pincode - 342006</p>
        </div>
        <div className="info-item">
          <h4>Call Us</h4>
          <p>121-75752178</p>
        </div>
        <div className="info-item">
          <h4>Mail Us</h4>
          <p>EventBliss@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228974.4275474921!2d72.86572661184263!3d26.270573217138523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1712237985343!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "450px", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form>
            <h2>Get in Touch</h2>
            <div className="input-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your E-mail" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea rows={5} placeholder="Your Message" />
            <button type="button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
