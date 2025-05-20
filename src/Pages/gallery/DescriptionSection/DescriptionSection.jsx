import React from 'react';
import image1 from '../../../assets/gallery-header.webp';
import img from '../../../assets/img-highlight.webp';
import './DescriptionSection.css';

const DescriptionSection = () => (
  <section className="description-section">
    <div className="header-img-wrapper">
      <img src={image1} alt="service-heading" className="header-img" loading="lazy" />
    </div>
    <div className="description-section-content">
      <img src={img} alt="Highlight" className="image" loading="lazy" />
      <p>
      The Sri Rukmini Satyabhama Gopika Sahitha Sri Krishna Mandiram. Motivated by timeless heritage and the call for spiritual balance, this temple of the future will be a beacon of faith and a haven for hearts from all over the world. Your gift, a seed of kindness, will bring life to this holy home, its peaceful presence adorning the landscape, touching innumerable hearts for generations to come.
      </p>
    </div>
  </section>
);

export default DescriptionSection;
