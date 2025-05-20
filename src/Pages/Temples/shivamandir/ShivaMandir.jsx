import React from 'react';
import '../shivamandir/ShivaMandir.css';
import shivamandir_img from '../../../assets/shivamandir-img.webp'
import shivamandir_header from '../../../assets/shivamandir-heading.webp';

const ShivaMandir = () => {
  return (
    <section className="Shiva-section">
      <img src={shivamandir_img} alt="Temple 3"  className='shiva-hero-img' loading="lazy"/>
      <div>
      <div className="header-img-wrapper">
           <img src={shivamandir_header} alt="service-heading" className="sivamandir-header" />
      </div>
        <p>
        The Shivalayam at Gayatri Teertham – Sri Ramakrishna Shanti Ashram is a serene and powerful space dedicated to Lord Shiva, the supreme yogi and cosmic transformer. Nestled within the spiritually charged environment of the ashram, the temple radiates a deep sense of peace and inner stillness. Devotees offer prayers and abhishekam to the sacred Shiva Lingam, invoking blessings for strength, clarity, and liberation. The sound of mantras and the fragrance of sacred herbs during Rudrabhishekam create a divine atmosphere, making the Shivalayam a heaven for meditation, devotion, and spiritual awakening. The goal of abhisekham in our concept - How is it that if the universe is anointed with Ganges water in Kashi, the Ganges River swells and makes North India fertile. Similarly, if Shiva is anointed with Krishna water in our ashram, the Krishna River, the river of life, continuously makes South India fertile.

        </p>
      </div>
    </section>
  );
};


export default ShivaMandir;