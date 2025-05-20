import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-box">
          <div className="footer-box-1">
            <div className="footer-box1-col">
              <h2 className="footer-heading">Ashrmam Links</h2>
              <a href="/">Home</a>
              <a href="/ourstory">About us</a>
              <a href="/">Events</a>
              {/* <a href="">Contact us</a> */}
            </div>
            <div className="footer-box1-col">
              <h2 className="footer-heading">Ashramam</h2>
              <a href="/sevas">Ashramam Services</a>
              <a href="/#volunteer-service">Volunteer / Join us</a>
              <a href="/donations">Donation Page</a>
            </div>
            <div className="footer-box1-col">
              <h2 className="footer-heading">Resources</h2>
              <a href="/blogs">Blog/Articles</a>
            
            </div>
            <div className="footer-box-col">
              <h2>Social Media</h2>
              <div className="social-icons">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-box-2">
            <div className="footer-box2-col">
              <div className="footer-box2-col">
                <div className="footer-contact-item">
                <FaLocationDot className="footer-icon" />

                  <div>
                    <h3 className="footer-contact-heading">Address</h3>
                    <p className="footer-contact-para">
                      On the banks of the holy Krishna River, Pondugula Village,
                      <br />
                      Amaravathi (M), Palnadu (D), AP - 522436
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-box2-col">
              <div className="footer-contact-item">
                <TbPhoneCall className="footer-icon" />
                <div>
                  <h3 className="footer-contact-heading">Contact</h3>
                  <p className="footer-contact-para">+91-98858 69017</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <MdOutlineMailOutline className="footer-icon" />
                <div>
                  <h3 className="footer-contact-heading">Email</h3>
                  <p className="footer-contact-para">gouthamirk59@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <hr className="footer-divider" />
        <p className="footer-copy">
          © 2025 Viswamatha Gayatri Charitable Trust. All Rights Reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
