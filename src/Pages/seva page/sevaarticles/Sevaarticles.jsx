import React from 'react';
import seva_img1 from '../../../assets/seva-card-img1.webp'
import seva_img2 from '../../../assets/seva-card-img2.webp'
import seva_img3 from '../../../assets/seva-card-img3.webp'
import seva_heading1 from '../../../assets/seva-card1-heading.webp'
import seva_heading2 from '../../../assets/seva-card2-heading.webp'
import seva_heading3 from '../../../assets/seva-card3-heading.webp'
import '../sevaarticles/Sevaarticles.css'


const Sevaarticles = () => {
    return (
        <>
        <div className="seva-articles">
            <div className="seva-article-box1">
                <img src={seva_img1} className='seva-box1-img' alt="seva-article-img"/>
                <div className="seva-content">
                    <img src={seva_heading1} className='seva-header-img' alt="seva-article-img"/>
                    <p className="seva-para">
                    Come to our quiet Ashram and try yoga sadhana, which can really change how you feel. Our special places, near the calm [name any particular natural features, such as the Krishna River, neighboring hills, etc.], help you learn more about yoga. By breathing slowly and moving your body, you can become peaceful inside and feel closer to your spirit.
                    </p>
                </div>

            </div>
            <div className="seva-article-box2">
            <img src={seva_img2} className='seva-box2-img' alt="seva-article-img"/>
            <div className="seva-content">
                    <img src={seva_heading2} alt="" className="seva-header-img" />
                    <p className="seva-para">
                    Our Ashram often gives out medicines to help people stay healthy. We think it's important to be kind and help people get the medicines they need. Doing this shows we care about everyone's health and want to help without expecting anything in return.
                    </p>
                </div>
                
            </div>
            <div className="seva-article-box3">
            <img src={seva_img3} className='seva-box3-img' alt="seva-article-img"/>
            <div className="seva-content">
                    <img src={seva_heading3} alt="" className="seva-header-img" />
                    <p className="seva-para">
                    At our Ashram, learning is about growing in every way, not just books. We teach good values like kindness and understanding how we fit in the world. We learn about things like spirits, what's right and wrong, and how to be creative and do useful things. This helps everyone become good people who think for themselves and care about others
                    </p>
                </div>
            
                
                </div>
        </div>
            
        </>
    );
};

export default Sevaarticles;