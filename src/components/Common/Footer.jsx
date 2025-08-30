import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&family=Inter:wght@400;600&display=swap');
        .footer-navbar-theme {
          background: #000;
          color: #fff;
          font-family: 'Work Sans', 'Inter', sans-serif;
          border-top: 2px solid #CD3737;
          border-radius: 24px 24px 0 0;
          box-shadow: 0 -2px 8px rgba(0,0,0,0.08);
          padding: 24px 0 0 0;
        }
        .footer-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 16px 12px 16px;
        }
        .footer-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 16px;
        }
        .footer-col-navbar {
          flex: 1 1 180px;
          min-width: 0;
          margin-bottom: 12px;
        }
        .footer-col-navbar h4 {
          font-size: 1rem;
          color: #fff;
          font-weight: 600;
          margin-bottom: 10px;
          letter-spacing: 0.01em;
          position: relative;
          font-family: 'Work Sans', 'Inter', sans-serif;
        }
        .footer-col-navbar h4::after {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: #CD3737;
          border-radius: 2px;
          margin-top: 6px;
        }
        .footer-col-navbar p,
        .footer-col-navbar li,
        .footer-col-navbar a,
        .footer-col-navbar address {
          color: #fff;
          font-size: 14px;
          font-family: 'Inter', 'Work Sans', sans-serif;
          font-weight: 400;
          margin: 0 0 6px 0;
          text-decoration: none;
          line-height: 1.6;
        }
        .footer-col-navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-social-links {
          margin-top: 6px;
        }
        .footer-social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          width: 44px;
          background: #fff;
          color: #000;
          border-radius: 50%;
          margin-right: 8px;
          font-size: 24px;
          border: 2px solid #CD3737;
          transition: background 0.2s, color 0.2s, border 0.2s;
          box-shadow: 0 1px 4px rgba(34,34,34,0.06);
        }
        .footer-social-links a:last-child {
          margin-right: 0;
        }
        .footer-social-links a:hover {
          background: #CD3737;
          color: #fff;
          border: 2px solid #fff;
        }
        .footer-bottom {
          border-top: 1px solid #0082BD;
          margin-top: 18px;
          padding: 10px 0 0 0;
          text-align: center;
          color: #fff;
          font-size: 0.92rem;
          font-family: 'Inter', 'Work Sans', sans-serif;
          opacity: 0.85;
        }
        @media (max-width: 700px) {
          .footer-row {
            flex-direction: column;
            gap: 0;
          }
          .footer-col-navbar {
            margin-bottom: 10px;
          }
          .footer-container {
            padding: 0 8px 8px 8px;
          }
        }
      `}</style>
      <footer className="footer-navbar-theme">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col-navbar">
              <h4>Get In Touch</h4>
              <p>
                Let's connect! Reach out for collaborations, questions, or just to say hi.
              </p>
            </div>
            <div className="footer-col-navbar">
              <h4>Contact</h4>
              <ul>
                <li>
                  <strong>Phone</strong><br />
                  <a href="tel:+911234567890" style={{ color: "#fff" }}>+91 1234567890</a>
                </li>
                <li>
                  <strong>Email</strong><br />
                  <a href="mailto:mailmehereonearth@gmail.com" style={{ color: "#fff" }}>mailmehereonearth@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col-navbar">
              <h4>Location</h4>
              <address style={{ fontStyle: "normal" }}>
                17-34, Example Street, Visakhapatnam, Andhra Pradesh - 530013
              </address>
              <div style={{ marginTop: "12px" }}>
                <span style={{ fontWeight: 600, fontSize: "1rem", color: "#fff" }}>Follow Me</span>
                <div className="footer-social-links" style={{ marginTop: 6 }}>
                  <a href="#" aria-label="Facebook">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <path d="M15.5 8.5H14V7.5C14 7.22 14.22 7 14.5 7H15.5V5H14.5C13.12 5 12 6.12 12 7.5V8.5H11V10.5H12V17H14V10.5H15.5L16 8.5H14Z" fill="#000"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <path d="M19 7.5c-.5.22-1.04.37-1.6.44A2.77 2.77 0 0 0 18.5 6c-.54.32-1.13.56-1.77.68A2.75 2.75 0 0 0 7.5 9.5c0 .22.02.44.07.65A7.8 7.8 0 0 1 5 7.8a2.75 2.75 0 0 0 .85 3.67c-.44-.01-.85-.13-1.2-.33v.03c0 1.3.93 2.38 2.16 2.63-.23.06-.47.09-.72.09-.18 0-.34-.02-.51-.05.34 1.06 1.33 1.84 2.5 1.86A5.5 5.5 0 0 1 5 17.5c-.36 0-.71-.02-1.06-.07A7.77 7.77 0 0 0 9.29 19c6.29 0 9.74-5.21 9.74-9.74 0-.15 0-.29-.01-.44A7.1 7.1 0 0 0 21 6.5a7.1 7.1 0 0 1-2 .55z" fill="#000"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <rect x="7" y="7" width="10" height="10" rx="3" stroke="#000" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="3" stroke="#000" strokeWidth="1.5"/>
                      <circle cx="16" cy="8" r="0.8" fill="#000"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <rect x="7" y="9" width="2" height="6" fill="#000"/>
                      <rect x="11" y="11" width="2" height="4" fill="#000"/>
                      <rect x="15" y="11" width="2" height="4" fill="#000"/>
                      <circle cx="8" cy="7" r="1" fill="#000"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <rect x="7" y="9" width="10" height="6" rx="2" fill="#000"/>
                      <polygon points="12,11 15,13 12,15" fill="#fff"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
