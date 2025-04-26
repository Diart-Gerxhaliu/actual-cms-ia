import React, { useEffect, useState } from "react";
import Banner from "../organisms/Banner";
import ContactBanner from "../../json/Contact/Banner.json";
import IconContact from "../../json/Contact/IconContact.json";
import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import Desc from "../atoms/Desc";

function ContactTemplate() {
  let [contactBanner, setContactBanner] = useState([]);
  let [contactContacts, setContactContacts] = useState([]);
  let [contactForm, setContactForm] = useState(() => {
    const savedForm = localStorage.getItem("ContactForm");
    return savedForm ? JSON.parse(savedForm) : [];
  });

  useEffect(() => {
    let banner = localStorage.getItem("ContactBanner");
    let contact = localStorage.getItem("ContactContact");
    let form = localStorage.getItem("ContactForm");

    if (!banner) {
      localStorage.setItem("ContactBanner", JSON.stringify(ContactBanner));
      setContactBanner(ContactBanner);
    } else {
      setContactBanner(JSON.parse(banner));
    }

    if (!contact) {
      localStorage.setItem("ContactContact", JSON.stringify(IconContact));
      setContactContacts(IconContact);
    } else {
      setContactContacts(JSON.parse(contact));
    }

    if (!form) {
      localStorage.setItem("ContactForm", JSON.stringify([]));
    } else {
      setContactForm(JSON.parse(form));
    }
  }, []);

  return (
    <div className="contact">
      {contactBanner.map((gal, index) => {
        return (
          <Banner
            backImage={gal.imageBack}
            h1={gal.bannerHead}
            p={gal.bannerDesc}
            button1={gal.bannerButton1}
            button2={""}
            key={index}
          />
        );
      })}
      <div className="contactless">
        {contactContacts.map((gal, index) => {
          return (
            <div className="places" key={index}>
              <Image src={gal.icon} alt={""} />
              <div className="texts">
                <Heading child={gal.head} />
                <Desc child={gal.desc} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="form">
        <div className="formation">
          <div className="box">
            <input type="text" name="name" placeholder="Name" id="name" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              id="subject"
            />
            <input type="text" name="phone" placeholder="Phone" id="phone" />
            <input type="email" name="email" placeholder="Email" id="email" />
          </div>
          <textarea
            name="textbox"
            cols="13"
            rows="7"
            placeholder="Message"
            id="message"
          ></textarea>
          <button
            onClick={() => {
              // Get input values correctly
              const name = document.getElementById("name").value;
              const subject = document.getElementById("subject").value;
              const phone = document.getElementById("phone").value;
              const email = document.getElementById("email").value;
              const message = document.getElementById("message").value;

              // Ensure new feedback is added to the existing array
              const newFeedback = [
                ...contactForm,
                { name, subject, phone, email, message },
              ];

              // Update state and localStorage
              setContactForm(newFeedback);
              localStorage.setItem("ContactForm", JSON.stringify(newFeedback));

              // Clear input fields after submission
              document.getElementById("name").value = "";
              document.getElementById("subject").value = "";
              document.getElementById("phone").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
            }}
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactTemplate;
