import React from 'react';
import image_1 from '../../../assets/gallery-box-img1.webp'
import image_2 from '../../../assets/gallery-box-img2.webp'
import image_3 from '../../../assets/gallery-box2-img.webp'
import image_4 from '../../../assets/gallery-box2-img2.webp'
import {Link} from 'react-router-dom'
const Gallery = () => {
    return (
        <>
        <div className="gallery">
            <div className="gallery-header">
            <h2 className='gallery-heading'>Gallery</h2>
            </div>
          
        <div className="gallery-flex">
            <div className="gallery-one">
                <img src={image_2} alt="gallery-one-img1" className='gallery-one-img1'/>
                <img src={image_1} alt="gallery-one-img2" className='gallery-one-img2'/>

            </div>
            <div className="gallery-two">
            <img src={image_4} alt="gallery-two-img1" className='gallery-two-img1'/>
            <img src={image_3} alt="gallery-two-img2" className='gallery-two-img2'/>

            </div>

        </div>
        <div className="gallery-button">
           <Link to="/gallery"> <button className='gallery-btn'>View all</button></Link>

        </div>
            
        </div>
      
            
        </>
    );
};

export default Gallery;