import React, { useState, useEffect } from 'react';
import header_img from '../../../assets/sub-heading.webp';
import service_img from '../../../assets/service-img.webp';
import '../Services/Services.css';
import { Link, useLocation } from 'react-router-dom';
import hero_vd from '../../../assets/hero-vd.mp4';
import service_img1 from '../../../assets/service-img1.webp';
import service_img2 from '../../../assets/service-img2.webp';
import service_img3 from '../../../assets/service-img3.webp';
import service_img4 from '../../../assets/service-img4.webp';
import service_img5 from '../../../assets/service-img5.webp';
import service_img6 from '../../../assets/service-img6.webp';

const Services = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: ''
  });

  // Scroll to anchor on first load (for footer link)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait for DOM render
      }
    }
  }, [location]);

  const handleVolunteerClick = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: '', age: '', gender: '', phone: '', email: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.age || !formData.gender) {
      alert("Please fill all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    const submissionData = {
      "Name": formData.name,
      "Phone": formData.phone,
      "Email": formData.email,
      "Gender": formData.gender,
      "Age": formData.age
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/9valf5j3nw2yn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: submissionData }),
      });

      if (response.ok) {
        alert("Your form is submitted successfully!");
        handleClose();
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting form.");
    }
  };

  const services = [
    {
      img: service_img1,
      title: "Seva",
      para: "Volunteer your time and abilities in service of ashramam and its cause.",
      url: "/sevas"
    },
    {
      img: service_img2,
      title: "E-Hundi",
      para: "Gain access to online sources, updates, and information about devotional practice.",
      url: "/donations"
    },
    {
      img: service_img3,
      title: "Yagnasala",
      para: "Participate in homas and rituals performed periodically for peace and prosperity.",
    },
    {
      img: service_img4,
      title: "Goshala",
      para: "Caring for our cows is an important contribution to our ashramam's service to dharma.",
    },
    {
      img: service_img5,
      title: "Accommodation",
      para: "Stay within the peaceful premises on spiritual retreats or pilgrimages.",
    },
    {
      img: service_img6,
      title: "Volunteer",
      para: "Get involved with our community in everyday ashram activities and events.",
    },
  ];

  return (
    <section className="service-container">
      <div className="video-container">
          <video controls autoplay muted loop playsinline width="600">
          <source src={hero_vd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="service-header">
        <img src={header_img} alt="service-heading" className="header-img" />
      </div>

      <div className="service-bg-wrapper">
        <div className="service-grid" id="volunteer-service">
          {services.map((service, index) => {
            const isVolunteer = service.title === "Volunteer";

            const serviceBox = (
              <div
                className="service-box"
                key={index}
                onClick={isVolunteer ? handleVolunteerClick : undefined}
                style={{ cursor: isVolunteer ? 'pointer' : 'default' }}
              >
                <img src={service.img} alt="services-img" loading="lazy" className='services-img' />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-para">{service.para}</p>
              </div>
            );

            return service.url && !isVolunteer ? (
              <Link to={service.url} key={index}>
                {serviceBox}
              </Link>
            ) : (
              <React.Fragment key={index}>{serviceBox}</React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="service-box2">
        <div className="service-img-container">
          <img src={service_img} alt="service-box-img" className='service-box-img' />
        </div>
        <div className="service-box-content">
          <p className='service-text'>
            The Sri Rukmini Satyabhama Gopika Sahitha Sri Krishna Mandiram. Motivated by timeless heritage and the call for spiritual balance, this temple of the future will be a beacon of faith and a haven for hearts from all over the world.
          </p>
           <Link to="/temples"> <button className='service-btn'>Know more</button></Link>
        </div>
      </div>

      {/* Volunteer Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Volunteer Form</h2>
            <form onSubmit={handleSubmit} className="volunteer-form">
              <input name="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
              <input name="age" type="number" placeholder="Age" required onChange={handleChange} value={formData.age} />
              <select name="gender" required onChange={handleChange} value={formData.gender}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input name="phone" type="tel" placeholder="Phone" required onChange={handleChange} value={formData.phone} />
              <input name="email" type="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
              <h4>If you have any queries contact below number</h4>
              <p>Phone No:+91-98858 69017</p>
              <br />
              <button type="submit">Submit</button>
              <button type="button" onClick={handleClose} className="close-btn">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
