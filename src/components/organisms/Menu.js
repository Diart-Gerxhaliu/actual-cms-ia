import React, { useEffect, useState } from "react";
import Image from "../atoms/Image";
import Navcomps from "../../json/Menu.json";
import Logo from "../../json/Logo.json";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import "./Menu.css";

function Menu() {
  const [lG, setLG] = useState([]);
  const [lN, setLN] = useState([]);
  const [menuStyle, setMenuStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [MenuStyleDinamic, setMenuStyleDinamic] = useState({});
  const [menuStyleLS, setMenuStyleLS] = useState(localStorage.getItem("menuStyle")||[]);
  let [menuStylevvv,setMenuStylevvv] = useState({
    ...menuStyle,
    ...MenuStyleDinamic,
  });
    


  const menuStyles = React.useMemo(() => [
    {
      name: "Minimal Light",
      properties: {
        background: "#ffffff",
        color: "#333333",
        hoverColor: "#2196f3",
        borderBottom: "1px solid #eaeaea",
        boxShadow: "none",
        height: "70px",
      },
    },
    {
      name: "Minimal Dark",
      properties: {
        background: "#1a1a1a",
        color: "#ffffff",
        hoverColor: "#4CAF50",
        borderBottom: "1px solid #333",
        boxShadow: "none",
        height: "70px",
      },
    },
    {
      name: "Modern Gradient",
      properties: {
        background: "linear-gradient(135deg, #6366f1, #3b82f6)",
        color: "#ffffff",
        hoverColor: "#60a5fa",
        borderBottom: "none",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        height: "70px",
      },
    },
    {
      name: "Classic Professional",
      properties: {
        background: "#2c3e50",
        color: "#ffffff",
        hoverColor: "#e74c3c",
        borderBottom: "3px solid #e74c3c",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        height: "80px",
      },
    },
    {
      name: "Bold Colorful",
      properties: {
        background: "#ff6b6b",
        color: "#ffffff",
        hoverColor: "#ffe66d",
        borderBottom: "none",
        boxShadow: "0 4px 15px rgba(255,107,107,0.3)",
        height: "70px",
      },
    },
    {
      name: "Transparent Glass",
      properties: {
        background: "rgba(255,255,255,0.1)",
        color: "#333333",
        hoverColor: "rgba(255,255,255,0.8)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        height: "70px",
      },
    },
    {
      name: "Material Design",
      properties: {
        background: "#ffffff",
        color: "#424242",
        hoverColor: "#2196f3",
        borderBottom: "none",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        height: "64px",
      },
    },
    {
      name: "Retro Style",
      properties: {
        background: "#f4d03f",
        color: "#2c3e50",
        hoverColor: "#e67e22",
        border: "2px solid #2c3e50",
        boxShadow: "4px 4px 0 #2c3e50",
        height: "75px",
      },
    },
    {
      name: "Neon Glow",
      properties: {
        background: "#000000",
        color: "#0ff",
        hoverColor: "#ff00ff",
        borderBottom: "none",
        boxShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff",
        height: "70px",
      },
    },
  ], []);

  useEffect(() => {
    const style = {
      height: "90px",
      padding: "15px 50px",
      justifyContent: "space-between",
    };

    const styleLS = localStorage.getItem("MenuStyle");
    const logo = localStorage.getItem("Logo");
    const comps = localStorage.getItem("Navbar");

    if (styleLS == null) {
      localStorage.setItem("MenuStyle", JSON.stringify(style));
    } else {
      setMenuStyle(JSON.parse(styleLS));
    }

    if (logo == null) {
      localStorage.setItem("Logo", JSON.stringify(Logo));
    } else {
      setLG(JSON.parse(logo));
    }

    if (comps == null) {
      localStorage.setItem("Navbar", JSON.stringify(Navcomps));
    } else {
      setLN(JSON.parse(comps));
    }
    setMenuStyleLS(localStorage.getItem("menuStyle"))
    setMenuStylevvv({
      ...menuStyle,
      ...menuStyles[menuStyleLS-1].properties,
    });



  }, []);

  
  return (
    <div className="menu" style={menuStylevvv}>
      {lG.map((gal, idx) => (
        <Image key={idx} src={gal.image} alt="logo" />
      ))}

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CloseIcon color="white" size={28} />
        ) : (
          <MenuIcon color="white" size={28} />
        )}
      </div>

      <ul className={`navbar ${isOpen ? "show" : ""}`}>
        {lN.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.child}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
