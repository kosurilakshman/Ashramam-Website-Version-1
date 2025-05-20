import React from 'react';
import '../TempleHero/TempleHero.css'
import templehero_img  from '../../../assets/templehero-img1.webp';
import templehero_img2 from '../../../assets/templehero-img2.webp';
import templehero_img3 from '../../../assets/templehero-img3.webp'

const TempleHero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
           <h2>Divine Trinity of Grace,<br />Wisdom & Power</h2>
        <p>
          Experience the divine presence of Mother Gayatri, Lord Shiva, and Lord Krishna.
          Each temple is built to uplift the spirit, calm the mind, and deepen your devotion.
        </p>
      </div>

      <div className="hero-images">
        <img src={templehero_img} alt="Deity 1" className="deity-image deity-1" loading='lazy'/>
        <img src={templehero_img2}alt="Deity 2" className="deity-image deity-2" loading='lazy'/>
        <img src={templehero_img3}alt="Deity 3" className="deity-image deity-3" loading='lazy'/>
      </div>
    </div>
  );
};

export default TempleHero;