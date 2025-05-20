import React from "react";
import "../Templesection/Templesection.css";
import templehero_img from '../../../assets/templesection-img.webp'
 
const SriKrishnaMandirSection = () => {
  return (
<div className="krishna-container">
<img src={templehero_img} alt="Sri Krishna Mandiram" className="krishna-image" loading='lazy'/>
<h2 className="krishna-title">
        Sri Rukmini Satyabhama Gopika sahitha <br />
<span>Sri Krishna Mandiram</span>
</h2>
<p className="krishna-description">
        The Sri Krishna Temple at Gayathri Teertham – Sri Ramakrishna Shanti Ashram is a sacred
        abode dedicated to Lord Krishna, the divine embodiment of love, wisdom, and dharma.
        Situated on the banks of the holy Krishna River, where it is believed that Lord Krishna once
        manifested with Rukmini and Satyabhama, this temple radiates spiritual energy and divine
        presence. With ancient <span className="highlight">swayambhu</span> (self-manifested) idols dating back
        over 1,600 years, the temple draws devotees into a space of devotion, meditation, and divine
        connection through daily worship, bhajans, and the grand celebration of
        Sri Krishna Janmashtami. It is the place of studying <span className="highlight">BHAGAVAD GITA</span> and
<span className="highlight"> BHAGAVATHAM</span> and <span className="highlight">RASALEELA</span>.
</p>
</div>
  );
};
 
export default SriKrishnaMandirSection;