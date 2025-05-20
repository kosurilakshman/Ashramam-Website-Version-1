import React from 'react';
import '../our articles/Article.CSS';
import image_1 from '../../../assets/article-diya.webp';
import image_2 from '../../../assets/Service-img.webp';
import image_3 from '../../../assets/Saraswathidevi-img.webp';
import { IoShareSocial } from "react-icons/io5";
import '../our articles/Article.css'

const Article = () => {
    return (
        <section className="article-container">
            <div className="article-content">
                <h1 className="article-heading">
                    Our Latest <br></br> Articles
                </h1>
                <img src={image_1} alt="Diya article illustration" className="article-img" />
            </div>

            <div className="article-boxes">
                <div className="article-box">
                     
                <img src={image_2} alt="article Image 1" className="article-images" />
                <h2 className='article-title'>A Sacred Moment </h2>
                <p className='article-text'>Krishna's Flute Among the Rukmni & Satyabhma</p>
                <div className="article-mini-box">
                    <h4 className='article-date'>Mar 31, 2025</h4>
                    <p className='article-icon'><IoShareSocial /> </p>

                </div>

                </div>
                <div className="article-box">
                     
                     <img src={image_3} alt="article Image 1" className="article-images" />
                     <h2 className='article-title'>Gayathri </h2>
                     <p className='article-text'>Source of Creativity and Intellect</p>
                     <div className="article-mini-box">
                    <h4 className='article-date'>Mar 31, 2025</h4>
                    <p className='article-icon'><IoShareSocial /> </p>

                </div>
     
                </div>
                
             
              
               
            </div>
        </section>
    );
};

export default Article;
