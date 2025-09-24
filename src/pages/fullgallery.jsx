import React from "react";

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

const IMAGE_URLS = [
  livingroom1,
  livingroom2,
  livingroom3,
  livingroom4,
  livingroom5,
  livingroom6,
  livingroom7,
  livingroom8,
  poojaset1,
  poojaset2,
  washbasin1,
  resd1,
  resd2,
  com1,
  com2,
  off1,
  off2,
  turnkey1,
  turnkey2,
  balcony1,
  bedroom1,
  bedroom2,
  bedroom3,
  bedroom4,
  kitchen1,
  kitchen2,
  kitchen3,

];

const FullGallery = () => {

  return (
    <>
    <br /><br /><br />
      <main className="gallery">
        <h1
          className="gallery-title"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(2rem, 4vw, 2rem)",
          }}
        >
          Our Portfolio
        </h1>
        <div className="gallery-track">
          {IMAGE_URLS.map((src, idx) => (
            <div
              className="card"
              key={idx}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
              }}
            >
              <div className="card-image-wrapper">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: #ffffff;
        }
        .gallery {
          width: 100%;
          padding: 2rem;
        }
        .gallery-title {
          font-size: 2.5rem;
          color: #333;
          text-align: center;
          margin-bottom: 2rem;
          font-family: 'Arial', sans-serif; /* Example font */
        }
        .gallery-track {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .card {
          height: 300px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          border: 1px solid #eee; /* Subtle border */
        }
        .card:hover {
        
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
        }
        .card-image-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden; /* Ensure image zoom stays within bounds */
        }
        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease; /* Smooth zoom transition */
        }
        .card-image-wrapper img:hover {
          transform: scale(1.05); /* Subtle zoom on hover */
        }
      `}</style>
    </>
  );
};

export default FullGallery;
