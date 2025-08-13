import React from "react";
import { category } from "../Data/data";

// Use the same smooth font stack as NewArrivals.jsx
const fontStack = "'Poppins', 'Work Sans', 'Inter', sans-serif";

const golden = "#FFD700";
const darkBg = "#181818";
const cardBg = "rgba(255,255,255,0.92)";
const shadow =
  "0 4px 24px 0 rgba(31, 38, 135, 0.10), 0 1.5px 8px 0 rgba(34, 34, 34, 0.06)";

/**
 * WHY THE GAP?
 * 
 * The gap in the second row (as seen in the screenshot) is caused by the way the data is structured:
 * - One of the category items (id: 3) contains an `imgs` array with two sub-categories (Kids Room, Kitchen).
 * - The current code renders these two sub-categories as two stacked cards inside a single grid cell (one column).
 * - This makes that grid cell much taller than the others, causing the next row to "wrap" around it, leaving a visible gap.
 * 
 * HOW TO FIX:
 * - Flatten the data so each card (including sub-categories) is a separate grid item.
 * - This way, every card occupies its own cell, and the grid will be filled row by row, with no gaps.
 */

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
      
    <h2
      className="text-2xl md:text-3xl font-semibold mb-8 text-center"
      style={{ color: "#181818", fontWeight: 600, letterSpacing: "0.01em" }}
    >
      Our Categories
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {flatCategory.map((cat, key) => (
          <div
            className="flex flex-col"
            key={cat.id || key}
            style={{
              minWidth: 0,
              fontFamily: fontStack,
            }}
          >
            <div className="m-2">
              <div
                className="relative overflow-hidden rounded-xl mb-6 group category-card-square"
                style={{
                  background: cardBg,
                  boxShadow: shadow,
                  transition: "box-shadow 0.3s",
                  aspectRatio: "1 / 1",
                  borderRadius: 18,
                  fontFamily: fontStack,
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  style={{
                    filter:
                      "brightness(0.97) saturate(1.08) contrast(1.04)",
                    transition: "filter 0.3s, transform 0.7s",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 18,
                  }}
                />
                <div
                  className="absolute left-0 bottom-0 w-full flex items-center"
                  style={{
                    background:
                      "linear-gradient(90deg, #fffbe6 80%, #ffe066 100%)",
                    borderBottomLeftRadius: 18,
                    borderBottomRightRadius: 18,
                    boxShadow: "0 2px 8px rgba(34,34,34,0.04)",
                    padding: "0.75em 1.25em",
                  }}
                >
                  <span
                    className="text-lg md:text-xl font-semibold capitalize"
                    style={{
                      color: darkBg,
                      letterSpacing: "0.01em",
                      fontFamily: fontStack,
                    }}
                  >
                    {cat.name}
                  </span>
                </div>
                <div
                  className="absolute top-4 right-4"
                  style={{
                    background: golden,
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(255,215,0,0.10)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="8" fill="#fffbe6" />
                    <path
                      d="M12 7v5l3 3"
                      stroke={golden}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
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
        /* Ensure square aspect ratio for cards if aspect-ratio is not supported */
        .category-card-square {
          aspect-ratio: 1 / 1;
          width: 100%;
          min-width: 0;
        }
        @supports not (aspect-ratio: 1 / 1) {
          .category-card-square {
            position: relative;
            width: 100%;
          }
          .category-card-square::before {
            content: "";
            display: block;
            padding-top: 100%;
          }
          .category-card-square > *:not(style) {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Category;
