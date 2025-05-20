import { useState } from 'react';
import donation_image_1 from '../../../assets/donation-img1.webp';
import donation_image_2 from '../../../assets/donation-img2.webp';
import donation_image_3 from '../../../assets/donation-img3.webp';
import donation_image_4 from '../../../assets/donation-img4.webp';
import donation_image_5 from '../../../assets/donation-img5.webp';
import donation_image_6 from '../../../assets/donation-img6.webp';
import donation_image_7 from '../../../assets/donation-img7.webp';
import donation_image_8 from '../../../assets/donation-img8.webp';
import donation_image_9 from '../../../assets/donation-img9.webp';
import donation_image_10 from '../../../assets/donation-img10.webp';
import donation_image_11 from '../../../assets/donation-img11.webp';
import donation_image_12 from '../../../assets/donation-img12.webp';
import QRCode from 'react-qr-code';
 
import '../Donationservices/Dservices.css';
 
const Dservices = () => {
  const [showForm, setShowForm] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
 
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    City: '',
    State: '',
    Service: '',
    Amount: ''
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.Amount || isNaN(formData.Amount)) {
      alert("Please enter a valid amount.");
      return;
    }
    setFormSubmitted(true);
  };
 
  const handlePaymentRedirect = () => {
    const upiLink = `upi://pay?pa=9182435523@ybl&pn=kranthi%20Tech%20Solutions&tn=Donation%20for%20${encodeURIComponent(formData.Service)}&am=${formData.Amount}&cu=INR`;
 
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 769;
 
    // Submit to SheetDB
    fetch("https://sheetdb.io/api/v1/p201fynlb04fu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData }),
    }).catch(err => console.error("Submission error:", err.message));
 
    if (isMobile || isSmallScreen) {
      setTimeout(() => {
        window.location.href = upiLink;
        //alert("If your UPI app doesn't open automatically, please try again or use a desktop to scan the QR code.");
      }, 100);
    } else {
      setPaymentData(formData);
      setShowQRCode(true);
 
      setTimeout(() => {
        setShowQRCode(false);
        setFormData({ Name: '', Phone: '', Email: '', City: '', State: '', Service: '', Amount: '' });
        setPaymentData(null);
      }, 30000);
    }
 
    setFormSubmitted(false);
    setShowForm(false);
  };
 
  const donationCards = [
    { image: donation_image_1, title: "Viswamatha Gayathri Maha Mandiram", subtitle: "Support the Heart of Our Sanctuary", description: "Your contribution goes towards the daily existence and spiritual activities of our Ashramam.", button: "Donate now" },
    { image: donation_image_2, title: "Sivalayam (Shiva Temple)", subtitle: "Uphold the Seat of Auspiciousness", description: "Help in the maintenance and sanctity of the Lord Shiva temple.", button: "Donate now" },
    { image: donation_image_3, title: "Gosala – Govula Samrakshana", subtitle: "Compassion Embodied", description: "Your contribution shelters and feeds our beloved cows.", button: "Donate now" },
    { image: donation_image_4, title: "Sri Balarama sahitha gopala sametha sri krishna mandir", subtitle: "Nurture the Home of Divine Love", description: "Finance the maintenance and management of the Lord Krishna temple.", button: "Donate now" },
    { image: donation_image_5, title: "Ashramam Donation", subtitle: "Support the Heart of Our Sanctuary", description: "Your contribution goes towards the daily existence and spiritual activities of our Ashramam.", button: "Donate now" },
    { image: donation_image_6, title: "Bhojanasala", subtitle: "Nourish Body and Soul", description: "Your gift helps provide food to residents and visitors in our community dining room.", button: "Donate now" },
    { image: donation_image_7, title: "Ashrama Nirvahna Donation", subtitle: "Sustain Our Shared Sanctuary", description: "Your gift contributes to upkeep and smooth operations of the overall Ashramam complex.", button: "Donate now" },
    { image: donation_image_8, title: "2028 Pushkarams - Simhanandhini Chat construction", subtitle: "Welcome Seekers with Hospitality", description: "Help us to extend warm hospitality to pilgrims and Ashramam visitors.", button: "Donate now" },
    { image: donation_image_9, title: "Yagna Sala (Sacrificial Hall)", subtitle: "Fuel the Sacred Fire", description: "Accompany the conduct of yagnas and sacred rituals for peace and prosperity.", button: "Donate now" },
    { image: donation_image_10, title: "Auditorium", subtitle: "The Glowing Lamps of Prayer", description: "Temple at night: Many bright lamps. Lamps mean prayers, hope, and good winning.", button: "Donate now" },
    { image: donation_image_11, title: "Hospital", subtitle: "A Unique Kind of Care", description: "Doctors and nurses are kind and helpful. They treat the body and the spirit for special care.", button: "Donate now" },
    { image: donation_image_12, title: "Library Space", subtitle: "Finding Peace in Books", description: "Quiet reading time. Lots of books. Calm place. People at tables with books.", button: "Donate now" }
  ];
 
  return (
    <section>
      <div className="dservice-grid">
        {donationCards.map((service, index) => (
          <div className="dservice-box" key={index}>
            <img src={service.image} alt={service.title} className="dservice-img" />
            <h3 className="dservice-title">{service.title}</h3>
            <h5 className="dservice-subtitle">{service.subtitle}</h5>
            <p className="dservice-para">{service.description}</p>
            <button
              className="dservice-button"
              onClick={() => {
                setFormData({ ...formData, Service: service.title });
                setShowForm(true);
              }}
            >
              {service.button}
            </button>
          </div>
        ))}
      </div>
 
      {showForm && (
        <div className="donation-form-overlay">
          <div className="donation-form">
            <button className="close-form" onClick={() => setShowForm(false)}>X</button>
            <h2>Donation Form</h2>
            <h3>Instructions</h3>
            <div className="donation-instructions">
              <ul>
                <li>Fill out the donation form with your details and amount.</li>
                <li>Click <strong>“Submit”</strong> to proceed.</li>
                <li><strong>On mobile:</strong> You’ll be redirected to your UPI app (GPay, PhonePe, Paytm, etc.). <strong>On desktop:</strong> A QR Code will appear.</li>
                <li><strong>Need help?</strong> Contact: +91-98858 69017 (Gowthami).</li>
              </ul>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} required />
              <input type="tel" name="Phone" placeholder="Phone" value={formData.Phone} onChange={handleChange} required />
              <input type="email" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange} required />
              <input type="text" name="City" placeholder="City" value={formData.City} onChange={handleChange} required />
              <input type="text" name="State" placeholder="State" value={formData.State} onChange={handleChange} required />
              <input type="number" name="Amount" placeholder="Amount" value={formData.Amount} onChange={handleChange} required />
              <label>Service</label>
              <input type="text" name="Service" placeholder="Service" value={formData.Service} readOnly required />
 
              {formSubmitted ? (
                <button className="payment-btn" type="button" onClick={handlePaymentRedirect}>Proceed to Payment</button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </form>
          </div>
        </div>
      )}
 
      {showQRCode && paymentData && (
        <div className="qr-popup">
          <div className="qr-content">
            <button
              className="close-form"
              onClick={() => {
                setShowQRCode(false);
                setFormData({ Name: '', Phone: '', Email: '', City: '', State: '', Service: '', Amount: '' });
                setPaymentData(null);
              }}
            >
              X
            </button>
            <h3>Scan QR Code to Donate</h3>
            <QRCode
              value={`upi://pay?pa=9182435523@ybl&pn=kranthi%20Tech%20Solutions&tn=Donation%20for%20${encodeURIComponent(paymentData.Service)}&am=${paymentData.Amount}&cu=INR`}
              size={200}
            />
            <p>Use Google Pay / PhonePe / Paytm to complete the payment</p>
            <p><strong>Amount to Donate: ₹{paymentData.Amount}</strong></p>
          </div>
        </div>
      )}
    </section>
  );
};
 
export default Dservices;