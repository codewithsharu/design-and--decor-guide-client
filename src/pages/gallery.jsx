import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Gallery data by id
const galleries = {
  "1": {
    title: "Nature Escapes",
    images: [
      "https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4065066/pexels-photo-4065066.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  "2": {
    title: "Urban Vibes",
    images: [
      "https://images.pexels.com/photos/2252597/pexels-photo-2252597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  "3": {
    title: "Modern Life",
    images: [
      "https://images.pexels.com/photos/4065066/pexels-photo-4065066.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2252597/pexels-photo-2252597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
  },
};

export default function Gallery() {
  const { id } = useParams();
  const gallery = galleries[id];

  return (
    <section className="c-gallery">
      <br />
      <h1 className="c-gallery__title">
        {gallery ? gallery.title : "Gallery"}
      </h1>
      <div className="c-gallery__items">
        {gallery && gallery.images.length > 0 ? (
          gallery.images.map((src, idx) => (
            <figure className="c-gallery__item" key={idx} style={{ display: "block" }}>
              <img
                src={src}
                className="c-gallery__item-image"
                alt={`Gallery image ${idx + 1}`}
              />
            </figure>
          ))
        ) : (
          <div style={{ gridColumn: "1/-1", textAlign: "center", fontSize: "1.5rem" }}>
            No images found for this gallery.
          </div>
        )}
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