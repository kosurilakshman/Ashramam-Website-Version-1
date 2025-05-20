import React from 'react';
import '../ourstory/Ourstory.css';
import image1 from '../../assets/ourstory-img1.webp';
import image2 from '../../assets/ourstory-img2.webp';
import image3 from '../../assets/ourstory-img3.webp';
import image4 from '../../assets/ourstory-carosuel.webp';
import OurstoryHero from './Ourstory hero/OurstoryHero';
import ourstory_header from '../../assets/ourstory-heading.webp'
import Landdonor from './landdonor/Landdonor';
import Ourphilosophy from './landdonor/ourphilosphy/Ourphilosphy';

const OurStory = () => {
  return (
    <section className="story-section">
        <OurstoryHero/>
        <div className="ourstory-header">
        <img src={ourstory_header} alt="" className="ourstory-heading" />
        </div>
    
      <div className="ourstorybg-wrapper">
      <div className="story-row story-img-1">
        <img className="story-1" src={image1} alt="Story Part 1" loading="lazy" />
        <div className="para-1">
        <p>
  Veda Mūrti, Yugadarshṭa, Taponiṣhṭha, Pandit Shri Ram Sharma Acharya, and the revered Mata Bhagavati Devi’s spiritual son, Shri Ramakrishna Master, established this ashram with a divine vision. This ashram is known as “Gayatri Teertham - Sri Ramakrishna Shanti Ashramam.”
</p>

<p class="ashram-history"> 
  Divine Shri Ramakrishna, having received the Gayatri mantra, yagnas, and various spiritual practices from his Guru, propagated them not only in Andhra Pradesh and Telangana but also extensively across South India and other countries.
</p>

        </div>
      </div>

      <div className="story-row story-img-2 reverse">
        <img className="story-2" src={image2} alt="Story Part 2" loading="lazy" />
        <div className="para-2">
          <p>
          Just as Shri Ram Sharma Acharya, the revered Guru, established the Shantikunj Gayathri Ashramam on the banks of the holy Ganga River in Haridwar. In a similar way, SriRamakrishna established the Gayathri Ashram on the banks of the Holy Krishna River. As an offering to his Guru, he had envisioned this for the past 30 years. With divine timing, on the auspicious day of Sri Krishna Janmashtami in the year 2022 (Shubhakrutu Nama Samvatsara, Shravana Masam), in the northern-flowing Krishna River, at the sacred place where Lord Krishna, along with Rukmini and Satyabhama, manifested, the foundation of this ashram was laid. 
          </p>
        </div>
      </div>

      <div className="story-row story-img-3">
        <img className="story-3" src={image3} alt="Story Part 3" loading="lazy" />
        <div className="para-3">
  <p class="ashram-history-age">
  The Swayambhu (self-manifested) idols in this sacred place are estimated to be around 1,600 years old, dating back to the 7th century AD, as confirmed by experts through sculptural analysis.
</p>

<p class="ashram-history-origin">
  On one side, Krishna signifies the Krishna River, and on the other side, Krishna signifies the self-manifested deity. Between these two divine forms, the ashram was established with the vision and guidance of the supreme Gurus and the revered Sri Ramakrishna Master.
</p>

<p class="ashram-history-name">
  Thus, this sacred place is known as <strong>Gayathri Teertham - Sri Ramakrishna Shanti Ashramam.</strong>
</p>

<p class="ashram-history-location">
  The ashram is located near the <strong>capital city</strong> of Andhra Pradesh, <strong>Amaravati,</strong> India.
</p>

        </div>
      </div>

      </div>
     

      <div className="image-section">
        <div className="Images">
          <img src={image4} alt="image" loading='lazy'/>
        </div>
      </div>
      <Landdonor/>
      <Ourphilosophy/>
    </section>
  );
};

export default OurStory;