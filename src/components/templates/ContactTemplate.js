import React, { useState } from "react";
import "./ContactTemplate.css";

function ContactTemplate() {
  const [contactForm, setContactForm] = useState(() => {
    const saved = localStorage.getItem("ContactForm");
    return saved ? JSON.parse(saved) : [];
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
  
    const { name, subject, phone, email, message } = values;
  
    const newFeedback = [
      ...contactForm,
      { name, subject, phone, email, message },
    ];
  
    setContactForm(newFeedback);
    localStorage.setItem("ContactForm", JSON.stringify(newFeedback));
  
    e.target.reset();
  };
  

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach us through any of the methods below:</p>
          <ul>
            <li><strong>Email:</strong> diartgerxhaliu@gmail.com </li>
            <li><strong>Phone:</strong> +383 (0) 45 884 852z</li>
            <li><strong>Location:</strong> Rruga Gjergj Kastrioti Skenderbeu</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
        </div>
        <input name="phone" type="text" placeholder="Your Phone Number" />
        <input name="subject" type="text" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="map-embed">
        <iframe
        title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.1733409203196!2d20.96201807360376!3d42.82482445940242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13535bf904a0b329%3A0x9c767fc069643180!2sInnovation%20Academy!5e0!3m2!1sen!2s!4v1746109453794!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactTemplate;
