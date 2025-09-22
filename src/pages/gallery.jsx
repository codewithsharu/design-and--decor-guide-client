import React, { useState } from "react";
import { useParams } from "react-router-dom";

import resd1 from '../assets/gallery/resd - 1.jpg';
import resd2 from '../assets/gallery/resd - 2.jpg';
import com1 from '../assets/gallery/com -1.jpg';
import com2 from '../assets/gallery/com -2.jpg';
import off1 from '../assets/gallery/off 1.jpg';

import off2 from '../assets/gallery/off 2.jpg';


import turnkey1 from '../assets/gallery/turnkey1.png';

import turnkey2 from '../assets/gallery/turnkey2.png';



import balcony1 from '../assets/gallery/Balcony_/1.webp';

import bedroom1 from '../assets/gallery/Bedroom/1.webp';
import bedroom2 from '../assets/gallery/Bedroom/2.webp';
import bedroom3 from '../assets/gallery/Bedroom/3.jpeg';
import bedroom4 from '../assets/gallery/Bedroom/4.jpeg';

import kitchen1 from '../assets/gallery/Kitchen_/1.jpeg';
import kitchen2 from '../assets/gallery/Kitchen_/2.jpeg';
import kitchen3 from '../assets/gallery/Kitchen_/3.jpeg';

import livingroom1 from '../assets/gallery/Living room/1.webp';
import livingroom2 from '../assets/gallery/Living room/2.jpeg';
import livingroom3 from '../assets/gallery/Living room/3.jpeg';
import livingroom4 from '../assets/gallery/Living room/4.jpeg';
import livingroom5 from '../assets/gallery/Living room/5.jpeg';
import livingroom6 from '../assets/gallery/Living room/6.jpeg';
import livingroom7 from '../assets/gallery/Living room/7.jpeg';
import livingroom8 from '../assets/gallery/Living room/8.jpeg';

import poojaset1 from '../assets/gallery/Pooja set/1.webp';
import poojaset2 from '../assets/gallery/Pooja set/photos-11738945-1727580563638-7338.jpeg';

import washbasin1 from '../assets/gallery/Washbasin/photos-11738945-1727580563108-2980.jpeg';

import villaGuestHouse from '../assets/gallery/villa & guest house.jpg';

// Gallery data by id (using urls from @file_context_0)
const galleries = {
  "1": {
    title: "Resedential",
    images: [
      resd1,
      resd2,
        ],
  },
  "2": {
    title: "Commercial",
    images: [
      com1,
      com2,
         ],
  },
  "3": {
    title: "Office",
    images: [
      off1,
      off2,
        ],
  },
  "4": {
    title: "Turnkey projects",
    images: [
      turnkey1, // Local image for Turnkey projects
      turnkey2,
        ],
  },
  "5": {
    title: "Balcony",
    images: [
      balcony1, // Replaced with local image
      // Using the same image for now
    ],
  },
  "6": {
    title: "Bedroom",
    images: [
      bedroom1, // Replaced with local image
      bedroom2,
      bedroom3,
      bedroom4,
    ],
  },
  "7": {
    title: "Kitchen",
    images: [
      kitchen1, // Replaced with local image
      kitchen2,
      kitchen3,
    ],
  },
  "8": {
    title: "Living room",
    images: [
      livingroom1, // Replaced with local image
      livingroom2,
      livingroom3,
      livingroom4,
      livingroom5,
      livingroom6,
      livingroom7,
      livingroom8,
    ],
  },
  "9": {
    title: "Pooja set",
    images: [
      poojaset1, // Replaced with local image
      poojaset2,
    ],
  },
  "10": {
    title: "Washbasin",
    images: [
      washbasin1, // Replaced with local image
      washbasin1, // Using the same image for now
      washbasin1, // Using the same image for now
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
          font-size: clamp(2rem, 5vw, 48px); /* Optimal and responsive font size */
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
            font-size: 28px; /* Adjusted for mobile */
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