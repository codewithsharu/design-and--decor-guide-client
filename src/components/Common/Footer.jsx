import React from "react";
import { Instagram, Linkedin, Youtube, MapPin, Mail } from "lucide-react";
import ddglogo from "./ddglogo.png";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
       
        @import url('https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap');
        .footer {
          background: #1a1a1a;
          color: #fff;
          font-family: 'Work Sans', 'Inter', sans-serif;
          padding: 60px 0 0 0;
          position: relative;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg,rgb(68, 177, 228) 0%, #E6C589 50%,rgb(68, 177, 228) 100%);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px 0 40px;
        }
        
        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
          margin-bottom: 50px;
        }
        
        .footer-left {
          flex: 1;
          max-width: 350px;
        }
        
        .footer-logo {
          margin-bottom: 20px;
        }
        
        .footer-logo img {
          max-height: 60px;
          width: auto;
          object-fit: contain;
        }
        
        .footer-brand h1 {
          
        
        }
          .khand-bold {
            font-family: "Khand", sans-serif;
            font-size: 2.4rem;
            color: rgb(68, 177, 228);
            margin: 0 0 20px 0;
            letter-spacing: 0.05em;
            line-height: 1.2;
            text-transform: uppercase;
            position: relative;
            display: inline-block;
          }

          .khand-bold1::after {
            content: "";
            display: block;
            width: 90%;
            max-width: 90px;
            height: 2px;
            background: #FF0000;
            margin: 10px auto 0 0;
            opacity: 0.7;
          }
        
        .footer-description {
          color: #CCCCCC;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 30px;
          font-weight: 400;
        }
        
        .footer-social {
          display: flex;
          gap: 12px;
        }
        
        .footer-social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #2a2a2a;
          color:rgb(68, 177, 228);
          border-radius: 6px;
          transition: all 0.3s ease;
          border: 1px solid #333;
        }
        
        .footer-social a:hover {
          background:rgb(68, 177, 228);
          color: #1a1a1a;
          transform: translateY(-2px);
        }
        
        .footer-middle {
          display: flex;
          gap: 80px;
          flex: 1;
        }
        
        .footer-col {
          flex: 1;
          min-width: 160px;
        }
        
        .footer-col h4 {
          font-size: 14px;
          color:rgb(68, 177, 228);
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          position: relative;
        }
        
        .footer-col h4::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background:rgb(68, 177, 228);
          margin-top: 8px;
        }
        
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-col li {
          margin-bottom: 12px;
        }
        
        .footer-col a,
        .footer-col p {
          color: #CCCCCC;
          font-size: 13px;
          font-weight: 400;
          text-decoration: none;
          line-height: 1.6;
          transition: color 0.3s ease;
          margin: 0;
        }
        
        .footer-col a:hover {
          color:rgb(68, 177, 228);
        }
        
        .footer-right {
          flex: 0 0 300px;
        }
        
        .contact-item {
          margin-bottom: 40px;
        }
        
        .contact-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .contact-icon {
          color:rgb(68, 177, 228);
          flex-shrink: 0;
        }
        
        .contact-title {
          font-size: 14px;
          color:rgb(68, 177, 228);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0;
        }
        
        .contact-text {
          color: #CCCCCC;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
          padding-left: 30px;
        }
        
        .footer-bottom {
          border-top: 1px solid #333;
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-bottom-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .footer-logo-small {
          width: 40px;
          height: 40px;
          background:rgb(68, 177, 228);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #1a1a1a;
          font-size: 18px;
        }
        
        .copyright-text {
          color: #666;
          font-size: 12px;
        }
        
        .footer-bottom-right {
          color: #666;
          font-size: 12px;
        }
        
        @media (max-width: 768px) {
          .footer-row {
            flex-direction: column;
            gap: 40px;
          }
          
          .footer-middle {
            flex-direction: column;
            gap: 30px;
          }
          
          .footer-right {
            flex: 1;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            {/* Left Section */}
            <div className="footer-left">
             
              <div className="footer-brand khand-bold">
                <h1>
                  <span style={{ color: "#44B1E4", fontWeight: 900, letterSpacing: 1 }}>DDG</span> UNDERSTANDS YOUR PRIMARY NEEDS
                </h1>
              </div>
              <div className="footer-description">
                DDG tailor every design to your needs, ensuring your space reflects your style flawlessly. With us, your dream home is just a step away.
              </div>
              <div className="footer-social">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="instagram-bg"
                  style={{
                    background: "linear-gradient(45deg, #fd5, #ff543e 40%, #c837ab 80%, #285AEB)",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                  }}
                >
                  <Instagram size={20} color="#fff" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="linkedin-bg"
                  style={{
                    background: "#0077B5", // LinkedIn blue
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                  }}
                >
                  <Linkedin size={20} color="#fff" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="youtube-bg"
                  style={{
                    background: "#FF0000", // YouTube red
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                  }}
                >
                  <Youtube size={20} color="#fff" />
                </a>
              </div>
            </div>

            {/* Middle Section */}
            <div className="footer-middle">
              <div className="footer-col ">
                <h1 className="khand-bold1 khand-bold">Quick Links</h1>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h1 className="khand-bold1 khand-bold">Our Services</h1>
                <ul>
                  <li><a href="#">Turnkey Interiors</a></li>
                  <li><a href="#">Modular Furniture</a></li>
                  <li><a href="#">Soft Furnishings</a></li>
                  <li><a href="#">Customised Lighting</a></li>
                  <li><a href="#">Renovations & Interior Styling</a></li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="footer-right">
              <div className="contact-section">
                <h1 className="khand-bold khand-bold1">CONTACT INFORMATION</h1>
                
                {/* Location */}
                <div className="contact-item">
                  <div
                    className="contact-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: 0,
                    }}
                  >
                    <MapPin
                      size="clamp(22, 2.5vw, 32)"
                      className="contact-icon"
                      style={{
                        flexShrink: 0,
                        width: "clamp(22px, 2.5vw, 32px)",
                        height: "clamp(22px, 2.5vw, 32px)",
                      }}
                    />
                    <h4
                      className="khand-bold"
                      style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                        color: "#fff",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      Our Location
                    </h4>
                  </div>
                  <div className="contact-text">
                    Design & Décor Guide by MMC,<br />
                    behind Jayabheri Maruthi Showroom,<br />
                    Kranthi Nagar, Visakhapatnam - 530014,<br />
                    Andhra Pradesh 530013<br />
                    <a
                      href="https://maps.app.goo.gl/mjGtYJ8VxeVRfbUb7?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff", textDecoration: "underline" }}
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

               
                {/* Email & Website */}
                <div className="contact-item">
                  <div
                    className="contact-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: 0,
                    }}
                  >
                    <Mail
                      size="clamp(22, 2.5vw, 32)"
                      className="contact-icon"
                      style={{
                        flexShrink: 0,
                        width: "clamp(22px, 2.5vw, 32px)",
                        height: "clamp(22px, 2.5vw, 32px)",
                      }}
                    />
                    <h4
                      className="khand-bold"
                      style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                        color: "#fff",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      Email & Website
                    </h4>
                  </div>
                  <div className="contact-text">
                    <a href="mailto:designdecorguide@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
                      designdecorguide@gmail.com
                    </a>
                    <br />
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
            <div className="footer-logo">
                <img src={ddglogo} alt="GDG Logo" />
              </div>
              <div className="copyright-text">
                © 2025 DDG, ALL RIGHTS RESERVED
              </div>
            </div>
            <div className="footer-bottom-right">
              any suitable text
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;