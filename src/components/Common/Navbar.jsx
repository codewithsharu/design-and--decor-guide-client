import React, { useState } from "react";

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
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2em",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          background: "transparent",
        }}
      >
        <nav className="navbar">
          <div className="navbar-logo">
            <span>
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                style={{ marginRight: 15, verticalAlign: "middle" }}
              >
                <circle cx="12" cy="12" r="10" fill="#222" />
                <rect x="8" y="10" width="8" height="6" rx="2" fill="#fff" />
                <rect x="10" y="7" width="4" height="4" rx="1" fill="#fff" />
              </svg>
              Logo
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
                    backgroundColor: "#f6f6f6",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                    padding: 20,
                    borderRadius: 40,
                    border: "1.5px solid #e0e0e0",
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
            >
              About
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Services
            </a>
            <a
              href="#gallery"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Gallery
            </a>
            <a
              href="#pricing"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Pricing
            </a>
          </div>
          <button
            className="navbar-button"
            style={{
              display: window.innerWidth <= 768 ? "none" : "block",
            }}
          >
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </a>
          </button>
          <div
            className="hamburger"
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              fontSize: 24,
              cursor: "pointer",
              color: "#222",
              marginLeft: 16,
              marginRight: 16, // Added space to the right
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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .navbar {
          width: 70%;
          max-width: 1100px;
          background: #f6f6f6;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
          border-radius: 40px;
          padding: 10px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          border: 1.5px solid #e0e0e0;
          margin: 0 10px;
          min-height: 56px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
        }
        .navbar-logo span {
          font-size: 1.15rem;
          font-weight: 600;
          color: #222;
          font-family: 'Work Sans', 'Inter', sans-serif;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
        }
        .navbar-menu {
          display: flex;
          gap: 40px;
        }
        .navbar-menu a {
          text-decoration: none;
          font-size: 15px;
          color: #222;
          font-weight: 500;
          font-family: 'Inter', 'Work Sans', sans-serif;
          transition: color 0.2s;
          padding: 4px 0;
          border-radius: 6px;
        }
        .navbar-button {
          padding: 8px 28px;
          background-color: #222;
          color: #fff;
          border: 2px solid #222;
          border-radius: 30px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', 'Work Sans', sans-serif;
          transition: background 0.2s, color 0.2s;
          box-shadow: 0 2px 8px rgba(34,34,34,0.08);
        }
        .navbar-button:hover {
          background: #fff;
          color: #222;
        }
        .hamburger {
          display: none;
          font-size: 28px;
          cursor: pointer;
          color: #222;
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
            background-color: #f6f6f6;
            box-shadow: 0 4px 16px rgba(0,0,0,0.10);
            padding: 20px;
            border-radius: 40px;
            border: 1.5px solid #e0e0e0;
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
          }
          .navbar-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
