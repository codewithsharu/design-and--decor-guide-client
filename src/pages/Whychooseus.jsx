import React from "react";

const statsData = [
  {
    value: "30+",
    label: "Happy Clients",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    value: "15+",
    label: "Your Growth Partner",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    value: "35+",
    label: "Happy Clients",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  },
  {
    value: "18+",
    label: "Your Growth Partner",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
];

const beige = "#F5F5DC";
const gold = "#FFD700";
const darkBg = "#121212";
const cardOverlayBg = "rgba(30, 24, 10, 0.45)";

const WhyChooseUs = () => {
  return (
    <section
      style={{
        background: darkBg,
        padding: "60px 0",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1 style={{ fontSize: 38, fontWeight: 700, margin: 0, color: gold }}>
        Why Choose Us ?
      </h1>
      <p
        style={{
          color: "#E6D8B8",
          fontSize: 17,
          margin: "18px auto 0 auto",
          maxWidth: 600,
          fontWeight: 400,
          lineHeight: 1.6,
        }}
      >
        Our mission is to drive progress and enhance the lives of our customers
        by delivering superior products and services that exceed.
      </p>

      {/* Cards */}
      <div className="whychooseus-grid">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            style={{
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              width: "100%",
              height: 340,
              cursor: "pointer",
              transition: "transform 0.3s ease",
              background: "#2B2C2E",
              border: `2px solid ${beige}`,
              maxWidth: 250,
              margin: "0 auto",
            }}
            className="card"
          >
            {/* Background Image */}
            <img
              src={stat.img}
              alt={stat.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.92)",
              }}
            />

            {/* Blur Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backdropFilter: "blur(2px)",
                background: cardOverlayBg,
              }}
            >
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#fff", // White text for value
                  }}
                >
                  {stat.value}
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: "#fff", // White text for label
                  }}
                >
                  {stat.label}
                </p>
              </div>

              {/* Icon */}
              <div
                style={{
                  background: gold,
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: darkBg,
                  fontWeight: "bold",
                  fontSize: 20,
                  boxShadow: "0 2px 8px rgba(255, 215, 0, 0.18)",
                  border: `2px solid ${beige}`,
                }}
              >
                <span role="img" aria-label="crown">
                  ♛
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover effect and responsive grid */}
      <style>
        {`
          .card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 8px 32px 0 rgba(255, 215, 0, 0.18);
            border-color: ${gold};
          }
          .whychooseus-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 40px;
            justify-content: center;
            align-items: stretch;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }
          @media (min-width: 700px) {
            .whychooseus-grid {
              grid-template-columns: repeat(4, 1fr);
              max-width: 1100px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseUs;