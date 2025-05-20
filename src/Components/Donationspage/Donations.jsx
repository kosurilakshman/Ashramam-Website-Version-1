import React from 'react';
import Dhero from './Herosection/Dhero';
import Dservices from './Donationservices/Dservices';
import WhyChooseFaq from './whyChooseFaq/WhyChooseFaq';
import Dpay from './Donationservices/Dpay/Dpay';

const Donations = () => {
    return (
        <>
        <section id="">
        <Dhero/>
          <Dservices/>
          <WhyChooseFaq/>
          <Dpay/>

        </section>
        
            
        </>
    );
};

export default Donations;