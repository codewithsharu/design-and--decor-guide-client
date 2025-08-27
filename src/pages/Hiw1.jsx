import React from "react";

// Beautiful SVG icons for each step
const icons = [
  // Talk To Us
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#ffda79"/>
      <path d="M12 24v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="15" cy="15" r="2" fill="#111"/>
      <circle cx="21" cy="15" r="2" fill="#111"/>
    </svg>
  ),
  // Design
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#ffabe7"/>
      <rect x="11" y="11" width="14" height="14" rx="3" stroke="#111" strokeWidth="2"/>
      <path d="M14 14l8 8" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  // Drawings
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#d2bcf3"/>
      <rect x="12" y="12" width="12" height="12" rx="2" stroke="#111" strokeWidth="2"/>
      <path d="M12 16h12" stroke="#111" strokeWidth="2"/>
      <path d="M16 12v12" stroke="#111" strokeWidth="2"/>
    </svg>
  ),
  // Execution
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#edf3d8"/>
      <path d="M13 23l5-10 5 10" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="18" cy="23" r="2" fill="#111"/>
    </svg>
  ),
  // Hand Over
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#ffda79"/>
      <path d="M12 19l4 4 8-8" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
];

const timelineData = [
  {
    title: "Talk To Us",
    description:
      "Contact us to share your ideas.\nWe listen and guide you from the start.",
  },
  {
    title: "Design",
    description:
      "We create a design just for you.\nYour style and needs come first.",
  },
  {
    title: "Drawings",
    description:
      "We turn designs into clear plans.\nSee your project before it begins.",
  },
  {
    title: "Execution",
    description:
      "Our team builds your project.\nWe focus on quality and progress.",
  },
  {
    title: "Hand Over",
    description:
      "We check everything carefully.\nYour finished project is ready for you.",
  },
];

export default function Hiw() {
  // No arrow, so no animation state needed

  return (
    <div
      className="hiw-outer"
      style={{
        fontFamily: "'Poppins', 'Playfair Display', Tahoma, sans-serif",
        padding: "40px 0",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#fff",
        color: "#111",
      }}
    >
      <header className="l-hero">
        <div className="l-hero__headings">
          <div
            className="l-hero__headings-baseline"
            style={{
              backgroundColor: "var(--color-1)",
              color: "#111",
            }}
          >
            How It Works ?
          </div>
        </div>
      </header>
      <div className="roadmap roadmap-with-arrow">
        {/* Steps */}
        {timelineData.map((item, idx) => (
          <div
            className={
              "point" +
              (idx === timelineData.length - 1 ? " point-last" : "")
            }
            key={idx}
          >
            <div className="point-index">
              <span className="point-icon">{icons[idx]}</span>
              <span className="point-number">{idx + 1}</span>
              {/* Pulse effect for all steps */}
              <span className="pulse"></span>
            </div>
            <div
              className="point-label"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#222",
                marginBottom: "4px",
                letterSpacing: "1px",
              }}
            >
              {item.title}
            </div>
            <div
              className="point-text"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#444",
                whiteSpace: "pre-line",
              }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

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

        body {
          background: #fff;
          color: #111;
        }

        .l-hero__headings {
          padding: 80px 32px 0 32px;
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
          font-family: var(--font-principal);
          letter-spacing: 1px;
        }

        .roadmap {
          padding: 30px 50px;
          position: relative;
        }

        /* Arrow container on the left of the roadmap */
        .roadmap-with-arrow {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        /* Remove arrow container and arrow styles */
        .roadmap-arrow-container,
        .roadmap-arrow {
          display: none !important;
        }

        .roadmap .point {
          display: flex;
          flex-direction: column;
          padding: 10px 50px;
          position: relative;
          min-height: 110px;
        }

        /* Use dotted lines instead of solid for roadmap connections */
        .roadmap .point:nth-child(odd) {
          align-items: flex-start;
          border-bottom: 2px dotted #111;
          border-left: 2px dotted #111;
        }

        .roadmap .point:nth-child(odd) .point-index {
          left: 0;
          transform: translate(-50%, -50%);
        }

        .roadmap .point:nth-child(even) {
          align-items: flex-end;
          border-bottom: 2px dotted #111;
          border-right: 2px dotted #111;
        }

        .roadmap .point:nth-child(even) .point-index {
          right: 0;
          transform: translate(50%, -50%);
        }

        .roadmap .point:last-child {
          border-bottom: none;
        }

        .roadmap .point .point-index {
          position: absolute;
          top: 50%;
          width: 48px;
          height: 48px;
          background: #fff;
          border: 2px solid #111;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
          font-weight: bold;
          z-index: 2;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
          overflow: visible;
        }
        .roadmap .point .point-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          margin-right: 0;
        }
        .roadmap .point .point-number {
          position: absolute;
          bottom: -8px;
          right: -8px;
          background: #fff;
          color: #111;
          border: 1.5px solid #ffda79;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.07);
        }

        /* Pulse effect for all steps */
        .roadmap .point .pulse {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 60px;
          height: 60px;
          background: rgba(255,218,121,0.4);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          animation: pulse-anim 1.2s infinite;
          pointer-events: none;
        }
        @keyframes pulse-anim {
          0% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1);
          }
          70% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(1.5);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }

        .roadmap .point .point-label {
          flex: 1 0 100%;
          width: 100%;
          font-size: 14px;
          margin-bottom: 5px;
        }

        @media (min-width: 641px) {
          .roadmap .point .point-label {
            flex: 1 0 50%;
            width: 50%;
          }
        }

        .roadmap .point .point-text {
          flex: 1 0 100%;
          width: 100%;
          font-size: 12px;
          color: #111;
        }

        @media (min-width: 641px) {
          .roadmap .point .point-text {
            flex: 1 0 50%;
            width: 50%;
          }
        }

        /* Highlight active step - keep for visual consistency */
        .roadmap .point.point-active .point-index {
          border-color: #ffda79;
          box-shadow: 0 0 0 4px rgba(255,218,121,0.18);
        }
      `}</style>
    </div>
  );
}
