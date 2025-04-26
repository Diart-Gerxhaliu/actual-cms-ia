import React, { useEffect, useState } from "react";
import Abo from "../../json/Home/About.json";
import Ban from "../../json/Home/Banner.json";
import Banner from "../organisms/Banner";
import Desc from "../atoms/Desc";
import Heading from "../atoms/Heading";
import Serve from "../../json/Home/HomeServices.json";
import Image from "../atoms/Image";
import List from "../molecules/List";
import Button from "../atoms/Button";
import "../../pages/home.css";

function HomeTemplate() {
  let [ban, setBan] = useState([]);
  let [abo, setAbo] = useState([]);
  let [srv, setSrv] = useState([]);
  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let banner = localStorage.getItem("HomeBanner");
    let abouthome = localStorage.getItem("HomeAbout");
    let services = localStorage.getItem("HomeServices");

    if (banner == null) {
      localStorage.setItem("HomeBanner", JSON.stringify(Ban));
    } else {
      setBan(JSON.parse(banner));
    }

    if (abouthome == null) {
      localStorage.setItem("HomeAbout", JSON.stringify(Abo));
    } else {
      setAbo(JSON.parse(abouthome));
    }

    if (services == null) {
      localStorage.setItem("HomeServices", JSON.stringify(Serve));
    } else {
      setSrv(JSON.parse(services));
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ban.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ban]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ban.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ban.length) % ban.length);
  };

  return (
    <div className="home">
      {ban.length > 0 && (
        <div className="slider-container">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <Banner
            backImage={ban[currentIndex].imageBack}
            h1={ban[currentIndex].bannerHead}
            p={ban[currentIndex].bannerDesc}
            button1={ban[currentIndex].bannerButton1}
            button2={ban[currentIndex].bannerButton2}
          />
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      )}
      {abo.map((gal, index) => (
        <div className="abouthome" key={index}>
          <div className="left">
            <Image src={gal.aboutImage} />
          </div>
          <div className="left2">
            <Image src={gal.aboutImagee} />
          </div>
          <div className="right row">
            <Heading child={gal.aboutHead} />
            <Desc child={gal.aboutDesc} />
            <div className="aboutList">
              <List mapped={gal.aboutList} />
            </div>
            <Button child={gal.buttonDesc} />
            <div className="headingu">
              <Heading child={gal.aboutHeadd} />
            </div>
          </div>
        </div>
      ))}
      {srv.map((gal, index) => (
        <div className="servicesHome" key={index}>
          <h1>{gal.head}</h1>
          <List mapped={gal.card} />
        </div>
      ))}
    </div>
  );
}

export default HomeTemplate;
