import React from "react";
import { category } from "../Data/data";

// Use the same smooth font stack as NewArrivals.jsx
const fontStack = "'Poppins', 'Work Sans', 'Inter', sans-serif";

// Import the arrow image (place the image in your public or assets folder as needed)
const rightArrow = "https://upload.wikimedia.org/wikipedia/commons/c/ce/Font_Awesome_5_solid_arrow-circle-right.svg";

const flattenCategories = (categories) => {
  const result = [];
  categories.forEach((cat) => {
    if (cat.img) {
      result.push({
        id: cat.id,
        img: cat.img,
        name: cat.name,
      });
    }
    if (cat.imgs && Array.isArray(cat.imgs)) {
      cat.imgs.forEach((sub) => {
        result.push({
          id: sub.id,
          img: sub.img,
          name: sub.name,
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
      {/* 2 columns on mobile, 3 on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
                {/* Overlay for name+arrow on desktop, only arrow on mobile */}
                <div
                  className="absolute bottom-0 left-0 w-full px-6 flex flex-col justify-end"
                  style={{
                    height: "30%",
                    minHeight: 0,
                    maxHeight: "none",
                    background: "linear-gradient(0deg, rgba(24,24,24,0.32) 70%, rgba(24,24,24,0.08) 100%)",
                    borderBottomLeftRadius: 28,
                    borderBottomRightRadius: 28,
                    backdropFilter: "blur(1.5px)",
                    WebkitBackdropFilter: "blur(2px)",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    paddingBottom: 28,
                    paddingTop: 0,
                    zIndex: 2,
                  }}
                >
                  {/* Desktop: name + arrow, Mobile: only arrow icon in white circle */}
                  <button
                    className="mt-6 w-full py-3 rounded-full bg-white text-gray-900 font-semibold text-base shadow-md hover:bg-gray-100 transition flex items-center justify-between px-6 category-btn"
                    style={{
                      fontFamily: fontStack,
                      boxShadow: "0 2px 12px 0 rgba(34, 34, 34, 0.08)",
                      paddingLeft: 24,
                      paddingRight: 24,
                    }}
                  >
                    <span className="hidden md:inline">{cat.name}</span>
                    <span
                      className="category-arrow-icon"
                      style={{
                        marginLeft: 8,
                        display: "flex",
                        alignItems: "center",
                        height: 28,
                        width: 28,
                        minWidth: 28,
                        minHeight: 28,
                        justifyContent: "center",
                        background: "transparent",
                        padding: 0,
                      }}
                    >
                      <img
                        src={rightArrow}
                        alt="Right Arrow"
                        style={{
                          width: 28,
                          height: 28,
                          display: "block",
                          objectFit: "contain",
                          background: "transparent",
                          margin: 0,
                          padding: 0,
                        }}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Category name below the card on mobile only */}
            <div className="category-name-below mt-3 text-center font-semibold text-base md:hidden" style={{
              fontFamily: fontStack,
              color: "#181818",
              letterSpacing: "0.01em",
              lineHeight: 1.2,
              wordBreak: "break-word"
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
        .category-modern-card:hover {
          box-shadow: 0 12px 36px 0 rgba(31, 38, 135, 0.18), 0 4px 16px 0 rgba(34, 34, 34, 0.10);
          transform: translateY(-4px) scale(1.025);
        }
        /* Force 2 columns per row and perfect squares on mobile */
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
          /* Hide name in button, show only arrow on mobile */
          .category-btn span:first-child {
            display: none !important;
          }
          /* On mobile, make the button only the icon, but with white bg in a circle */
          .category-btn {
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            min-width: 0 !important;
            width: auto !important;
            height: auto !important;
            border-radius: 50% !important;
            justify-content: center !important;
          }
          .category-btn .category-arrow-icon {
            margin-left: 0 !important;
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            min-height: 44px !important;
            background: #fff !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 2px 8px 0 rgba(34,34,34,0.10) !important;
            padding: 0 !important;
          }
          .category-btn img {
            width: 28px !important;
            height: 28px !important;
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            border-radius: 50% !important;
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Category;
