import React from "react";
import { useParams, Link } from "react-router-dom";

// Data structure for all services, each with id, title, and rooms (with image and url)
const SERVICES = [
  {
    id: "1",
    title: "Individual House",
    url: "/gallery/1",
    rooms: [
      {
        id: "halls-living-room",
        title: "Halls & Living Room",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
        url: "/gallery/1",
      },
      {
        id: "master-bedroom",
        title: "Master Bedroom",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
        url: "/gallery/1",
      },
      {
        id: "children-bedroom",
        title: "Children Bedroom",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600",
        url: "/gallery/1",
      },
      {
        id: "guest-bedroom",
        title: "Guest Bedroom",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
        url: "/gallery/1/guest-bedroom",
      },
      {
        id: "kitchen",
        title: "Kitchen",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
        url: "/gallery/1/kitchen",
      },
      {
        id: "pooja-set",
        title: "Pooja Set",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600",
        url: "/gallery/1/pooja-set",
      },
      {
        id: "dining-room",
        title: "Dining Room",
        image: "https://images.unsplash.com/photo-1512918728675-3d8017bfa9d2?w=600",
        url: "/gallery/1/",
      },
      {
        id: "washrooms",
        title: "Washrooms",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600",
        url: "/gallery/1/washrooms",
      },
      {
        id: "utility-storage",
        title: "Utility and Storage",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600",
        url: "/gallery/1/utility-storage",
      },
    ],
  },
  {
    id: "2",
    title: "Apartment",
    url: "/gallery/2",
    rooms: [
      {
        id: "living-area",
        title: "Living Area",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
        url: "/gallery/2",
      },
      {
        id: "master-bedroom",
        title: "Master Bedroom",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
        url: "/gallery/2",
      },
      {
        id: "children-bedroom",
        title: "Children Bedroom",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600",
        url: "/gallery/2/",
      },
      {
        id: "guest-bedroom",
        title: "Guest Bedroom",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
        url: "/gallery/2/",
      },
      {
        id: "kitchen",
        title: "Kitchen",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
        url: "/gallery/2",
      },
      {
        id: "balcony",
        title: "Balcony",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600",
        url: "/gallery/2/balcony",
      },
      {
        id: "utility-area",
        title: "Utility Area",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600",
        url: "/gallery/2/utility-area",
      },
    ],
  },
  {
    id: "3",
    title: "Villa / Guest House",
    url: "/gallery/3",
    rooms: [
      {
        id: "bar-room",
        title: "Bar Room",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
        url: "/gallery/3/bar-room",
      },
      {
        id: "office-space",
        title: "Office Space",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
        url: "/gallery/3/office-space",
      },
      {
        id: "swimming-pool",
        title: "Swimming Pool",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600",
        url: "/gallery/3/swimming-pool",
      },
      {
        id: "garage",
        title: "Garage",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
        url: "/gallery/3/garage",
      },
      {
        id: "play-area",
        title: "Play Area",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600",
        url: "/gallery/3/play-area",
      },
    ],
  },
  {
    id: "4",
    title: "Workspaces",
    url: "/gallery/4",
    rooms: [
      {
        id: "office-interiors",
        title: "Office Interiors",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
        url: "/gallery/4/office-interiors",
      },
      {
        id: "personal-gaming-set-areas",
        title: "Personal Gaming Set Areas",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600",
        url: "/gallery/4/personal-gaming-set-areas",
      },
    ],
  },
];

export default function ServicesById() {
  const { id } = useParams();

  // Find the service by id, default to the first if not found
  const service = SERVICES.find((s) => s.id === id) || SERVICES[0];

  return (
    <main>
      <section className="servicesbyid-header">
      <br />
      <br />
      </section>
      <section id="product-cards-wrapper">
        {/* Display the title at the top of the gallery */}
        <div style={{ gridColumn: "1/-1", marginBottom: "1.5rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#131313",
            letterSpacing: "1px",
            textAlign: "center"
          }}>
            {service.title} Services
          </h2>
        </div>
        {/* View Gallery button for the whole service, with id for each service */}
        <div
          style={{
            gridColumn: "1/-1",
            margin: "0 auto 2rem auto",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {/* <Link
            to={service.url}
            className="view-gallery-button"
            id={`view-gallery-service-${service.id}`}
            style={{
              display: "inline-block",
              textAlign: "center",
              textDecoration: "none",
              width: "auto",
              minWidth: "160px",
              margin: "0 auto"
            }}
          >
            View {service.title} Gallery
          </Link> */}
        </div>
        {service.rooms.map((room) => (
          <div className="product-card" key={room.id}>
            <div
              className="product-background-image-section"
              style={{
                backgroundImage: `url("${room.image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"}")`,
              }}
            ></div>
            <div className="product-primary-details-section">
              <div className="name-rating-quantity">
                <div className="name-rating">
                  <div className="name-primary">{room.title}</div>
                </div>
              </div>
              <div className="view-gallery-wrapper">
                {/* Add a view gallery link for each room, with id for each room */}
                <Link
                  to={room.url}
                  className="view-gallery-button"
                  id={`view-gallery-room-${room.id}`}
                  style={{ display: "inline-block", textAlign: "center", textDecoration: "none" }}
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <style>{`
*,
*::before,
*::after {
    margin: 0rem;
    padding: 0rem;
    outline: none;
    list-style-type: none;
    text-decoration: none;
    box-sizing: border-box;
}

:root {
    --green: #adb9a5;
    --blue: #0a7dd7;
    --gray: #c1c1c1;
    --black: #131313;
    --white: #ffffff;
    --svg-yellow: #fcda40;
    --background-green: #adb9a5;
    --background-blue: #0a7dd7;
    --button-green: #adb9a5;
    --button-black: #131313;
    --button-blue: #0a7dd7;
}

html {
    font-family: Roboto, sans-serif;
}

.servicesbyid-header {
    width: 100%;
    max-width: 1100px;
    margin: 2rem auto 0;
    padding: 0 1rem;
}

.servicesbyid-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 2rem;
    text-align: left;
    letter-spacing: 1px;
}

#product-cards-wrapper {
    width: 100%;
    min-width: 320px;
    max-width: 1100px;
    padding: 1rem;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    grid-template-rows: 1fr;
    gap: 1rem;
    background-color: var(--white);
}

.product-card {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 1rem;
    background-color: var(--white);
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15) ;
}

.product-background-image-section {
    width: 100%;
    height: 16rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
}

.product-primary-details-section {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
}

.name-rating-quantity {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
}

.name-rating {
    place-self: start;
    align-self: center;
}

.name-primary {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    font-weight: 600;
    color: var(--black);
}

.view-gallery-wrapper {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: flex-end;
}

.view-gallery-button {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    background: #131313;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    transition: background 0.2s, color 0.2s;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    line-height: 2.5rem;
}

.view-gallery-button:hover {
    background: #000;
    color: #fff;
}
      `}</style>
    </main>
  );
}