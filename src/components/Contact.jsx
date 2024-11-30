import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      return toast.error("Please fill in all fields.");
    }

    try {
      // Send POST request
      const response = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);  // Success toast
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Axios error:", error.response || error);
      toast.error(error.response?.data?.message || error.message || "Something went wrong!");
    }
  };

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

      <div className="contact-body">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228974.4275474921!2d72.86572661184263!3d26.270573217138523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1712237985343!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="form">
          <form onSubmit={handleSendMessage}>
            <h2>Contact Us</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={5}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

