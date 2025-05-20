import React from 'react';
import '../gayatrimandir/GayatriMandir.css';
import header from '../../../assets/gayatrimandir-header.webp'
import gayatridevi_img from '../../../assets/gayatridevi-img.webp'


const GayatriMandir = () => {
  return (
    <>
      {/* Gayatri Mandir Section */}
      <section >
        
            <div className="temple-section-flex">
                <div className="div">
                <img src={gayatridevi_img} className='gayatrimandir-img' loading="lazy"/>

                </div>
              
                <div className="gayatrimandir-content">
                    <img src={header} alt="gayatrimandir-heading" className='gayatrimandir-heading'/>
                    <p className='gayatrimandir-text' >This temple is a special place where people come to pray to Mother Gayatri, who is known as the Mother of the Vedas. Devotees believe she blesses them with knowledge, peace, and strength. The temple is built with 24 idols, representing the 24 divine syllables of the Gayatri Maha Mantra — each word in the mantra holds powerful energy that helps those who visit.
In the big open courtyard, there is a special Gayatri Mandapam that is 108 feet long and wide, where people perform Gayatri Yagnas (a sacred fire prayer) to seek blessings. Every day, prayers and rituals are performed here. Many devotees say they feel stronger in their minds and hearts after visiting this holy place.
The Gayatri Mantra is believed to be a prayer that grants good wisdom (Sadbuddhi). When it is chanted here, its vibrations are said to spread across the world, promoting universal peace.</p>
                </div>

            </div>
         
      </section>

      {/* New Section Below Gayatri Mandir Section */}
      <section className="new-paragraph-section">
        <p>
        The Sri Krishna Temple, with ancient Swayambhu idols over 1,600 years old, marks the divine spot where Lord Krishna appeared with Rukmini and Satyabhama with Dasavataras. The Gayatri Temple is dedicated to Maa Gayatri, radiating spiritual energy through mantra sadhana and yagnas. The Shivalayam offers a serene space for worshipping Lord Shiva, where devotees perform abhishekam and meditate in peace. Together, these temples form the spiritual core of Gayatri Teertham – Sri Ramakrishna Shanti Ashram, inspiring devotion, wisdom, and inner peace where man becomes superman that is GOD and Earth will be Heaven.
        </p>
      </section>
    </>
  );
};

export default GayatriMandir;