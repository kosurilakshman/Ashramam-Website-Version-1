import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image_1 from '../../../assets/Dhero-img-1.webp'
import image_2 from '../../../assets/Dhero-img2.webp'
import image_3 from '../../../assets/Dhero-img3.webp'
import '../../Donationspage/Herosection/Dhero.css'
const Dhero = () => {
    return (
        <section>
            <main className='dhero-container'>
                <div className="dhero-card1">
                    <h1 className='dhero-heading'>Support Our Growing Spiritual Home.</h1>
                    <pre className='dhero-para'>Your gift enables us to maintain and  <br></br>
                        continue to enhance our vital work.</pre>
                </div>
                <div className="dhero-card2">
                    <Carousel showThumbs={false} infiniteLoop autoPlay>
                        <div className='dhero-img-box'>
                            <img src={image_1} alt="Slide 1"  className='dhero-img'/>
                            
                        </div>
                        <div className='dhero-img-box'>
                            <img src={image_2}alt="Slide 2" className='dhero-img'/>
                          
                        </div>
                        <div className='dhero-img-box'>
                            <img src={image_3}alt="Slide 3" className='dhero-img' />
                        </div>
                    </Carousel>
                </div>
            </main>
        </section>
    );
};

export default Dhero;
