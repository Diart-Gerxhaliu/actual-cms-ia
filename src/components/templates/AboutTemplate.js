import React, { useState, useEffect } from "react";
import aboutJson from "../../json/About/AboutData.json";
import "./AboutTemplate.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    let storedData = localStorage.getItem("aboutData");
    if (!storedData) {
      localStorage.setItem("aboutData", JSON.stringify(aboutJson));
      storedData = JSON.stringify(aboutJson);
    }

    setAboutData(JSON.parse(storedData)[0]);
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <div className="about-page">
      <link rel="preload" href={aboutData.banner.image} as="image" />

      <div className="about-banner-image">
        <img
          src={aboutData.banner.image}
          alt="Ziptech Banner"
          className="banner-img"
          loading="lazy"
          onLoad={(e) => e.target.classList.add("loaded")}
        />
        <div className="banner-text">
          <h1>{aboutData.banner.heading}</h1>
          <p>{aboutData.banner.subheading}</p>
        </div>
      </div>

      <div className="about-section">
        <h2>{aboutData.vision.title}</h2>
        <p>{aboutData.vision.description}</p>
      </div>

      <div className="about-section">
        <div className="baba">
          <h2>{aboutData.services.title}</h2>
          <ul>
            {aboutData.services.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <img src={aboutData.services.image} alt="about" />
      </div>

      <div className="about-section">
        <div className="baba">
          <h2>{aboutData.reasons.title}</h2>
          <ul>
            {aboutData.reasons.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <img src={aboutData.reasons.image} alt="reasons" />
      </div>

      <div className="about-section">
        <h2>{aboutData.commitment.title}</h2>
        <p>{aboutData.commitment.description}</p>
      </div>

      <div className="about-cta">
        <h2>{aboutData.cta.title}</h2>
        <p>{aboutData.cta.description}</p>
        <a href={aboutData.cta.buttonLink} className="contact-button">
          {aboutData.cta.buttonText}
        </a>
      </div>
    </div>
  );
};

export default About;
