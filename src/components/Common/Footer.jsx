import React from "react";

const Footer = () => {
  // Colors and font to match Navbar
  const goldenColor = "#FFD700";
  const beige = "#F5E6C5";
  const black = "#111";
  const dark = "#222";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&family=Inter:wght@400;600&display=swap');
        .footer-navbar-theme {
          background: ${black};
          color: ${beige};
          font-family: 'Work Sans', 'Inter', sans-serif;
          border-top: 2px solid ${goldenColor};
          border-radius: 40px 40px 0 0;
          box-shadow: 0 -4px 16px rgba(0,0,0,0.10);
          padding: 48px 0 0 0;
        }
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px 24px 24px;
        }
        .footer-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 32px;
        }
        .footer-col-navbar {
          flex: 1 1 220px;
          min-width: 200px;
          margin-bottom: 24px;
        }
        .footer-col-navbar h4 {
          font-size: 1.1rem;
          color: ${beige};
          font-weight: 600;
          margin-bottom: 18px;
          letter-spacing: 0.01em;
          position: relative;
          font-family: 'Work Sans', 'Inter', sans-serif;
        }
        .footer-col-navbar h4::after {
          content: '';
          display: block;
          width: 36px;
          height: 2.5px;
          background: ${goldenColor};
          border-radius: 2px;
          margin-top: 8px;
        }
        .footer-col-navbar p,
        .footer-col-navbar li,
        .footer-col-navbar a,
        .footer-col-navbar address {
          color: ${beige};
          font-size: 15px;
          font-family: 'Inter', 'Work Sans', sans-serif;
          font-weight: 400;
          margin: 0 0 8px 0;
          text-decoration: none;
          line-height: 1.7;
        }
        .footer-col-navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-social-links {
          margin-top: 8px;
        }
        .footer-social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          width: 32px;
          background: ${beige};
          color: ${black};
          border-radius: 50%;
          margin-right: 8px;
          font-size: 16px;
          border: 2px solid ${goldenColor};
          transition: background 0.2s, color 0.2s, border 0.2s;
          box-shadow: 0 2px 8px rgba(34,34,34,0.08);
        }
        .footer-social-links a:hover {
          background: ${goldenColor};
          color: ${black};
          border: 2px solid ${beige};
        }
        .footer-bottom {
          border-top: 1.5px solid ${dark};
          margin-top: 32px;
          padding: 18px 0 0 0;
          text-align: center;
          color: ${beige};
          font-size: 0.98rem;
          font-family: 'Inter', 'Work Sans', sans-serif;
          opacity: 0.85;
        }
        @media (max-width: 900px) {
          .footer-row {
            gap: 18px;
          }
        }
        @media (max-width: 768px) {
          .footer-row {
            flex-direction: column;
            gap: 0;
          }
          .footer-col-navbar {
            min-width: unset;
            margin-bottom: 18px;
          }
        }
      `}</style>
      <footer className="footer-navbar-theme">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col-navbar">
              <h4>Get In Touch</h4>
              <p>
                You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
              </p>
            </div>
            <div className="footer-col-navbar">
              <h4>Contact Details</h4>
              <ul>
                <li>
                  <strong>Phone</strong><br />
                  +91 1234567890
                </li>
                <li>
                  <strong>Email</strong><br />
                  mailmehereonearth@gmail.com
                </li>
              </ul>
            </div>
            <div className="footer-col-navbar">
              <h4>My Location</h4>
              <address style={{ fontStyle: "normal" }}>
                17-34, aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, Visakhapatnam, Andhra Pradesh - 530013
              </address>
              <div style={{ marginTop: "18px" }}>
                <span style={{ fontWeight: 600, fontSize: "1rem", color: beige }}>Follow Me</span>
                <div className="footer-social-links" style={{ marginTop: 8 }}>
                  <a href="#" aria-label="Facebook">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <path d="M15.5 8.5H14V7.5C14 7.22 14.22 7 14.5 7H15.5V5H14.5C13.12 5 12 6.12 12 7.5V8.5H11V10.5H12V17H14V10.5H15.5L16 8.5H14Z" fill={black}/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <path d="M19 7.5c-.5.22-1.04.37-1.6.44A2.77 2.77 0 0 0 18.5 6c-.54.32-1.13.56-1.77.68A2.75 2.75 0 0 0 7.5 9.5c0 .22.02.44.07.65A7.8 7.8 0 0 1 5 7.8a2.75 2.75 0 0 0 .85 3.67c-.44-.01-.85-.13-1.2-.33v.03c0 1.3.93 2.38 2.16 2.63-.23.06-.47.09-.72.09-.18 0-.34-.02-.51-.05.34 1.06 1.33 1.84 2.5 1.86A5.5 5.5 0 0 1 5 17.5c-.36 0-.71-.02-1.06-.07A7.77 7.77 0 0 0 9.29 19c6.29 0 9.74-5.21 9.74-9.74 0-.15 0-.29-.01-.44A7.1 7.1 0 0 0 21 6.5a7.1 7.1 0 0 1-2 .55z" fill={black}/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <rect x="7" y="7" width="10" height="10" rx="3" stroke={black} strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="3" stroke={black} strokeWidth="1.5"/>
                      <circle cx="16" cy="8" r="0.8" fill={black}/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <rect x="7" y="9" width="2" height="6" fill={black}/>
                      <rect x="11" y="11" width="2" height="4" fill={black}/>
                      <rect x="15" y="11" width="2" height="4" fill={black}/>
                      <circle cx="8" cy="7" r="1" fill={black}/>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="none"/>
                      <rect x="7" y="9" width="10" height="6" rx="2" fill={black}/>
                      <polygon points="12,11 15,13 12,15" fill={beige}/>
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
