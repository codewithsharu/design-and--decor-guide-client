// src/pages/Services.jsx
import React, { useState, useEffect } from 'react';

// Example images for each service (replace with your own or use Unsplash/other sources)
const serviceData = [
  {
    name: "Home & Villa",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Apartment",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Rooms",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Master Bedroom",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Guest Bedroom",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Kids Room",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Study Room",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Parents Room",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Bedroom",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Kitchen",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "U Shaped",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "L Shaped",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Parallel Kitchen",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Island Kitchen",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Straight Kitchen",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Modular Kitchen",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Living",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Living Room",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dining Room",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Foyer Area",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sliding Door",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Swing Door",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Walk In Wardrobe",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Pooja Room",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
];

const fontStack = "'Poppins', 'Work Sans', 'Inter', sans-serif";
const golden = "#FFD700";
const cardBg = "rgba(255,255,255,0.98)";
const shadow = "0 4px 24px 0 rgba(31, 38, 135, 0.10), 0 1.5px 8px 0 rgba(34, 34, 34, 0.06)";

// How many to show before "View More" on mobile
const MOBILE_INITIAL_COUNT = 10;

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only show a subset on mobile unless showAll is true
  const visibleServices = isMobile && !showAll
    ? serviceData.slice(0, MOBILE_INITIAL_COUNT)
    : serviceData;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .services-container {
          padding: 3rem 1rem;
          background: #fff;
          min-height: 100vh;
          font-family: ${fontStack};
        }
        .services-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2.5rem;
          color: #181818;
          letter-spacing: 0.01em;
          font-family: ${fontStack};
          text-shadow: 0 2px 8px rgba(255,215,0,0.08);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 700px;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
          }
        }
        .service-item {
          background: linear-gradient(120deg, #181818 80%, #232323 100%);
          border-radius: 18px;
          box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.10), 0 1.5px 8px 0 rgba(34, 34, 34, 0.08);
          border: 2px solid #f8f8f8;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 2.5rem;
          min-height: 110px;
          height: 110px;
          position: relative;
          transition: 
            border 0.2s,
            box-shadow 0.25s,
            transform 0.18s;
          overflow: hidden;
        }
        .service-item:hover {
          border: 2px solid ${golden};
          box-shadow: 0 8px 32px 0 rgba(255, 215, 0, 0.13), 0 2px 12px 0 rgba(34, 34, 34, 0.10);
          transform: translateY(-2px) scale(1.025);
        }
        .service-item:hover {
          border: 2px solid ${golden};
        }
        .service-img-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #fff;
          margin-right: 2.5rem;
          background: #181818;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }
        .service-name {
          font-size: 1.1rem;
          font-weight: 400;
          color: #fff;
          text-align: left;
          font-family: ${fontStack};
          text-shadow: none;
        }
        @media (max-width: 600px) {
          .services-title {
            font-size: 2rem;
          }
          .service-item {
            min-height: 70px;
            height: 70px;
            padding: 0 1rem;
          }
          .service-img-wrapper {
            width: 40px;
            height: 40px;
            margin-right: 1rem;
          }
          .service-name {
            font-size: 1rem;
          }
          .view-more-btn {
            display: block;
            margin: 2rem auto 0 auto;
            padding: 0.7rem 2.2rem;
            font-size: 1.1rem;
            font-family: ${fontStack};
            font-weight: 600;
            background: ${golden};
            color: #181818;
            border: none;
            border-radius: 999px;
            box-shadow: 0 2px 8px 0 rgba(255,215,0,0.10);
            cursor: pointer;
            transition: background 0.18s, color 0.18s, box-shadow 0.18s;
          }
          .view-more-btn:active {
            background: #e6c200;
            color: #232323;
          }
        }
        @media (min-width: 601px) {
          .view-more-btn {
            display: none !important;
          }
        }
      `}</style>
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <ul className="services-grid">
          {visibleServices.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-img-wrapper">
                <img src={service.img} alt={service.name} loading="lazy" />
              </div>
              <div className="service-name">{service.name}</div>
            </li>
          ))}
        </ul>
        {isMobile && !showAll && serviceData.length > MOBILE_INITIAL_COUNT && (
          <button
            className="view-more-btn"
            onClick={() => setShowAll(true)}
            aria-label="View more services"
          >
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default Services;
