import React, { useState } from "react";
import { useParams } from "react-router-dom";

const galleryItems = [
  {
    src: "https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dandy",
  },
  {
    src: "https://images.pexels.com/photos/4065066/pexels-photo-4065066.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    category: "modern",
  },
  {
    src: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "yuppie",
  },
  {
    src: "https://images.pexels.com/photos/2252597/pexels-photo-2252597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    category: "yuppie",
  },
];

const filterOptions = [
  { label: "all", value: "all" },
  { label: "dandy", value: "dandy" },
  { label: "yuppie", value: "yuppie" },
  { label: "modern", value: "modern" },
];

const categoryColors = {
  dandy: "tomato",
  yuppie: "teal",
  modern: "deeppink",
};

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const { id } = useParams();

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section className="c-gallery">
        <br />
      <h1 className="c-gallery__title">
        Gallery Filter – css only –{id ? ` (${id})` : ""}
      </h1>
      <div className="c-gallery__filter">
        {filterOptions.map((opt) => (
          <label
            className="c-gallery__filter-option"
            data-category={opt.value}
            key={opt.value}
          >
            <input
              type="radio"
              id={opt.value}
              name="myFilter"
              checked={filter === opt.value}
              onChange={() => setFilter(opt.value)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      <div className="c-gallery__items">
        {filteredItems.map((item, idx) => (
          <figure className="c-gallery__item" key={idx} style={{ display: "block" }}>
            <img
              src={item.src}
              className="c-gallery__item-image"
              alt={item.category}
            />
            <span
              className="c-gallery__item-category"
              data-category={item.category}
              style={{
                background: categoryColors[item.category],
              }}
            ></span>
          </figure>
        ))}
      </div>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

        :root {
          --color-primary: #ffda79;
          --color-yuppie: teal;
          --color-modern: deeppink;
          --color-dandy: tomato;
          --color-dark: #1f2937;
          --color-medium-light: #eeeeee;
          --color-light: #fff;
          --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          --font-base: Lato, sans-serif;
          --font-title: "Playfair Display", serif;
        }

        body {
          background-color: var(--color-medium-light);
        }

        .c-gallery {
          max-width: 1360px;
          margin: auto;
          display: grid;
          gap: 40px;
          padding: 40px 20px 80px;
          font-family: var(--font-base);
          color: var(--color-dark);
        }

        .c-gallery__title {
          font-size: 64px;
          font-family: var(--font-title);
          text-align: center;
        }

        .c-gallery__filter {
          display: flex;
          align-items: center;
          gap: 16px;
          width: max-content;
          height: 60px;
          margin: 0 auto;
          padding: 12px 16px;
          text-transform: uppercase;
          background-color: var(--color-light);
          box-shadow: var(--shadow);
          border-radius: 99px;
        }

        .c-gallery__filter-option {
          height: 100%;
          cursor: pointer;
        }

        .c-gallery__filter-option span {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 12px;
          height: 100%;
          border-radius: 99px;
        }

        .c-gallery__filter-option input[type="radio"] {
          display: none;
        }

        .c-gallery__filter-option input[type="radio"]:checked + span {
          background: var(--color-primary);
        }

        .c-gallery__items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .c-gallery__item {
          position: relative;
          width: 100%;
          height: 400px;
          box-shadow: var(--shadow);
          border-radius: 16px 42px;
          overflow: hidden;
          background: #fff;
        }

        .c-gallery__item-category {
          display: grid;
          place-items: center;
          position: absolute;
          top: 10px;
          right: 10px;
          width: 80px;
          height: 80px;
          border-radius: 160px;
          color: var(--color-light);
          text-transform: uppercase;
          background: var(--color-category, #888);
          z-index: 1;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .c-gallery__item-category::after {
          content: attr(data-category);
        }

        .c-gallery__item-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 900px) {
          .c-gallery__items {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .c-gallery__title {
            font-size: 32px;
          }
          .c-gallery__items {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .c-gallery__item {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}