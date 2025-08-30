import React, { useState } from "react";
import ddglogo from "./ddglogo.png";

// A better icon: a modern chat bubble SVG
const ChatBubbleIcon = ({ color = "#fff", size = 22 }) => (
  <span
    className="chat-bubble-icon"
    aria-hidden="true"
    style={{ display: "inline-flex", alignItems: "center", marginRight: 2 }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      style={{ display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="3"
        width="18"
        height="13"
        rx="5"
        fill={color}
        stroke="#CD3737"
        strokeWidth="2"
      />
      <ellipse
        cx="7"
        cy="9.5"
        rx="1.2"
        ry="1.2"
        fill="#CD3737"
      />
      <ellipse
        cx="11"
        cy="9.5"
        rx="1.2"
        ry="1.2"
        fill="#CD3737"
      />
      <ellipse
        cx="15"
        cy="9.5"
        rx="1.2"
        ry="1.2"
        fill="#CD3737"
      />
      <path
        d="M7 16.5C7.5 16.5 8.5 17.5 11 19C13.5 17.5 14.5 16.5 15 16.5"
        stroke="#CD3737"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </span>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handles hamburger click
  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  // Handles nav link click (closes menu on mobile)
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "2em",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <nav className="navbar" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="navbar-logo">
            <span>
              <img
                src={ddglogo}
                alt="Logo"
                className="navbar-logo-img"
                style={{
                  width: "96px",
                  height: "auto",
                  marginRight: "0px",
                  verticalAlign: "middle",
                  position: "relative",
                  zIndex: 1001,
                  maxHeight: "78px",
                  objectFit: "contain",
                }}
              />
            </span>
          </div>
          <div
            className={`navbar-menu${menuOpen ? " active" : ""}`}
            style={
              window.innerWidth <= 768
                ? {
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    position: "absolute",
                    top: menuOpen ? "calc(100% + 10px)" : "-200px",
                    left: 10,
                    right: 10,
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                    padding: 20,
                    borderRadius: 40,
                    border: `1.5px solid #8B0000`,
                    opacity: menuOpen ? 1 : 0,
                    transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                    pointerEvents: menuOpen ? "all" : "none",
                  }
                : {}
            }
          >
            <a
              href="#about"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={{ color: "#000000", padding: "8px 12px" }}
            >
              About
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={{ color: "#000000", padding: "8px 12px" }}
            >
              Services
            </a>
            <a
              href="#gallery"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={{ color: "#000000", padding: "8px 12px" }}
            >
              Gallery
            </a>
            <a
              href="/contactus"
              className="nav-link"
              onClick={handleNavLinkClick}
              style={{ color: "#000000", padding: "8px 12px" }}
            >
              Contact Us
            </a>
            {window.innerWidth <= 768 && (
              <a
                href="#contact"
                className="nav-link button-lets-talk"
                onClick={handleNavLinkClick}
                style={{
                  color: "#FFFFFF",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontFamily: "'Sora', 'Inter', 'Work Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.13rem",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)", /* Very subtle shadow */
                  background: "#CD3737", /* Solid color background */
                  border: "none",
                  padding: "12px 32px",
                  borderRadius: "32px",
                  marginTop: "12px",
                }}
              >
                <ChatBubbleIcon color="#fff" size={22} />
                Let's Talk
              </a>
            )}
          </div>
          {/* Show Let's Talk as a world-class button on desktop */}
          {window.innerWidth > 768 && (
            <a
              href="/contactus"
              className="navbar-button button-lets-talk"
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontFamily: "'Sora', 'Inter', 'Work Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem", /* Slightly smaller font size */
                letterSpacing: "0.01em", /* Reduced letter spacing */
                textTransform: "none", /* No uppercase */
                background: "#CD3737", /* Solid color background */
                border: "none",
                padding: "14px 38px",
                borderRadius: "36px",
                boxShadow: "0 4px 12px 0 rgba(0,0,0,0.08)", /* Very subtle shadow */
                position: "relative",
                overflow: "hidden",
                transition: "all 0.2s ease-in-out", /* Simpler transition */
              }}
            >
              <ChatBubbleIcon color="#fff" size={22} />
              Let's Talk
            </a>
          )}
          <div
            className="hamburger"
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              fontSize: 24,
              cursor: "pointer",
              color: "#000000",
              marginLeft: 16,
              marginRight: 16,
              userSelect: "none",
            }}
            onClick={handleHamburgerClick}
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </div>
        </nav>
      </header>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .navbar {
          width: 70%;
          max-width: 1100px;
          background: #FFFFFF;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
          border-radius: 40px;
          padding: 10px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          border: 1.5px solid #8B0000;
          margin: 0 auto;
          min-height: 56px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: 15px; /* Added for space on left of logo */
        }
        .navbar-logo span {
          display: flex;
          align-items: center;
        }
        .navbar-logo-img {
          width: 96px;
          max-height: 78px;
          transition: width 0.2s, max-height 0.2s;
        }
        @media screen and (max-width: 768px) {
          .navbar-logo-img {
            width: 54px !important;
            max-height: 44px !important;
          }
        }
        .navbar-menu {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .navbar-menu a {
          text-decoration: none;
          font-size: 16px;
          color: #000000;
          font-weight: 500;
          font-family: 'Inter', 'Work Sans', sans-serif;
          transition: color 0.2s, background-color 0.2s;
          padding: 8px 12px;
          border-radius: 0;
          white-space: nowrap;
          position: relative;
          background: none;
        }

        .navbar-button {
          padding: 8px 28px;
          background-color: #CD3737;
          color: #FFFFFF;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', 'Work Sans', sans-serif;
          transition: background 0.2s, color 0.2s;
          box-shadow: 0 2px 8px rgba(34,34,34,0.08);
          white-space: nowrap;
        }
        .navbar-button:hover {
          background: #FFFFFF;
          color: #CD3737;
        }
        .navbar-button a {
          color: #FFFFFF;
          text-decoration: none;
        }
        .navbar-button:hover a {
          color: #CD3737;
        }

        /* World-class Let's Talk button styles */
        .button-lets-talk {
          font-family: 'Sora', 'Inter', 'Work Sans', sans-serif !important;
          font-weight: 800 !important;
          font-size: 1.13rem !important;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #CD3737 0%, #8B0000 100%); /* Softer gradient */
          color: #FFFFFF !important;
          border: none !important;
          border-radius: 32px !important;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08); /* Very subtle shadow */
          padding: 12px 32px !important;
          display: inline-flex !important;
          align-items: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(.4,2,.6,1);
          outline: none;
        }
        .button-lets-talk:hover, .button-lets-talk:focus {
          background: #8B0000; /* Change background color on hover */
          color: #FFFFFF !important;
          box-shadow: 0 4px 12px 0 rgba(0,0,0,0.12); /* Slightly more pronounced shadow on hover */
          transform: translateY(-1px);
          text-shadow: none;
        }
        .button-lets-talk:active {
          transform: scale(0.98);
        }

        /* Chat bubble icon style */
        .chat-bubble-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 2px;
        }
        .chat-bubble-icon svg {
          display: block;
        }

        .navbar-menu a.button-lets-talk {
          margin-top: 12px;
        }

        .navbar-menu a::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 4px;
          width: 100%;
          border-radius: 2px 2px 0 0;
          background: linear-gradient(90deg, #8B0000 0%, #CD3737 100%);
          opacity: 0.85;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.32s cubic-bezier(.4,2,.6,1), opacity 0.2s;
          pointer-events: none;
        }
        .navbar-menu a:hover,
        .navbar-menu a:focus {
          color: #CD3737;
          background: none;
        }
        .navbar-menu a:hover::after,
        .navbar-menu a:focus::after {
          transform: scaleX(1);
          opacity: 1;
        }

        .hamburger {
          display: none;
          font-size: 28px;
          cursor: pointer;
          color: #000000;
        }
        @media screen and (max-width: 900px) {
          .navbar {
            width: 95%;
            padding: 8px 8px;
          }
          .navbar-menu {
            gap: 18px;
          }
        }
        @media screen and (max-width: 768px) {
          .navbar {
            width: 98%;
            min-width: unset;
            padding: 8px 4px;
          }
          .navbar-menu {
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: absolute;
            top: -200px;
            left: 10px;
            right: 10px;
            background-color: #FFFFFF;
            box-shadow: 0 4px 16px rgba(0,0,0,0.10);
            padding: 20px;
            border-radius: 40px;
            border: 1.5px solid #8B0000;
            opacity: 0;
            transition: all 0.3s cubic-bezier(.4,2,.6,1);
            pointer-events: none;
          }
          .navbar-menu.active {
            top: calc(100% + 10px);
            opacity: 1;
            pointer-events: all;
          }
          .hamburger {
            display: block;
            color: #000000;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
