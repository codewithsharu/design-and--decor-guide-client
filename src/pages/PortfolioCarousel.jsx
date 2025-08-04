import React, { useEffect, useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Business",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    alt: "Creative",
  },
  {
    src: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&q=80",
    alt: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80",
    alt: "Wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
    alt: "Technology",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    alt: "Lifestyle",
  },
];

const PortfolioCarousel = () => {
  const carouselRef = useRef(null);
  const animationRef = useRef();
  const positionRef = useRef(0);
  const speedRef = useRef(0.5);

  useEffect(() => {
    const carousel = carouselRef.current;

    function moveCarousel() {
      positionRef.current -= speedRef.current;

      // Reset position when a card width is reached
      if (positionRef.current < -320) {
        positionRef.current = 0;
        // Move first card to end
        if (carousel && carousel.children.length > 0) {
          carousel.appendChild(carousel.children[0]);
        }
      }

      // Apply the transform with a slight curve effect
      if (carousel) {
        carousel.style.transform = `rotate(-5deg) translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(moveCarousel);
    }

    animationRef.current = requestAnimationFrame(moveCarousel);

    // Pause on hover
    const handleMouseEnter = () => {
      speedRef.current = 0;
    };
    const handleMouseLeave = () => {
      speedRef.current = 0.5;
    };

    if (carousel) {
      carousel.addEventListener("mouseenter", handleMouseEnter);
      carousel.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (carousel) {
        carousel.removeEventListener("mouseenter", handleMouseEnter);
        carousel.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="carousel-wrapper mt-16" style={{
      position: "relative",
      width: "100%",
      height: 380,
    }}>
      <div className="carousel-container" style={{
        position: "absolute",
        width: "200%",
        left: "50%",
        transform: "translateX(-50%)",
        height: 800,
        borderRadius: "50%",
        bottom: -420,
        perspective: 1000,
      }}>
        <div
          className="carousel-track"
          ref={carouselRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "1.5rem",
            padding: "0 calc(25% - 150px)",
            alignItems: "flex-start",
            transformOrigin: "center center",
          }}
        >
          {images.map((img, idx) => (
            <div
              className="carousel-card"
              key={idx}
              style={{
                flex: "0 0 300px",
                height: 380,
                transformOrigin: "center bottom",
                transition: "all 0.5s ease",
                position: "relative",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.1)",
                  transition: "transform 0.5s ease",
                }}
                className="carousel-img"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Inline styles for hover effect */}
      <style>{`
        .carousel-card:hover img {
          transform: scale(1.15);
        }
      `}</style>
    </div>
  );
};

export default PortfolioCarousel;
