import React, { useState } from "react";
import ddglogo from "./ddglogo.png";
import { Link, useLocation } from "react-router-dom";

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

const Navbar = ({ isShrunk = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Determine if a nav target is active
  const isActive = (target) => {
    if (target === "/") return pathname === "/" && (!hash || hash === "");
    if (target.startsWith("#")) return pathname === "/" && hash === target;
    return pathname === target;
  };

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
          position: "relative",
          /* Adjusted to create space above the navigation bar */
          width: "100%",
          zIndex: 1000,
          left: 0,
          right: 0,
          background: "transparent",
          pointerEvents: "none", 
          // Make header not block pointer events for underlying content
        }}
      >
        <nav
          className={`navbar${isShrunk ? " shrink" : ""}`}
          style={{
            backgroundColor: "#FFFFFF",
            pointerEvents: "auto", // Allow nav to be interactive
            margin: "0 auto",
            minHeight: isShrunk ? "60px" : "100px",
            transition: "min-height 0.3s ease",
          }}
        >
          <div className="navbar-logo">
            <span>
              <img
                src={ddglogo}
                alt="Logo"
                className="navbar-logo-img"
                style={{
                  width: isShrunk ? "70px" : "96px",
                  height: "auto",
                  marginRight: "0px",
                  
                  position: "relative",
                  zIndex: 1001,
                  maxHeight: isShrunk ? "50px" : "78px",
                  objectFit: "contain",
                  transition: "width 0.2s, max-height 0.2s",
                }}
              />
              <span
                className="logo-text"
                style={{
                  fontSize: isShrunk ? "1rem" : "1.25rem",
                  color: "#000000",
                  marginLeft: "10px",
                  whiteSpace: "pre-line",
                  transition: "font-size 0.2s",
                  fontFamily: "'Montserrat', 'Arial', 'Helvetica Neue', Arial, sans-serif",
                  lineHeight: 1.1,
                  display: "inline-block",
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "geometricPrecision",
                  background: "none",
                  textShadow: "none",
                  filter: "none",
                  // Remove all possible rendering artifacts
                  // No border, no outline, no boxShadow
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  // Force hardware acceleration off
                  willChange: "auto",
                }}
              >
                DESIGN & 
                <br />
                DÉCOR GUIDE
              </span>
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
                    border: "1.5px solid #8B0000",
                    opacity: menuOpen ? 1 : 0,
                    transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                    pointerEvents: menuOpen ? "all" : "none",
                  }
                : {}
            }
          >
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={handleNavLinkClick}
              style={{ padding: "8px 12px" }}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className={`nav-link ${isActive("/aboutus") ? "active" : ""}`}
              onClick={handleNavLinkClick}
              style={{ padding: "8px 12px" }}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "active" : ""}`}
              onClick={handleNavLinkClick}
              style={{ padding: "8px 12px" }}
            >
              Services
            </Link>
            <Link
              to="/fullgallery"
              className={`nav-link ${isActive("/fullgallery") ? "active" : ""}`}
              onClick={handleNavLinkClick}
              style={{ padding: "8px 12px" }}
            >
              Gallery
            </Link>

              <Link
              to="/faq"
              className={`nav-link ${isActive("/faq") ? "active" : ""}`}
              onClick={handleNavLinkClick}
              style={{ padding: "8px 12px" }}
            >
              FAQ'S
            </Link>
            <Link
              to="/contactus"
              className={`nav-link ${isActive("/contactus") ? "active" : ""}`}
              onClick={handleNavLinkClick}
              style={{ padding: "8px 12px" }}
            >
              Contact Us
            </Link>
            
          </div>
          {/* Show Let's Talk as a world-class button on desktop */}
          
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .navbar {
  width: 100%;
  max-width: 100%;
  background: red;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  border-radius: 0;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 100px;
  pointer-events: auto;
  transition: min-height 0.3s ease;  /* smooth shrinking */
  z-index: 1000;
}

        .navbar-logo {
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: 15px;
        }
        .navbar-logo span {
          display: flex;
          align-items: flex-end;
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
          .logo-text {
            font-size: 0.9rem !important;
          }
        }
        .navbar-menu {
          display: flex;
          gap: 20px;
          --nav-gap: 20px;
          align-items: center;
        }
        .navbar-menu a {
          text-decoration: none;
          font-size: 15px;
          color: #000000;
          font-weight: 800;
          font-family: 'Inter', 'Work Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          transition: color 0.25s ease, opacity 0.25s ease;
          padding: 14px 28px;
          border-radius: 0;
          white-space: nowrap;
          position: relative;
          background: none;
        }
        /* Vertical divider between nav items - centered between links */
        .navbar-menu a.nav-link:not(:first-child)::before {
          content: "";
          position: absolute;
          left: calc(var(--nav-gap) / -2);
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 18px;
          background: rgba(0,0,0,0.15);
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
          background: linear-gradient(90deg, #CD3737 0%, #8B0000 100%);
          color: #FFFFFF !important;
          border: none !important;
          border-radius: 32px !important;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
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
          background: #8B0000;
          color: #FFFFFF !important;
          box-shadow: 0 4px 12px 0 rgba(0,0,0,0.12);
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

        /* Disable previous underline animation for a clean, segmented look */
        .navbar-menu a::after { display: none; }
        .navbar-menu a:hover,
        .navbar-menu a:focus {
          color: rgb(200,62,62);
          background: none;
        }
        .navbar-menu a.active { color: rgb(200,62,62); }

        .hamburger {
          display: none;
          font-size: 28px;
          cursor: pointer;
          color: #000000;
        }
        @media screen and (max-width: 900px) {
  .navbar {
    width: 100%;              /* still full width */
    padding: 8px 8px;
  }
  .navbar-menu {
    gap: 18px;
    --nav-gap: 18px;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .navbar {
    width: 100%;              /* full width */
    min-width: unset;
    padding: 8px 4px;
  }
  .navbar-menu {
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    --nav-gap: 10px;
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
  /* Hide vertical dividers on mobile */
  .navbar-menu a.nav-link::before { display: none !important; }
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
        /* Remove body padding-top so navbar does not occupy any space */
        body {
          padding-top: 0 !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;