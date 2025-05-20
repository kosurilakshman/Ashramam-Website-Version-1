
import React from 'react';
import '../ourphilosphy/Ourphilosphy.css';
import philosphy_header from  '../../../../assets/philosphy-heading.webp'

const Ourphilosophy = () => {
  return (
    <section className="final-section">
     
      <div className="philosphy-header">
        <img src={philosphy_header}alt="" className="philosphy-heading" loading='lazy' />
      </div>
       <p>
         Grounded in the teachings of Gayatri mantra, Yagna, and Seva (selfless service), the ashram emphasizes living a life of spiritual awareness, moral integrity, and social responsibility. It draws strength from the vision of Shri Ram Sharma Acharya and extends it through modern-day relevance under the guidance of SriRamakrishna Master.
       </p>
     </section>
  );
};

export default Ourphilosophy; // 
