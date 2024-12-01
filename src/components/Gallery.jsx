import React from "react";
import "./Gallery.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

const images = [
  { src: image1, alt: "Event Image 1" },
  { src: image2, alt: "Event Image 2" },
  { src: image3, alt: "Event Image 3" },
  { src: image4, alt: "Event Image 4" },
  { src: image5, alt: "Event Image 5" },
  { src: image6, alt: "Event Image 6" },
  { src: image7, alt: "Event Image 7" },
  { src: image8, alt: "Event Image 8" },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

