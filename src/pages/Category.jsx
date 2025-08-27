import React from "react";
import { category } from "../Data/data";

// Use the same smooth font stack as NewArrivals.jsx
const fontStack = "'Poppins', 'Work Sans', 'Inter', sans-serif";

// Elegant, modern gallery icon with subtle highlight
const galleryIcon = (
  <span
    className="gallery-icon-elegant"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #fffbe6 0%, #ffda79 100%)",
      boxShadow: "0 2px 8px 0 rgba(255, 218, 121, 0.13)",
      position: "relative",
      zIndex: 2,
      transition: "box-shadow 0.3s, transform 0.3s",
    }}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{ display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gallery/Mosaic icon */}
      <rect x="2.5" y="2.5" width="5" height="5" rx="1.2" fill="#fff" stroke="#23272f" strokeWidth="1.3"/>
      <rect x="10.5" y="2.5" width="5" height="5" rx="1.2" fill="#fff" stroke="#23272f" strokeWidth="1.3"/>
      <rect x="2.5" y="10.5" width="5" height="5" rx="1.2" fill="#fff" stroke="#23272f" strokeWidth="1.3"/>
      <rect x="10.5" y="10.5" width="5" height="5" rx="1.2" fill="#fff" stroke="#23272f" strokeWidth="1.3"/>
      <ellipse cx="9" cy="9" rx="8" ry="8" stroke="#ffda79" strokeWidth="1.1" opacity="0.5" />
    </svg>
    {/* Subtle highlight */}
    <span
      style={{
        position: "absolute",
        top: 4,
        left: 8,
        width: 16,
        height: 8,
        background: "linear-gradient(90deg, #fffbe6 0%, rgba(255,255,255,0.0) 100%)",
        borderRadius: "50%",
        opacity: 0.7,
        filter: "blur(1px)",
        pointerEvents: "none",
      }}
    />
  </span>
);

const flattenCategories = (categories) => {
  const result = [];
  categories.forEach((cat) => {
    if (cat.img) {
      result.push({
        id: cat.id,
        img: cat.img,
        name: cat.name,
        url: cat.url,
      });
    }
    if (cat.imgs && Array.isArray(cat.imgs)) {
      cat.imgs.forEach((sub) => {
        result.push({
          id: sub.id,
          img: sub.img,
          name: sub.name,
          url: sub.url,
        });
      });
    }
  });
  return result;
};

const flatCategory = flattenCategories(category);

