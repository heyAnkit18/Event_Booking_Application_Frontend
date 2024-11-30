import React from "react";
import "./Services.css";
import birthdayImage from "../assets/birthday.jpg";
import weddingImage from "../assets/wedding.jpg";
import anniversaryImage from "../assets/anniversary.jpg";
import partyImage from "../assets/party.jpg";
import campingImage from "../assets/camping.jpg";
import gamenightImage from "../assets/gamenight.jpg";
import corporateImage from "../assets/corporate.jpg";
import outdoorImage from "../assets/outdoor.jpg";

const Services = () => {
  const services = [
    { id: 1, url: birthdayImage, title: "Birthday Planning" },
    { id: 2, url: weddingImage, title: "Wedding Planning" },
    { id: 3, url: anniversaryImage, title: "Anniversary Planning" },
    { id: 4, url: partyImage, title: "Party Planning" },
    { id: 5, url: campingImage, title: "Camping Trip Planning" },
    { id: 6, url: gamenightImage, title: "Game Night Planning" },
    { id: 7, url: corporateImage, title: "Corporate Planning" },
    { id: 8, url: outdoorImage, title: "Outdoor Planning" },
  ];

  return (
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="service-banner">
        {services.map((element) => (
          <div className="service-item" key={element.id}>
            <div className="image-container">
              <img src={element.url} alt={element.title} className="service-image" />
            </div>
            <h3>{element.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


