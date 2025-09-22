import React, { useEffect, useRef } from "react";

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

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

const FullGallery = () => {
  const galleryRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const startY = useRef(0);
  const endY = useRef(0);
  const raf = useRef(null);
  const easing = 0.05;

  // Parallax effect for each card
  const parallax = (card) => {
    if (!card) return;
    const wrapper = card.querySelector(".card-image-wrapper");
    if (!wrapper) return;
    const diff = card.offsetHeight - wrapper.offsetHeight;
    const { top } = card.getBoundingClientRect();
    const progress = top / window.innerHeight;
    const yPos = diff * progress;
    wrapper.style.transform = `translateY(${yPos}px)`;
  };

  // Activate parallax for all cards
  const activateParallax = () => {
    cardRefs.current.forEach(parallax);
  };

  // Update scroll and parallax
  const updateScroll = () => {
    startY.current = lerp(startY.current, endY.current, easing);
    if (galleryRef.current && trackRef.current) {
      galleryRef.current.style.height = `${trackRef.current.clientHeight}px`;
      trackRef.current.style.transform = `translateY(-${startY.current}px)`;
    }
    activateParallax();
    raf.current = requestAnimationFrame(updateScroll);
    if (Math.abs(startY.current - window.scrollY) < 0.5) {
      cancelAnimationFrame(raf.current);
    }
  };

  // Start scroll animation
  const startScroll = () => {
    endY.current = window.scrollY;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(updateScroll);
  };

  // Init on scroll
  const init = () => {
    activateParallax();
    startScroll();
  };

  useEffect(() => {
    // On mount, set up listeners
    window.addEventListener("load", updateScroll, false);
    window.addEventListener("scroll", init, false);
    window.addEventListener("resize", updateScroll, false);

    // Initial activation
    setTimeout(() => {
      updateScroll();
    }, 0);

    return () => {
      window.removeEventListener("load", updateScroll, false);
      window.removeEventListener("scroll", init, false);
      window.removeEventListener("resize", updateScroll, false);
      cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="gallery" ref={galleryRef}>
        <div className="gallery-track" ref={trackRef}>
          {IMAGE_URLS.map((src, idx) => (
            <div
              className="card"
              key={idx}
              ref={el => (cardRefs.current[idx] = el)}
            >
              <div className="card-image-wrapper">
                <img src={src} alt={`Gallery ${idx + 1}`} />
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
        .gallery {
          width: 100vw;
          min-height: 100vh;
          background: #181818;
          position: relative;
        }
        .gallery-track {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.25rem;
          padding: 0.25rem;
          will-change: transform;
          z-index: 1;
        }
        .card {
          height: 400px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.12);
          background: #222;
        }
        .card-image-wrapper {
          height: 135%;
          will-change: transform;
          transition: box-shadow 0.2s;
        }
        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 800px) {
          .gallery-track {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 550px) {
          .gallery-track {
            grid-template-columns: repeat(1, 1fr);
          }
          .card {
            height: 300px;
          }
        }
      `}</style>
    </>
  );
};

export default FullGallery;