const Category = () => {
  return (
    <div className="w-full md:w-10/12 px-2 py-8 m-auto" style={{ fontFamily: fontStack }}>
      <header className="l-hero">
        <div className="l-hero__headings">
          <div className="l-hero__headings-baseline">
            Our Categories
          </div>
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

          @media (max-width: 600px) {
            .l-hero__headings-title {
              font-size: 36px;
            }
          }
        `}</style>
      </header>
      {/* 2 columns on mobile, 4 on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {flatCategory.map((cat, key) => (
          <div
            key={cat.id || key}
            className="flex flex-col items-center w-full"
            style={{ fontFamily: fontStack }}
          >
            <div
              className="relative w-full group category-modern-card bg-white shadow-xl overflow-hidden rounded-3xl flex flex-col"
              style={{
                aspectRatio: "1 / 1",
                maxWidth: 370,
                width: "100%",
                margin: "auto",
                borderRadius: 28,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13), 0 2px 12px 0 rgba(34, 34, 34, 0.08)",
                transition: "box-shadow 0.3s",
                background: "#fff",
                padding: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", flex: 1 }}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                  style={{
                    borderRadius: 28,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.92) saturate(1.08) contrast(1.04)",
                    transition: "filter 0.3s, transform 0.7s",
                    display: "block",
                    aspectRatio: "1 / 1",
                  }}
                />
                {/* Centered glass "Explore" button, floating over image */}
                <div
                  className="category-explore-btn-container"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: 32,
                    transform: "translateX(-50%)",
                    zIndex: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {cat.url ? (
                    <a
                      href={cat.url}
                      className="category-explore-btn pulse"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 32px",
                        height: 54,
                        borderRadius: 32,
                        background: "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,218,121,0.18) 100%)",
                        boxShadow: "0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 22,
                        fontFamily: fontStack,
                        textDecoration: "none",
                        border: "1.5px solid rgba(255,218,121,0.32)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        transition: "background 0.2s, box-shadow 0.2s, color 0.2s, border 0.2s",
                        outline: "none",
                        cursor: "pointer",
                        gap: 10,
                        letterSpacing: 0.01,
                        margin: "0 auto",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Black fade overlay for button text visibility */}
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.32) 100%)",
                          zIndex: 1,
                          pointerEvents: "none",
                        }}
                        aria-hidden="true"
                      />
                      <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center" }}>
                        {galleryIcon}
                        <span className="category-explore-btn-text" style={{
                          fontFamily: fontStack,
                          fontWeight: 500,
                          fontSize: 20,
                          letterSpacing: 0.01,
                          color: "#fff",
                          textShadow: "0 2px 12px rgba(0,0,0,0.22), 0 1px 8px rgba(0,0,0,0.18)"
                        }}>Explore</span>
                      </span>
                    </a>
                  ) : (
                    <button
                      className="category-explore-btn pulse"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 32px",
                        height: 54,
                        borderRadius: 32,
                        background: "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,218,121,0.18) 100%)",
                        boxShadow: "0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 22,
                        fontFamily: fontStack,
                        textDecoration: "none",
                        border: "1.5px solid rgba(255,218,121,0.32)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        transition: "background 0.2s, box-shadow 0.2s, color 0.2s, border 0.2s",
                        outline: "none",
                        cursor: "not-allowed",
                        gap: 10,
                        letterSpacing: 0.01,
                        margin: "0 auto",
                        position: "relative",
                        overflow: "hidden",
                        opacity: 0.7,
                      }}
                      disabled
                    >
                      {/* Black fade overlay for button text visibility */}
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.32) 100%)",
                          zIndex: 1,
                          pointerEvents: "none",
                        }}
                        aria-hidden="true"
                      />
                      <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center" }}>
                        {galleryIcon}
                        <span className="category-explore-btn-text" style={{
                          fontFamily: fontStack,
                          fontWeight: 500,
                          fontSize: 20,
                          letterSpacing: 0.01,
                          color: "#fff",
                          textShadow: "0 2px 12px rgba(0,0,0,0.22), 0 1px 8px rgba(0,0,0,0.18)"
                        }}>Explore</span>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* Category name below the card, always visible */}
            <div className="category-name-below mt-4 text-center font-semibold text-base"
              style={{
                fontFamily: fontStack,
                color: "#181818",
                letterSpacing: "0.01em",
                lineHeight: 1.2,
                wordBreak: "break-word",
                fontSize: 18,
                fontWeight: 500,
                marginTop: 18,
              }}>
              {cat.name}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap');
        .group:hover img {
          filter: brightness(1) saturate(1.12) contrast(1.06);
        }
        .group:active img {
          filter: brightness(0.96) saturate(1.05) contrast(1.01);
        }
        .category-modern-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        
        .category-explore-btn:hover, .category-explore-btn:focus {
          background: linear-gradient(90deg, rgba(255,218,121,0.32) 0%, rgba(255,171,231,0.22) 100%);
          color: #fff !important;
          box-shadow: 0 6px 24px 0 rgba(255,218,121,0.18);
          border: 1.5px solid #ffda79;
        }
        .category-explore-btn:active {
          background: linear-gradient(90deg, rgba(255,218,121,0.22) 0%, rgba(255,171,231,0.18) 100%);
          color: #fff !important;
        }
        /* Add black fade for button text visibility */
        .category-explore-btn {
          position: relative;
        }
        .category-explore-btn .category-explore-btn-text {
          position: relative;
          z-index: 2;
        }
        /* Pulse animation for the explore button - only box-shadow, no scale */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255,218,121,0.32), 0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08);
          }
          20% {
            box-shadow: 0 0 0 10px rgba(255,218,121,0.10), 0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08);
          }
          40% {
            box-shadow: 0 0 0 16px rgba(255,218,121,0.07), 0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08);
          }
          55% {
            box-shadow: 0 0 0 20px rgba(255,218,121,0.04), 0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(255,218,121,0.07), 0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08);
          }
          85% {
            box-shadow: 0 0 0 10px rgba(255,218,121,0.10), 0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255,218,121,0.32), 0 4px 24px 0 rgba(255,218,121,0.13), 0 2px 12px 0 rgba(34,34,34,0.08);
          }
        }
        .pulse {
          animation: pulse 2.2s cubic-bezier(0.45,0,0.55,1) infinite;
        }
        /* Responsive adjustments */
        @media (max-width: 639px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .category-modern-card {
            aspect-ratio: 1 / 1 !important;
            height: auto !important;
            min-height: 0 !important;
            max-width: 100% !important;
          }
          .category-explore-btn-container {
            left: 50% !important;
            bottom: 10px !important;
            transform: translateX(-50%) !important;
          }
          .category-explore-btn {
            height: 32px !important;
            padding: 0 10px !important;
            font-size: 12px !important;
            border-radius: 14px !important;
            color: #fff !important;
            min-width: 0 !important;
            box-shadow: 0 2px 8px 0 rgba(255,218,121,0.13), 0 1px 6px 0 rgba(34,34,34,0.08) !important;
          }
          .gallery-icon-elegant {
            width: 20px !important;
            height: 20px !important;
            margin-right: 6px !important;
          }
          .gallery-icon-elegant svg {
            width: 12px !important;
            height: 12px !important;
          }
          .category-explore-btn-text {
            font-size: 12px !important;
            color: #fff !important;
            text-shadow: 0 1px 6px rgba(0,0,0,0.18) !important;
          }
          .category-name-below {
            font-size: 14px !important;
            margin-top: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Category;
