import React from "react";
import { FaRocket, FaUsers, FaCog, FaHeart, FaGlobe } from "react-icons/fa";

const timelineData = [
  {
    icon: <FaRocket aria-hidden="true" />,
    title: "Talk To Us",
    description:
      "Reach out to our team to discuss your vision, requirements, and expectations. We listen carefully to understand your needs and provide expert guidance from the very first conversation.",
  },
  {
    icon: <FaUsers aria-hidden="true" />,
    title: "Design",
    description:
      "Our creative team collaborates with you to develop a tailored design concept. We focus on aesthetics, functionality, and your unique preferences to ensure the design aligns perfectly with your goals.",
  },
  {
    icon: <FaCog aria-hidden="true" />,
    title: "Drawings",
    description:
      "We prepare detailed drawings and plans, turning the design concept into actionable blueprints. These drawings help visualize the project and serve as a roadmap for the next steps.",
  },
  {
    icon: <FaHeart aria-hidden="true" />,
    title: "Execution",
    description:
      "Our skilled professionals bring the plans to life with precision and care. We manage every aspect of the execution phase, ensuring quality workmanship and timely progress.",
  },
  {
    icon: <FaGlobe aria-hidden="true" />,
    title: "Hand Over",
    description:
      "After a thorough quality check, we hand over the completed project to you. We ensure everything meets your expectations and provide ongoing support for a seamless transition.",
  },
];

export default function Hiw() {
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
          <div className="l-hero__headings-baseline">
            How It Works ?
          </div>
        </div>
      </header>
      <div
        className="main-timeline"
        style={{
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {timelineData.map((item, idx) => (
          <div className="timeline" key={idx}>
            <a href="#" className="timeline-content">
              <span className="timeline-year">{`Step ${idx + 1}`}</span>
              <div className="timeline-icon">{item.icon}</div>
              <div className="content">
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </a>
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

        .main-timeline {
          font-family: var(--font-principal);
          padding: 20px 0;
          position: relative;
          margin: 0 auto;
          display: block;
          box-sizing: border-box;
        }
        .main-timeline::before,
        .main-timeline::after {
          content: "";
          height: 40px;
          width: 40px;
          background-color: #fff;
          border-radius: 50%;
          border: 10px solid #111;
          transform: translatex(-50%);
          position: absolute;
          left: 50%;
          top: -15px;
          z-index: 2;
        }
        .main-timeline::after {
          top: auto;
          bottom: 15px;
        }
        .main-timeline .timeline {
          padding: 35px 0;
          margin-top: -30px;
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .main-timeline .timeline::before,
        .main-timeline .timeline::after {
          content: "";
          height: 100%;
          width: 50%;
          border-radius: 110px 0 0 110px;
          border: 15px solid #111;
          border-right: none;
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
        }
        .main-timeline .timeline::after {
          height: calc(100% - 30px);
          width: calc(50% - 12px);
          border-color: #111;
          left: 12px;
          top: 15px;
        }
        .main-timeline .timeline-content {
          display: flex;
          align-items: center;
          display: inline-block;
        }
        .main-timeline .timeline-content:hover {
          text-decoration: none;
        }
        .main-timeline .timeline-year {
          color: #111;
          font-size: 50px;
          font-weight: 600;
          display: inline-block;
          transform: translatey(-50%);
          position: absolute;
          top: 50%;
          left: 10%;
          font-family: var(--font-custom);
        }
        .main-timeline .timeline-icon {
          color: #111;
          font-size: 70px;
          display: inline-block;
          transform: translateY(-50%);
          position: absolute;
          left: 34%;
          top: 50%;
        }
        .main-timeline .content {
          color: #111;
          width: 50%;
          padding: 20px;
          display: inline-block;
          float: right;
        }
        .main-timeline .title {
          color: #111;
          font-size: 20px;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0 0 5px 0;
          font-family: var(--font-principal);
        }
        .main-timeline .description {
          font-size: 16px;
          margin: 0;
          font-family: var(--font-principal);
        }
        .main-timeline .timeline:nth-child(even)::before {
          left: auto;
          right: 0;
          border-radius: 0 110px 110px 0;
          border: 15px solid #111;
          border-left: none;
        }
        .main-timeline .timeline:nth-child(even)::after {
          left: auto;
          right: 12px;
          border-radius: 0 100px 100px 0;
          border: 15px solid #111;
          border-left: none;
        }
        .main-timeline .timeline:nth-child(even) .content {
          float: left;
        }
        .main-timeline .timeline:nth-child(even) .timeline-year {
          left: auto;
          right: 10%;
        }
        .main-timeline .timeline:nth-child(even) .timeline-icon {
          left: auto;
          right: 32%;
        }

        /* Responsive: Add left/right space and/or scale down for mobile */
        @media screen and (max-width: 900px) {
          .main-timeline {
            max-width: 98vw;
            padding-left: 2vw;
            padding-right: 2vw;
          }
        }
        @media screen and (max-width: 767px) {
          .main-timeline {
            max-width: 100vw;
            padding-left: 10px;
            padding-right: 10px;
            transform: scale(0.97);
            transform-origin: top center;
          }
          .main-timeline .timeline {
            margin-top: -19px;
          }
          .main-timeline .timeline:before {
            border-radius: 50px 0 0 50px;
            border-width: 10px;
          }
          .main-timeline .timeline:after {
            height: calc(100% - 18px);
            width: calc(50% - 9px);
            border-radius: 43px 0 0 43px;
            border-width:10px;
            top: 9px;
            left: 9px;
          }
          .main-timeline .timeline:nth-child(even):before {
            border-radius: 0 50px 50px 0;
            border-width: 10px;
          }
          .main-timeline .timeline:nth-child(even):after {
            height: calc(100% - 18px);
            width: calc(50% - 9px);
            border-radius: 0 43px 43px 0;
            border-width: 10px;
            top: 9px;
            right: 9px;
          }
          .main-timeline .timeline-icon{ font-size: 60px; }
          .main-timeline .timeline-year{ font-size: 40px; }
        }
        @media screen and (max-width: 479px) {
          .main-timeline {
            max-width: 100vw;
            padding-left: 8px;
            padding-right: 8px;
            transform: scale(0.93);
            transform-origin: top center;
          }
          .main-timeline .timeline-icon{
            font-size: 44px;
            transform:translateY(0);
            top: 25%;
            left: 10%;
          }
          .main-timeline .timeline-year{
            font-size: 22px;
            transform:translateY(0);
            top: 65%;
            left: 9%;
          }
          .main-timeline .content{
            width: 68%;
            padding: 8px;
          }
          .main-timeline .title{ font-size: 16px; }
          .main-timeline .timeline:nth-child(even) .timeline-icon{
            right: 10%;
          }
          .main-timeline .timeline:nth-child(even) .timeline-year{
            right: 9%;
          }
        }
      `}</style>
    </div>
  );
}