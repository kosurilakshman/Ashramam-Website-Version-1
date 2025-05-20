import React from "react";
import "../Trust/Trust.css";

const Trust = () => {
  const trustMembers = [
    {
      name: "B.V.L.N.V Prasad Garu",
      phone: "+91 9394449927",
      address: "Mangalagiri",
    },
    {
      name: "Tadisetti Veeraiah Garu",
      phone: "+91 9959644944",
      address: "Vijayawada",
    },
    {
      name: "Potru Veeraiah Chowdary Garu",
      phone: "+91 7416113333",
      address: "Guntur",
    },
    {
      name: "D.V.R Murthy Garu",
      phone: "+91 8919594187",
      address: "Chirala",
    },
    {
      name: "Kollipara Narasimha Garu",
      phone: "+91 9247877365",
      address: "Vijayawada",
    },
    {
      name: "Gandikota Phani Kumar Garu",
      phone: "+91 7901380999",
      address: "Hyderabad",
    },
  ];

  return (
    <>
      <section className="trust-container">
        <h1 className="trust-box-heading">Trust Members</h1>
        <div className="trust-member-box">
        <div className="trust-box-content">
          <h2 className="trust-subheading">Chairman</h2>
          <h4 className="trust-heading">Smt. Garlapati Gouthami Garu</h4>
          <p className="trust-phno">+91 9885869017</p>
          <p className="trust-address">Vijayawada</p>
          <p className="trust-text">
            True peace comes not from the absence of challenges, but from a
            heart that remains serene amidst them.
          </p>
        </div>
        <div className="trust-boxes">
          {trustMembers.map((member, index) => (
            <div className="trust-box" key={index}>
              <h1 className="trust-mname">{member.name}</h1>
              <p className="trust-mphno">{member.phone}</p>
              <p className="trust-maddress">{member.address}</p>
            </div>
          ))}
        </div>

        </div>
        <div className="trust-highlighter">
            <p className="trust-line">Gayahtri Teertham - SriRamaKrishna Santhi Ashramam</p>
        </div>
      
     
      </section>
   
    </>
  );
};

export default Trust;
