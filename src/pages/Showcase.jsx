
import React from "react";

const portfolioImages = [
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800", // Modern living room
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800", // Kitchen
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800", // Bedroom
  "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=800", // Dining
  "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800", // Office
  "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=800", // Bathroom
  "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800", // Cozy corner
  "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800", // Minimalist
  "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800", // Scandinavian
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", // Loft
  "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800", // Rustic
  "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800", // Luxury
];

const Showcase = () => {
  return (
    <div>
      {/* Navigation */}

      {/* Hero Section */}
      <header className="l-hero">
        <div className="l-hero__headings">
          <div className="l-hero__headings-baseline">
            Interior Design Portfolio
          </div>
          <h1 className="l-hero__headings-title">
            Inspiring Spaces
          </h1>
        </div>
        <div className="l-hero__marquee">
          <div className="l-hero__marquee-track">
            {[0, 1].map((repeatIdx) => (
              <ul className="l-hero__marquee-items" key={repeatIdx}>
                {portfolioImages.map((src, idx) => (
                  <li className="l-hero__marquee-item" key={idx}>
                    <img src={src} alt={`portfolio-img-${idx}`} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </header>

      {/* Section */}

      {/* CSS in JS for demo purposes */}
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
          --card-count: 24;
          --grid-gap: 32px;
        }

        body {
          line-height: 1.2;
          font-family: var(--font-principal);
          color: var(--color-dark);
        }

        .l-hero__headings {
          padding: 80px 32px;
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
          animation: color-cycle 32s linear infinite;
        }
        .l-hero__headings-title {
          width: var(--container-width);
          margin: 0 auto 24px;
          font-family: var(--font-custom);
          font-size: 72px;
          text-align: center;
        }
        @media (max-width: 600px) {
          .l-hero__headings-title {
            font-size: 36px;
          }
        }
        .l-hero__headings-description {
          width: var(--container-width);
          margin: 0 auto 32px;
          text-align: center;
          line-height: 1.6;
          font-size: 21px;
          font-weight: 500;
        }
        .l-hero__headings-cta {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .l-hero__headings-link {
          color: white;
          width: max-content;
          padding: 24px;
          background-color: #000;
          text-decoration: none;
          border-radius: 9999999px;
          opacity: 1;
          transition: opacity 250ms ease;
          font-size: 18px;
        }
        .l-hero__headings-link:hover {
          opacity: .8;
        }

        .l-hero__marquee-track {
          display: flex;
          gap: var(--grid-gap);
          white-space: nowrap;
          overflow: hidden;
        }
        .l-hero__marquee-items {
          display: grid;
          grid-auto-columns: min-content;
          grid-auto-flow: column;
          gap: var(--grid-gap);
          animation: scroll 60s linear infinite;
        }
        .l-hero__marquee-items:hover {
          animation-play-state: paused;
        }
        .l-hero__marquee-item {
          position: relative;
          display: flex;
          height: 180px;
          width: 220px;
          border-radius: 24px;
          overflow: hidden;
          /* Remove all hover/active/focus effects */
          transition: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        .l-hero__marquee-item img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .l-section {
          max-width: 1024px;
          margin: 0 auto;
          padding: 80px 20px;
          line-height: 1.6;
          font-size: 18px;
        }

        /* Remove ALL hover effects from showcase cards and marquee items */
        .showcase-img-card:hover,
        .l-hero__marquee-item:hover,
        .l-hero__marquee-item:active,
        .l-hero__marquee-item:focus {
          transform: none !important;
          box-shadow: none !important;
          border-color: initial !important;
          filter: none !important;
          z-index: initial !important;
        }

        @keyframes scroll {
          0%{ transform: translateX(0); }
          100%{ transform: translateX(-100%); }
        }

        @keyframes color-cycle {
          0% { background-color: var(--color-1); }
          25% { background-color: var(--color-2); }
          50% { background-color: var(--color-3); }
          75% { background-color: var(--color-4); }
          100% { background-color: var(--color-1); }
        }
      `}</style>
    </div>
  );
};

export default Showcase;
