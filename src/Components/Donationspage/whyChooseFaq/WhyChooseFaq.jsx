import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiPlus, FiX } from "react-icons/fi";
import "../whyChooseFaq/whyChooseFaq.css";

const faqs = [
  {
    question: "Why pick Sanjit Tech Solutions for app, website, or software development?",
    answer: "We create smart, easy-to-use, and custom digital solutions that help businesses grow and stay ahead.",
  },
  {
    question: "How do you build a custom app or website?",
    answer: "Plan, Build, Test, Launch, and Support – We handle everything from start to success!",
  },
  {
    question: "Can you work with both small and big businesses?",
    answer: "Yes! We build solutions for startups, small businesses, and large companies.",
  },
  {
    question: "How do your solutions help businesses grow?",
    answer: "We use the latest technology, improve user experience, and add SEO & digital marketing to bring more customers to you.",
  },
  {
    question: "Do you offer support after launch?",
    answer: "Of course! We provide updates, fixes, and ongoing help to keep your app or website running smoothly.",
  },
];

export default function WhyChooseFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  // Scroll to FAQ on initial load if URL contains #faqs
  useEffect(() => {
    if (location.hash === "#faqs") {
      setTimeout(() => {
        const el = document.getElementById("faqs");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // slight delay ensures DOM is rendered
    }
  }, [location]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="whychoose-faq-container" id="faqs">
      <div className="whychoosefaq_container">
        <h2>Frequently Asked Questions</h2>
        <h4 className="whychoosefaq">About the Trust & Donations</h4>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className={`whychoose-faq-box ${openIndex === index ? "open" : ""}`}>
          <button className="whychoose-faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            {openIndex === index ? <FiX className="whychoose-faq-icon" /> : <FiPlus className="whychoose-faq-icon" />}
          </button>
          {openIndex === index && <div className="whychoose-faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}
