import React, { useState } from 'react';
import '../gallerycarosuel/Gallerycarosuel.css';
import image1 from '../../../assets/gallery-header.webp';
import img1 from '../../../assets/gallery-img1.webp';
import img2 from '../../../assets/gallery-img2.webp';
import img3 from '../../../assets/gallery-img3.webp';
 
 
 
const Gallerycarosuel = () => {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0);
 
    // Array of image sources for easy navigation
    const images = [img1, img2, img3];
 
    // Function to handle the next image
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loops back to the first image
    };
 
    // Function to handle the previous image
    const prevImage = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length // Loops back to the last image
      );
    };
 
    return (
      <section className="carousel-section">
        <div className="header-img-wrapper">
          <img src={image1} alt="service-heading" className="header-img" loading="lazy" />
        </div>
 
        <div className="carousel-images">
          {/* First Image */}
          <img
            src={images[(currentIndex + 0) % images.length]}
            alt={`Moment ${(currentIndex + 0) % images.length + 1}`}
            className="hero-img"
            loading="lazy"
          />
         
          {/* Middle Image */}
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt={`Moment ${(currentIndex + 1) % images.length + 1}`}
            className="hero-img middle-img"
            loading="lazy"
          />
 
          {/* Third Image */}
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt={`Moment ${(currentIndex + 2) % images.length + 1}`}
            className="hero-img"
            loading="lazy"
          />
        </div>
 
        {/* Navigation Arrows */}
        <button className="prev-arrow" onClick={prevImage}>‹</button>
        <button className="next-arrow" onClick={nextImage}>›</button>
      </section>
    );
  };
 
  export default Gallerycarosuel;