import React from 'react';
import '../landdonor/Landdonor.css';
import donorImage from '../../../assets/donor.webp';
import donor_header from '../../../assets/donor-heading.webp'

const Landdonor = () => {
  return (
    <section className="donor-section">
      <div className="donor-header">
        <img src={donor_header} alt="" className="donor-heading" />
      </div>
      <div className="donor-block">
        <img className="story-4" src={donorImage} alt="Donors" loading='lazy' />
        <div className="para-4">
        <strong className='para-4-heading'>Sri. Garlapati Chenna Kesava Rao and Venkayamma Garu</strong>
  <p>
    We sincerely thank Sri Garlapati Chenna Kesava Rao Garu and Smt. Garlapati Venkayamma Garu for kindly donating their land.
    Their gift has become the holy ground for our temple/ashramam. Their generous and kind-hearted action will always shine as an
    example for future generations. Because of their donation, we now have a beautiful spiritual place where thousands of people can
    pray and find peace. The care, faith, and kindness shown by Sri Chenna Kesava Rao Garu and Venkayamma Garu continue to inspire
    everyone in our community.
  </p>
        </div>
      </div>
    </section>
  );
};

export default Landdonor;