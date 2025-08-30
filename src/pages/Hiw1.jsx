import React from "react";
import PortfolioHeading from "../components/Common/PortfolioHeading";
import roadmap from "../assets/roadmap.png";

export default function Hiw1() {
  return (
    <div>
      <PortfolioHeading
        headingText="How It Works ?"
        description="Our list of services and skills spans the spectrum of interior design, bringing expertise in conceptualization, spatial planning, and execution, delivering tailored solutions and skilled craftsmanship."
      
      />
      <div
        className="container"
        style={{
          textAlign: "center",
          marginTop: "2em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={roadmap}
          alt="Roadmap"
          className="hiw1-roadmap-img"
          style={{
            width: "80%",
            maxWidth: "900px",
            minWidth: "240px",
            height: "auto",
            borderRadius: "12px",
            margin: "0 auto",
            display: "block",
            boxShadow: "none",
            background: "none",
          }}
        />
      </div>
      <style>{`
        @media (max-width: 600px) {
          .hiw1-roadmap-img {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
