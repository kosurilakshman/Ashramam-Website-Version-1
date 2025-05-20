import React from 'react';
import image1 from '../../../assets/gallery2-header.webp';
import gallery1 from '../../../assets/Moment1.webp';
import gallery2 from '../../../assets/Moment2.webp';
import gallery3 from '../../../assets/Moment3.webp';
import gallery4 from '../../../assets/Moment4.webp';

import './Gallery.css';

const FooterGallery = () => (
  <section className="footer-gallery">
    <div className="header-img-wrapper">
      <img src={image1} alt="service-heading" className="header-img" loading="lazy" />
    </div>
    <div className="gallery-images-container">
      <img src={gallery1} alt="Gallery 1" className="year-gallery-img" loading="lazy" />
      <img src={gallery2} alt="Gallery 2" className="year-gallery-img" loading="lazy" />
      <img src={gallery3} alt="Gallery 3" className="year-gallery-img" loading="lazy" />
      <img src={gallery4} alt="Gallery 4" className="year-gallery-img" loading="lazy" />
    </div>
  </section>
);

export default FooterGallery;
