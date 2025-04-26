import React, { useEffect, useState } from "react";
import "./ServicesTemplate.css";
import ServiceDataJson from "../../json/Service/ServiceData.json";
import ServiceBannerJson from "../../json/Service/Banner.json";

import Banner from "../organisms/Banner";
import ServiceImage from "../../assets/ServiceImage.jpg";

const ServiceTemplate = () => {
  const [servicesData, setServicesData] = useState(null);
  const [servicesBanner, setServicesBanner] = useState([]);

  useEffect(() => {
    console.log("Fetching data from localStorage...");
    try {
      let storedData = localStorage.getItem("servicesData");
      let bannerData = localStorage.getItem("servicesBanner");

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
        <div className="image-container">
          <img src={ServiceImage} alt="Business" className="service-image" />
        </div>

        <div className="services-grid">
          {servicesData &&
            servicesData.map((item, index) => (
              <div className="service-card" key={index}>
                <img src={item.icon} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
