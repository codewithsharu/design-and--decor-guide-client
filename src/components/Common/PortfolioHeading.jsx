// src/components/Common/PortfolioHeading.jsx
import React from 'react';

const PortfolioHeading = ({ headingText = "Interior Design Portfolio", description, buttonText }) => {
  return (
    <header className="l-hero">
      <div className="l-hero__headings">
        <div className="l-hero__headings-baseline">
          {headingText}
        </div>
        {description && <p className="portfolio-description">{description}</p>}
        {buttonText && <button className="portfolio-button">{buttonText}</button>}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

        :root {
          --font-principal: "Poppins", sans-serif;
          --font-custom: "Playfair Display", serif;
          --color-light: white;
          --color-dark: #323232;
          --color-1: #ffda79;
          --color-2: #ffabe7;
          --color-3: #d2bcf3;
          --color-4: #edf3d8;
          --container-width: min(90%, 769px);
        }

        .l-hero__headings {
          padding: 80px 32px;
          text-align: center; /* Center the new elements */
        }

        .l-hero__headings-baseline {
          width: max-content;
          margin: 0 auto 40px;
          padding: 12px 24px;
          border-radius: 9999999px;
          font-size: 18px;
          font-weight: 500;
          text-transform: uppercase;
          background-color: var(--color-1);
        }

        .portfolio-description {
          font-family: var(--font-principal);
          font-size: 16px;
          color: var(--color-dark);
          margin: 20px auto;
          max-width: 700px;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .l-hero__headings-title {
            font-size: 36px;
          }
        }
      `}</style>
    </header>
  );
};

export default PortfolioHeading;