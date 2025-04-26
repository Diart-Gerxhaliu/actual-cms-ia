import React, { useState, useEffect } from "react";
import "./HeaderCustomizer.css";

const HeaderCustomizer = () => {
  const [selectedStyle, setSelectedStyle] = useState(
    parseInt(localStorage.getItem("menuStyle")) || 1
  );
  const [menuPositions, setMenuPositions] = useState({
    logoPosition: localStorage.getItem("logoPosition") || "left",
    navPosition: localStorage.getItem("navPosition") || "right",
    layout: localStorage.getItem("layout") || "logo-nav",
  });

  const menuStyles = {
    1: {
      name: "Minimal Light",
      properties: {
        background: "#ffffff",
        textColor: "#333333",
        hoverColor: "#2196f3",
        borderBottom: "1px solid #eaeaea",
        boxShadow: "none",
        height: "70px",
      },
    },
    2: {
      name: "Minimal Dark",
      properties: {
        background: "#1a1a1a",
        textColor: "#ffffff",
        hoverColor: "#4CAF50",
        borderBottom: "1px solid #333",
        boxShadow: "none",
        height: "70px",
      },
    },
    3: {
      name: "Modern Gradient",
      properties: {
        background: "linear-gradient(135deg, #6366f1, #3b82f6)",
        textColor: "#ffffff",
        hoverColor: "#60a5fa",
        borderBottom: "none",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        height: "70px",
      },
    },
    4: {
      name: "Classic Professional",
      properties: {
        background: "#2c3e50",
        textColor: "#ffffff",
        hoverColor: "#e74c3c",
        borderBottom: "3px solid #e74c3c",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        height: "80px",
      },
    },
    5: {
      name: "Bold Colorful",
      properties: {
        background: "#ff6b6b",
        textColor: "#ffffff",
        hoverColor: "#ffe66d",
        borderBottom: "none",
        boxShadow: "0 4px 15px rgba(255,107,107,0.3)",
        height: "70px",
      },
    },
    6: {
      name: "Transparent Glass",
      properties: {
        background: "rgba(255,255,255,0.1)",
        textColor: "#333333",
        hoverColor: "rgba(255,255,255,0.8)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        height: "70px",
      },
    },
    7: {
      name: "Material Design",
      properties: {
        background: "#ffffff",
        textColor: "#424242",
        hoverColor: "#2196f3",
        borderBottom: "none",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        height: "64px",
      },
    },
    8: {
      name: "Retro Style",
      properties: {
        background: "#f4d03f",
        textColor: "#2c3e50",
        hoverColor: "#e67e22",
        border: "2px solid #2c3e50",
        boxShadow: "4px 4px 0 #2c3e50",
        height: "75px",
      },
    },
    9: {
      name: "Neon Glow",
      properties: {
        background: "#000000",
        textColor: "#0ff",
        hoverColor: "#ff00ff",
        borderBottom: "none",
        boxShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff",
        height: "70px",
      },
    },
  };

  const applyMenuStyle = (styleNumber) => {
    setSelectedStyle(styleNumber);
    localStorage.setItem("menuStyle", styleNumber.toString());
    const properties = {
      ...menuStyles[styleNumber].properties,
      ...menuPositions,
    };
    localStorage.setItem("menuProperties", JSON.stringify(properties));

    // Apply the style to the header/menu
    const header = document.querySelector(".header");
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");
    const style = properties;

    const elements = [header, menu, navbar].filter((el) => el);
    elements.forEach((el) => {
      el.style.background = style.background;
      el.style.color = style.textColor;
      el.style.borderBottom = style.borderBottom;
      el.style.boxShadow = style.boxShadow;
      el.style.height = style.height;
      if (style.backdropFilter) {
        el.style.backdropFilter = style.backdropFilter;
      }
    });

    // Add hover effect styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .navbar a:hover, .menu a:hover {
        color: ${style.hoverColor} !important;
        transition: color 0.3s ease;
      }
    `;
    document.head.appendChild(styleSheet);
  };

  const handlePositionChange = (property, value) => {
    const newPositions = { ...menuPositions, [property]: value };
    setMenuPositions(newPositions);
    localStorage.setItem(property, value);

    // Update menuProperties with new positions
    const currentStyle = menuStyles[selectedStyle].properties;
    const updatedProperties = { ...currentStyle, ...newPositions };
    localStorage.setItem("menuProperties", JSON.stringify(updatedProperties));
  };

  useEffect(() => {
    // Apply the saved style on component mount
    const savedStyle = parseInt(localStorage.getItem("menuStyle")) || 1;
    applyMenuStyle(savedStyle);

    // Load saved positions
    const savedLogoPos = localStorage.getItem("logoPosition");
    const savedNavPos = localStorage.getItem("navPosition");
    const savedLayout = localStorage.getItem("layout");

    if (savedLogoPos || savedNavPos || savedLayout) {
      setMenuPositions({
        logoPosition: savedLogoPos || "left",
        navPosition: savedNavPos || "right",
        layout: savedLayout || "logo-nav",
      });
    }
  }, []);

  return (
    <div className="header-customizer">
      <h2>Menu Style Customizer</h2>

      {/* Existing Style Grid */}
      <div className="style-grid">
        {Object.entries(menuStyles).map(([number, style]) => (
          <div
            key={number}
            className={`style-option ${
              selectedStyle === parseInt(number) ? "selected" : ""
            }`}
            onClick={() => applyMenuStyle(parseInt(number))}
          >
            <div
              className={`preview-box`}
              style={{
                background: style.properties.background,
                borderBottom: style.properties.borderBottom,
                boxShadow: style.properties.boxShadow,
              }}
            >
              <div
                className="preview-logo"
                style={{ backgroundColor: style.properties.textColor }}
              ></div>
              <div className="preview-menu">
                <span
                  style={{ backgroundColor: style.properties.textColor }}
                ></span>
                <span
                  style={{ backgroundColor: style.properties.textColor }}
                ></span>
                <span
                  style={{ backgroundColor: style.properties.textColor }}
                ></span>
              </div>
            </div>
            <span>{style.name}</span>
          </div>
        ))}
      </div>

      {/* New Position Controls */}
      <div className="position-controls">
        <h3>Layout Customization</h3>
        <div className="control-group">
          <label>Logo Position:</label>
          <select
            value={menuPositions.logoPosition}
            onChange={(e) =>
              handlePositionChange("logoPosition", e.target.value)
            }
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div className="control-group">
          <label>Navigation Position:</label>
          <select
            value={menuPositions.navPosition}
            onChange={(e) =>
              handlePositionChange("navPosition", e.target.value)
            }
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="space-between">Space Between</option>
          </select>
        </div>

        <div className="control-group">
          <label>Layout Order:</label>
          <select
            value={menuPositions.layout}
            onChange={(e) => handlePositionChange("layout", e.target.value)}
          >
            <option value="logo-nav">Logo then Navigation</option>
            <option value="nav-logo">Navigation then Logo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustomizer;
