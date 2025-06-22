import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../molecules/NavBar";
import Icons from "../../json/SocialMedia.json";

import { Box, Stack, IconButton, Tooltip, Divider } from "@mui/material";

function Footer() {
  const [menu, setMenu] = useState([]);
  const [icon, setIcon] = useState([]);
  const [menuStyleID, setMenuStyleID] = useState(2); // default to 2 (Minimal Dark)

  const menuStyles = useMemo(() => [
    {
      name: "Minimal Light",
      properties: {
        background: "#ffffff",
        color: "#333333",
        hoverColor: "#2196f3",
      },
    },
    {
      name: "Minimal Dark",
      properties: {
        background: "#1a1a1a",
        color: "#ffffff",
        hoverColor: "#4CAF50",
      },
    },
    {
      name: "Modern Gradient",
      properties: {
        background: "linear-gradient(135deg, #6366f1, #3b82f6)",
        color: "#ffffff",
        hoverColor: "#60a5fa",
      },
    },
    {
      name: "Classic Professional",
      properties: {
        background: "#2c3e50",
        color: "#ffffff",
        hoverColor: "#e74c3c",
      },
    },
    {
      name: "Bold Colorful",
      properties: {
        background: "#ff6b6b",
        color: "#ffffff",
        hoverColor: "#ffe66d",
      },
    },
    {
      name: "Transparent Glass",
      properties: {
        background: "rgba(255,255,255,0.1)",
        color: "#333333",
        hoverColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
      },
    },
    {
      name: "Material Design",
      properties: {
        background: "#ffffff",
        color: "#424242",
        hoverColor: "#2196f3",
      },
    },
    {
      name: "Retro Style",
      properties: {
        background: "#f4d03f",
        color: "#2c3e50",
        hoverColor: "#e67e22",
      },
    },
    {
      name: "Neon Glow",
      properties: {
        background: "#000000",
        color: "#0ff",
        hoverColor: "#ff00ff",
        boxShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff",
      },
    },
  ], []);

  const appliedStyle = useMemo(() => {
    return menuStyles[menuStyleID - 1]?.properties || menuStyles[1].properties;
  }, [menuStyleID, menuStyles]);

  useEffect(() => {
    const menuLocal = localStorage.getItem("Navbar");
    const footerIcons = localStorage.getItem("Icons");
    const storedStyleID = localStorage.getItem("menuStyle");

    if (menuLocal) setMenu(JSON.parse(menuLocal));
    if (footerIcons) setIcon(JSON.parse(footerIcons));
    if (storedStyleID) setMenuStyleID(parseInt(storedStyleID));
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        background: appliedStyle.background,
        color: appliedStyle.color,
        py: 6,
        px: 2,
        textAlign: "center",
        backdropFilter: appliedStyle.backdropFilter || "none",
        boxShadow: appliedStyle.boxShadow || "none",
      }}
    >
      {/* Logo with background circle */}
      <Box
        sx={{
          display: "inline-block",
          bgcolor:
            appliedStyle.color === "#ffffff"
              ? "rgba(255, 255, 255, 0.15)"
              : "rgba(0, 0, 0, 0.15)",
          borderRadius: "30%",
          p: 1,
          mb: 3,
          boxShadow:
            appliedStyle.name === "Neon Glow"
              ? "0 0 10px #0ff, 0 0 20px #0ff"
              : "0 2px 5px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow:
              appliedStyle.name === "Neon Glow"
                ? "0 0 20px #ff00ff, 0 0 30px #ff00ff"
                : "0 4px 12px rgba(0,0,0,0.3)",
          },
        }}
      >
        <Box
          component="img"
          src="/logo1.png"
          alt="Logo"
          sx={{ height: 60, display: "block" }}
        />
      </Box>

      {/* Navigation */}
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        spacing={4}
        component="nav"
        sx={{ mb: 3 }}
      >
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            style={{
              textDecoration: "none",
              color: appliedStyle.color,
              fontWeight: 500,
              fontSize: 15,
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = appliedStyle.hoverColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.color = appliedStyle.color)
            }
          >
            {item.child}
          </Link>
        ))}
      </Stack>

      <Divider
        sx={{
          width: "60px",
          mx: "auto",
          borderColor: appliedStyle.color,
          opacity: 0.3,
          mb: 3,
        }}
      />

      {/* Social Icons with background circles */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        flexWrap="wrap"
      >
        {icon.map((item, index) => (
          <Tooltip title={item.name || "Social"} key={index}>
            <IconButton
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor:
                  appliedStyle.color === "#ffffff"
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(0, 0, 0, 0.15)",
                borderRadius: "50%",
                padding: 1,
                color: appliedStyle.color,
                boxShadow:
                  appliedStyle.name === "Neon Glow"
                    ? "0 0 8px #0ff, 0 0 20px #0ff"
                    : "0 2px 5px rgba(0,0,0,0.15)",
                "&:hover": {
                  transform: "scale(1.2) rotate(5deg)",
                  opacity: 0.9,
                  backgroundColor:
                    appliedStyle.hoverColor || "rgba(255, 255, 255, 0.3)",
                  boxShadow:
                    appliedStyle.name === "Neon Glow"
                      ? "0 0 20px #ff00ff, 0 0 30px #ff00ff"
                      : "0 4px 12px rgba(0,0,0,0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: 28,
                  height: 28,
                  filter:
                    appliedStyle.color === "#ffffff" ? "invert(1)" : "none",
                }}
              />
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
}

export default Footer;
