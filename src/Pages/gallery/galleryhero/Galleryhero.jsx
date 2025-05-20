import React from 'react';
import '../galleryhero/Galleryhero.css';

const Galleryhero = () => (
  <section className="gallery-intro-section">
    <div className="gallery-intro-content">
      <h2>Moments of Divinity</h2>
      <div className="gallery-intro-text">
        <p>
        This is a collection of pictures from Gayatri Teertham Sri Ramakrishna Shanti Ashramam.
        You'll see the peaceful beauty of our temples, the caring work we do (sevas), and the joyful celebration events
        that show what's important to us as a community.
        </p>
        <div className="gallery-button-container">
          <button className="gallery-primary-btn">Explore Our Gallery</button>
        </div>
      </div>
    </div>
  </section>
);

export default Galleryhero;