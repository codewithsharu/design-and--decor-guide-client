import React, { useEffect, useRef } from "react";

const IMAGE_URLS = [
  "https://images.unsplash.com/photo-1607419726991-5fc7e74cda67?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514439827219-9137a0b99245?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525790935716-36a6c45ad067?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=2467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561602009-0ecd1cada8bd?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560583306-bd304a162229?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?q=80&w=2382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610322231968-31322d42851f?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=2467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1536890992765-f42a1ee1e2a8?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560583306-bd304a162229?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=2280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1627740660376-bc7506720b8a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1563964040780-8605906e3eb6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592507645647-f2f1d8103c86?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541591681685-0246308f076b?q=80&w=2489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1539027994943-7d6960acfaad?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573501815578-6252ee088c47?q=80&w=2283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1558273246-57d22047406d?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534685042784-4c7c97ae40d7?q=80&w=2427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1627740660376-bc7506720b8a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
