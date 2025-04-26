import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../molecules/NavBar";
import Image from "../atoms/Image";
import Icons from "../../json/SocialMedia.json";
import "../../assets/style/Footer.css";

function Footer() {
  const [menu, setMenu] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    const menuLocal = localStorage.getItem("Navbar");
    const footerIcons = localStorage.getItem("Icons");

    if (!menuLocal) {
      localStorage.setItem("Navbar", JSON.stringify(NavBar));
    } else {
      setMenu(JSON.parse(menuLocal));
    }

    if (!footerIcons) {
      localStorage.setItem("Icons", JSON.stringify(Icons));
    } else {
      setIcon(JSON.parse(footerIcons));
    }
  }, []);

  return (
    <div className="footer">
      <div className="row">
        {icon.map((item, index) => (
          <Image src={item.icon} alt="" key={index} />
        ))}
      </div>
      <div className="roww">
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.child}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Footer;
