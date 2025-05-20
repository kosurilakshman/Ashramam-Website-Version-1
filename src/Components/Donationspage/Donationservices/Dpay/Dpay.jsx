import React from "react";
import "../Dpay/Dpay.css";
import scanner_img from '../../../../assets/scannerimage.png'

const Dpay = () => {
  return (
    <section  id="donations-btn">
      {/* Main heading */}
      <div className="donation-card-box1" >
        <h1 className="donation-box1-heading">
          Help us spread truth, peace, and devotion, inspired by the sacred Gayathri Teertham.
        </h1>
      </div>

      {/* Subheading */}
      <h2 className="donation-subheading">Donate now</h2>

      {/* Donation card section */}
      <div className="donation-card-box2">
        <div className="donation-card-left">
          <h3 className="donation-card-left-heading">Account Details</h3>
          <h4 className="donation-card-name">Viswamata Gayatri Trust</h4>
          <h4 className="donation-card-accno">A/c No: <span>41295565809</span></h4>
          <h4 className="donation-card-ifsc">IFSC: <span>SBIN0021103</span></h4>
          <p className="donation-card-bank">STATE BANK OF INDIA</p>
          <p className="donation-card-address">Undavalli, Tadepalli (M), Guntur (D), AP</p>
        </div>

        <div className="donation-border-line" />

        <div className="donation-card-right">
          <h2 className="donation-card-right-heading">Scan & Pay</h2>
          <img src={scanner_img} alt="QR Code" className="donation-qr-image" />
        </div>
      </div>

      {/* Quote section */}
      <div className="donation-card-box3">
        <div className="donation-card-inner-box3">
          “In the sacred flow of Gayathri Teertham, may the light of truth,
          peace, and devotion cleanse our hearts and guide our souls towards
          divine harmony.”
        </div>
      </div>
    </section>
  );
};

export default Dpay;
