import React, { useState } from "react";
import ddglogo from "../assets/ddglogo.png";

// Theme colors from src/theme.js
const theme = {
  primary: "#6B46C1",
  secondary: "#805AD5",
  background: "#F7FAFC",
  cardBackground: "#FFFFFF",
  white: "#FFFFFF",
  dark: "#2D3748",
  text: "#4A5568",
  lightText: "#718096",
  border: "#E2E8F0",
  accent: "#ECC944",
  error: "#E53E3E",
  lightBlue: "#EDF2F7",
};

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPrivacy: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Please enter your first name";
    if (!form.lastName.trim()) newErrors.lastName = "Please enter your last name";
    if (!form.email.trim()) newErrors.email = "Please enter your email";
    if (!form.message.trim()) newErrors.message = "Please enter your message";
    if (!form.agreeToPrivacy) newErrors.agreeToPrivacy = "You must agree to the privacy policy";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agreeToPrivacy: false,
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <div className="contact-header-inner">
          <img src={ddglogo} alt="DDG Logo" className="contact-logo" />
          <div className="contact-heading-texts">
            <h1 className="contact-title">Get in Touch</h1>
            <h2 className="contact-subtitle">Let's Chat, Reach Out to Us</h2>
            <p className="contact-desc">Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours</p>
          </div>
        </div>
      </div>
      
      <div className="contact-box">
        {/* Left Side - Form */}
        <div className="container-left">
          <h3 className="form-title">Send Us a Message</h3>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <div className="error-text">{errors.firstName}</div>}
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <div className="error-text">{errors.lastName}</div>}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                rows={6}
                id="message"
                name="message"
                placeholder="Leave us message"
                value={form.message}
                onChange={handleChange}
                required
              />
              {errors.message && <div className="error-text">{errors.message}</div>}
            </div>
            <div className="checkbox-row">
              <input
                type="checkbox"
                id="agreeToPrivacy"
                name="agreeToPrivacy"
                checked={form.agreeToPrivacy}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToPrivacy">
                I agree to our friendly <a href="#" className="privacy-link">privacy policy</a>
              </label>
              {errors.agreeToPrivacy && <div className="error-text">{errors.agreeToPrivacy}</div>}
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={submitted}
            >
              {submitted ? "Message Sent!" : "Send Message"}
              {submitted && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 5 }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </button>
            {submitted && (
              <div className="success-text">
                Thank you for reaching out! We will get back to you shortly.
              </div>
            )}
          </form>
        </div>
        {/* Right Side - Contact Info */}
        <div className="container-right">
          <div className="contact-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
              alt="Boy"
              className="contact-img"
            />
          </div>
          <div className="contact-details mobile-optimized-details">
            <h3>Our Details</h3>
            <div className="details-list">
              <div className="detail-card">
                <div className="detail-icon-row">
                  <span className="detail-icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="detail-icon"
                      style={{ color: theme.primary }}
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div className="detail-texts">
                    <span className="detail-label">Email Us:</span>
                    <span className="detail-value">techteam@kawruh.com</span>
                  </div>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon-row">
                  <span className="detail-icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="detail-icon"
                      style={{ color: theme.primary }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-2.94 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.57 9.91 5.06 14.39 10.9 14.9 1.43.23 2.5 1.48 2.5 2.92z"></path>
                    </svg>
                  </span>
                  <div className="detail-texts">
                    <span className="detail-label">Call Us:</span>
                    <span className="detail-value">(0252) 8324 9231</span>
                  </div>
                </div>
              </div>
            </div>
            <style>{`
              .mobile-optimized-details {
                width: 100%;
                box-sizing: border-box;
                padding: 0 0;
                margin-top: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .details-list {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: center;
              }
              .detail-card {
                background: ${theme.cardBackground};
                border-radius: 12px;
                padding: 12px 14px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                width: 100%;
                max-width: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 60px;
                transition: min-height 0.2s;
              }
              .detail-icon-row {
                display: flex;
                align-items: center;
                width: 100%;
                gap: 10px;
              }
              .detail-icon-wrap {
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 28px;
                min-height: 28px;
                background: ${theme.lightBlue};
                border-radius: 50%;
                padding: 4px;
              }
              .detail-icon {
                display: block;
                width: 20px;
                height: 20px;
              }
              .detail-texts {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
              }
              .detail-label {
                font-size: 14px;
                font-weight: 600;
                color: ${theme.dark};
                margin-bottom: 2px;
                line-height: 1.1;
              }
              .detail-value {
                font-size: 13px;
                color: ${theme.text};
                word-break: break-all;
                line-height: 1.2;
              }
              @media (max-width: 600px) {
                .mobile-optimized-details {
                  padding: 0 0 !important;
                  margin-top: 10px !important;
                  align-items: stretch;
                }
                .details-list {
                  gap: 8px !important;
                  align-items: stretch;
                }
                .detail-card {
                  padding: 12px 8px !important;
                  border-radius: 10px !important;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
                  max-width: 100% !important;
                  min-width: 0 !important;
                  min-height: 90px !important; /* Increased height for mobile */
                }
                .detail-icon-row {
                  gap: 8px !important;
                }
                .detail-icon-wrap {
                  min-width: 24px !important;
                  min-height: 24px !important;
                  padding: 2px !important;
                }
                .detail-icon {
                  width: 16px !important;
                  height: 16px !important;
                }
                .detail-label {
                  font-size: 12px !important;
                }
                .detail-value {
                  font-size: 11px !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .contact-page-container {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f6f9ff 0%, #ecebff 35%, #f7f9ff 100%);
          padding: 40px 20px; /* Reverted to original padding */
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-header {
          width: 100%;
          max-width: 1200px;
          margin: 20px auto 10px auto;
          position: relative;
        }
        .contact-header-inner {
          display: flex;
          gap: 16px;
          align-items: center;
          background: rgba(255,255,255,0.8);
          backdrop-filter: saturate(160%) blur(6px);
          border: 1px solid ${theme.border};
          border-radius: 16px;
          padding: 16px 18px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }
        .contact-logo {
          width: 64px;
          height: 64px;
          object-fit: contain;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.08));
        }
        .contact-heading-texts {
          display: flex;
          flex-direction: column;
        }
        .contact-title {
          color: ${theme.dark};
          text-align: center;
          font-size: clamp(28px, 6vw, 44px);
          font-weight: 600;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          text-align: left;
          margin: 0 0 2px 0;
        }
        .contact-subtitle {
          color: ${theme.dark};
          text-align: center;
          font-size: clamp(22px, 5vw, 32px);
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .contact-desc {
          color: ${theme.lightText};
          text-align: left;
          font-size: clamp(15px, 3vw, 18px);
          margin: 0;
          max-width: 700px;
          line-height: 1.6;
        }
        .contact-box {
          display: flex;
          gap: 20px;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
          margin: 0 auto;
          background: none;
          box-shadow: none;
          border-radius: 0;
        }
        .container-left {
          flex: 2;
          padding: 40px;
          min-width: 280px;
          box-sizing: border-box;
          background: linear-gradient(180deg, #ffffff 0%, #fbfbff 100%);
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(31, 41, 55, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: none; /* Remove border */
        }
        .form-title {
          font-size: 24px;
          color: ${theme.dark};
          margin-bottom: 24px;
          font-weight: 600;
        }
        .input-row {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .input-group {
          flex: 1;
          min-width: 120px;
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
        }
        .input-group label {
          margin-bottom: 6px;
          font-size: 15px;
          font-weight: 500;
          color: ${theme.text};
        }
        .input-group input,
        .input-group textarea {
          width: 100%;
          border: 1px solid ${theme.border};
          border-radius: 8px;
          padding: 10px 12px;
          font-family: 'Poppins', sans-serif;
          color: ${theme.dark};
          outline: none;
          font-size: 15px;
          background-color: ${theme.cardBackground};
          transition: border-color 0.3s ease;
        }
        .input-group input:focus,
        .input-group textarea:focus {
          border-color: ${theme.primary};
        }
        .input-group textarea {
          min-height: 100px;
          resize: vertical;
        }
        .error-text {
          color: ${theme.error};
          font-size: 12px;
          margin-top: 3px;
        }
        .checkbox-row {
          display: flex;
          align-items: center;
          margin-bottom: 18px;
          gap: 8px;
          flex-wrap: wrap;
        }
        .checkbox-row input[type="checkbox"] {
          accent-color: ${theme.primary};
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        .checkbox-row label {
          font-size: 14px;
          color: ${theme.text};
          cursor: pointer;
        }
        .privacy-link {
          color: ${theme.primary};
          text-decoration: none;
        }
        .submit-btn {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 16px;
          background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
          border: none;
          outline: none;
          color: ${theme.white};
          padding: 12px 30px;
          border-radius: 50px;
          margin-top: 20px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
          box-shadow: 0 10px 24px rgba(128, 90, 213, 0.28);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(128, 90, 213, 0.34);
        }
        .success-text {
          color: ${theme.primary};
          margin-top: 15px;
          font-weight: 500;
          font-size: 15px;
        }
        .container-right {
          flex: 1;
          padding: 32px;
          background: ${theme.cardBackground}; /* Changed background */
          color: ${theme.dark};
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Added shadow */
          min-width: 220px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          position: relative;
        }
        .contact-img-wrap {
          width: 100%;
          position: relative;
          padding-bottom: 100%; /* Makes the container square */
          display: block;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 0;
        }
        .contact-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0; /* Handled by parent */
          box-shadow: none; /* Handled by parent */
        }
        .contact-details {
          margin-top: 30px;
          width: 100%;
          padding: 0 10px;
        }
        .contact-details h3 {
          font-size: 20px;
          color: ${theme.dark};
          margin-bottom: 16px;
          font-weight: 600;
          text-align: left;
        }
        .detail-card {
          background: ${theme.cardBackground};
          border-radius: 10px;
          padding: 14px 14px 14px 10px;
          margin-bottom: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1); /* Increased shadow */
        }
        .detail-icon-row {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .detail-icon-row h4 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
          text-align: left;
          color: ${theme.dark};
        }
        .detail-icon-row p {
          font-size: 14px;
          opacity: 0.9;
          text-align: left;
          color: ${theme.lightText};
          margin: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 900px) {
          .contact-box {
            flex-direction: column;
            max-width: 100%;
          }
          .contact-header-inner {
            padding: 12px 14px;
          }
          .contact-logo { width: 56px; height: 56px; }
          .container-left, .container-right {
            padding: 24px !important;
            border-radius: 15px !important;
            min-width: unset;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); /* Adjusted shadow for smaller screens */
          }
          .container-right {
            border-radius: 15px !important; /* Adjusted border-radius */
            margin-top: 20px; /* Increased margin-top */
            max-width: 100%;
            background: ${theme.cardBackground};
            padding: 24px !important; /* Adjusted padding for smaller screens */
          }
          .contact-page-container {
            padding: 24px 8px; /* Reverted to original padding */
          }
          .contact-img-wrap {
            max-width: 300px; /* Limit max width on tablet */
            width: 100%; /* Make it responsive */
            margin: 0 auto 10px auto; /* Center image and add margin */
            padding-bottom: 75%; /* Maintain aspect ratio (e.g., 4:3) */
          }
          .contact-img {
            position: absolute; /* Revert to absolute position */
            width: 100%; /* Make image fill its container */
            height: 100%; /* Make image fill its container */
            object-fit: contain; /* Changed from cover to contain */
            top: 0;
            left: 0;
          }
          .contact-details {
            margin-top: 10px;
          }
          .container-left {
            border-right: none; /* Remove border on smaller screens */
            border-bottom: 1px solid ${theme.border}; /* Add bottom border instead */
          }
        }
        @media (max-width: 600px) {
          .contact-page-container {
            padding: 20px 2vw; /* Reverted to original padding */
          }
          .contact-header-inner { gap: 12px; }
          .contact-logo { width: 48px; height: 48px; }
          .contact-title {
            font-size: 22px !important;
          }
          .contact-subtitle {
            font-size: 16px !important;
          }
          .contact-desc {
            font-size: 13px !important;
            margin-bottom: 16px;
          }
          .contact-box {
            box-shadow: none;
            border: none;
            background: none;
            padding: 0;
            gap: 15px; /* Adjusted gap */
          }
          .container-left {
            background: ${theme.cardBackground};
            border-radius: 15px !important;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            padding: 16px !important;
          }
          .container-right {
            margin-top: 0;
            border-radius: 15px !important; /* Adjusted border-radius */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            background: ${theme.cardBackground};
            padding: 20px !important; /* Adjusted padding for better containment */
          }


          
          .form-title, .contact-details h3 {
            font-size: 14px !important; /* Reduced font size for mobile */
          }
          .input-row {
            flex-direction: column;
            gap: 0;
          }
          .input-group label {
            font-size: 13px !important;
          }
          .input-group input,
          .input-group textarea {
            font-size: 13px !important;
            padding: 8px 8px !important;
          }
          .checkbox-row label {
            font-size: 12px !important;
          }
          .submit-btn {
            font-size: 14px !important;
            padding: 10px 18px !important;
          }
          .contact-img-wrap {
            width: 100%; /* Make it responsive */
            padding-bottom: 75%; /* Maintain aspect ratio (e.g., 4:3) */
          }
          .contact-img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* Changed from cover to contain */
          }
          .contact-details {
            padding: 0 5px; /* Adjusted padding for contact details */
            margin-top: 15px; /* Adjusted margin-top for better spacing */
          }
          .detail-card {
            padding: 12px; /* Adjusted padding for better fit */
            margin-bottom: 10px; /* Adjusted margin for better spacing */
            min-height: 80px; /* Added min-height to prevent content overflow */
          }
          .detail-icon-row {
            flex-wrap: wrap; /* Added to allow items to wrap */
            justify-content: center; /* Center items when wrapped */
            text-align: center; /* Center text when wrapped */
          }
          .detail-icon-row h4,
          .detail-icon-row p {
            text-align: center; /* Ensure text is centered when wrapped */
            width: 100%; /* Allow text to take full width */
          }
          .detail-icon-row h4 {
            font-size: 12px !important; /* Adjusted for even smaller screens */
          }
          .detail-icon-row p {
            font-size: 9px !important; /* Further reduced font size for mobile */
          }
        }
      `}</style>
    </div>
  );
}