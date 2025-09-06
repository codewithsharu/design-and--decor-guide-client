import React from "react";
import PortfolioHeading from "../components/Common/PortfolioHeading";
import roadmap from "../assets/roadmap.png";

export default function Hiw1() {
  return (
    <div>
      <PortfolioHeading
        headingText="How It Works ?"
        description="Expert interior design, tailored for you. From concept to completion."
      />
      <div
        className="hiw1-roadmap-container"
        style={{
          textAlign: "center",
          marginTop: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={roadmap}
          alt="Roadmap"
          className="hiw1-roadmap-img"
          style={{
            width: "70vw", // increased from 60vw
            maxWidth: "900px", // increased from 800px
            minWidth: "0",
            height: "auto",
            borderRadius: "0",
            margin: "0 auto",
            display: "block",
            boxShadow: "none",
            background: "none",
          }}
        />
      </div>
      <style>{`
        .hiw1-roadmap-container {
          width: 100%;
          max-width: 100%;
          margin-left: 0;
          margin-right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hiw1-roadmap-img {
          width: 70vw !important; /* increased from 60vw */
          max-width: 900px !important; /* increased from 800px */
          min-width: 0 !important;
          border-radius: 0 !important;
          margin: 0 auto !important;
          display: block !important;
        }
        @media (max-width: 900px) {
          .hiw1-roadmap-img {
            width: 80vw !important;
            max-width: 95vw !important;
          }
        }
        @media (max-width: 600px) {
          .hiw1-roadmap-container {
            width: 100%;
            max-width: 100%;
          }
          .hiw1-roadmap-img {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}