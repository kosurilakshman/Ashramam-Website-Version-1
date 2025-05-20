import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image_1 from '../../../assets/Dhero-img-1.webp'
import image_2 from '../../../assets/Dhero-img2.webp'
import image_3 from '../../../assets/Dhero-img3.webp'
import header_img from '../../../assets/seva-header.webp';
import seva_img1 from '../../../assets/seva-img1.webp'
import seva_img2 from '../../../assets/seva-img2.webp'
import seva_img3 from '../../../assets/seva-img3.webp'
import seva_img4 from '../../../assets/seva-img4.webp'
import seva_img5 from '../../../assets/seva-img5.webp'
import seva_img6 from '../../../assets/seva-img6.webp'
import '../seva hero/Sevahero.css'

const Sevahero = () => {
   const sevaCards= [
        {
          "image":seva_img1,
          "title": "Pumsavana",
          "text": "Pumsavana is a special tradition at our Ashram for expectant mothers, typically around mid-pregnancy. During this time, we engage in specific practices and offer prayers for the baby’s healthy growth and the mother’s well-being."
        },
        {
          "image":seva_img2,
          "title": "Namakaran Samskara",
          "text": "Just like telling everyone a new baby’s name, sharing important news is a special custom! Teertham, this sharing of blessings and love (and great food or mango juice) not only celebrates the new child in our group—we all come together and enjoy the time. It makes our Ashram family stronger and helps us remember what our teachers taught us!"
        },
        {
          "image":seva_img3,
          "title": "The Sacred First Feeding Ceremony",
          "text": "Eating solid food for the first time is a special day called Annaprashan. With grains of cooked rice and ghee, like powerful gifts, this first food is important. When food is eaten, we get strong and learn things. This happy day shows that food and the divine are connected, and it’s a new start for the child."
        },
        {
          "image":seva_img4,
          "title": "The Sacred Celebration of Birth",
          "text": "Celebrating a birthday the old Hindu way is called Jatakarma Samskara. It’s not just about fun and friends—it’s a way of welcoming a new life into the world. We chant good things to keep the baby safe. Have different celebrations each year to show the child what their family usually does."
        },
        {
          "image":seva_img5,
          "title": "The Sacred Thread Ceremony",
          "text": "The Upanayana is a special day for a young person to begin learning and their spiritual role as a new start. They receive a sacred thread, often like a thin, flat shawl. With it, they begin Vedic learning. Priests perform special Gayatri mantra rites—ones that have been happening for a very long time."
        },
        {
          "image":seva_img6,
          "title": "The Sacred Hindu Wedding Ceremony",
          "text": "VivahaH Samskaram, a Hindu wedding, is a beautiful joining of two families in a family. As a priest recites mantras, the new wife walks in fire and groom receives holy sandal paste in front because he highlights the love and respect. It’s a special event that shows sacred spiritual unity of marriage in Hindu society."
        }
      ]
      
    return (
        <>
        <section>
                   <div className="sevahero-container">
                                <Carousel showThumbs={false} infiniteLoop autoPlay>
                                    <div className='sevahero-img-box'>
                                        <img src={image_1} alt="Slisevae 1"  className='sevahero-img'/>
                                        
                                    </div>
                                    <div className='sevahero-img-box'>
                                        <img src={image_2}alt="Slisevae 2" className='sevahero-img'/>
                                      
                                    </div>
                                    <div className='sevahero-img-box'>
                                        <img src={image_3}alt="Slisevae 3" className='sevahero-img' />
                                    </div>
                                </Carousel>
                            </div>


                             <div className="seva-header">
                                    <img src={header_img} alt="seva-heading" className="dheader-img" />
                                  </div>
                                  <div className="seva-grid">
                                    {sevaCards.map((service, index) => (
                                      <div className="seva-box" key={index}>
                                        <img src={service.image} alt={service.title} className="seva-img" />
                                        <div className="seva-box-content">
                                        <h3 className="seva-title">{service.title}</h3>
                                        <p className="seva-para">{service.text}</p>

                                        </div>
                                   
                                        
                                      </div>
                                    ))}
                                  </div>


        </section>
            
        </>
    );
};

export default Sevahero;