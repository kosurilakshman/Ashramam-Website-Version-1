import React from 'react';
import '../Ourstory hero/OurstoryHero.css';
import hero from '../../../assets/ourstory-hero.webp';

const OurstoryHero = () => {
  return (
  <section className="intro-section">
 

  <div className="intro-bg">
    <div className="intro-text">
      <h1>Gayatri Teertham – SriRamakrishna Shanti Ashramam</h1>
      <p className="subtitle">
        A sacred space for inner peace, prayer, and spiritual cleansing.
        Let every drop bring divine calm and clarity. This is a scientific
        spiritual university, which brings heaven in the earth.
      </p>
    </div>

    <div className="hero-block">
      <img src={hero} alt="heroimage" loading="lazy" />
    </div>
  </div>
</section>

  
  );
};

export default OurstoryHero;