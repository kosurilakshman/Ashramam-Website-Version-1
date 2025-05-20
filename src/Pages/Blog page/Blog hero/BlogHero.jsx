import React from 'react';
import hero_img from '../../../assets/blog-hero-img.webp'
import '../Blog hero/BlogHero.css'

const BlogHero = () => {
    return (
        <>
        <main >
          <div className="blog-hero-img-container">
             <img src={hero_img} alt="blog-hero-img" className='blog-hero-img'/>
          </div>
          <div className="blog-hero-content">
               <h2>Gayatri Mantra and Yoga: Awakening Inner Light</h2>
               <p>How the chanting of the Gayatri Mantra enhances focus and spiritual depth during yoga practice. This can highlight the ashram’s unique integration of mantra and movement.</p>
          </div>
        </main>
            
        </>
    );
};

export default BlogHero;