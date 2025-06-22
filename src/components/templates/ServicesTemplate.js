import React, { useState, useEffect } from "react";
import "./ServicesTemplate.css";
import Banner from "../organisms/Banner";
import CardServices from "../organisms/CardService";
import ServiceDataJson from "../../json/Service/ServiceData.json";
import ServiceBannerJson from "../../json/Service/Banner.json";

const ServicesTemplate = () => {
  const [servicesData, setServicesData] = useState(null);
  const [servicesBanner, setServicesBanner] = useState([]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("servicesData");
      const bannerData = localStorage.getItem("servicesBanner");

      if (!storedData) {
        localStorage.setItem("servicesData", JSON.stringify(ServiceDataJson));
        setServicesData(ServiceDataJson);
      } else {
        setServicesData(JSON.parse(storedData));
      }

      if (!bannerData) {
        localStorage.setItem(
          "servicesBanner",
          JSON.stringify(ServiceBannerJson)
        );
        setServicesBanner(ServiceBannerJson);
      } else {
        setServicesBanner(JSON.parse(bannerData));
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, []);

  return (
    <div className="services-container">
      <div className="services-banner">
        {servicesBanner &&
          servicesBanner.map((banner, index) => (
            <Banner
              key={index}
              backImage={banner.imageBack}
              h1={banner.bannerHead}
              p={banner.bannerDesc}
              button1={banner.bannerButton1}
              button2=""
            />
          ))}
      </div>
      <div className="content-section">
        <CardServices />
      </div>
    </div>
  );
};

export default ServicesTemplate;
