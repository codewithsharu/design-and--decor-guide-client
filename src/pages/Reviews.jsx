import React, { useState, useEffect, useRef } from "react";

// Inline SVG Star component to replace lucide-react
function Star({ size = 18, fill = "#fbbf24" }) {
  return (
    <svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 24 24"
      stroke={fill}
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        stroke={fill}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Arrow SVGs
const ArrowLeft = ({ ...props }) => (
  <button
    aria-label="Previous review"
    {...props}
    className={
      "flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-500 shadow transition disabled:opacity-40 disabled:cursor-not-allowed " +
      (props.className || "")
    }
    type="button"
  >
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        d="M13 16l-5-5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const ArrowRight = ({ ...props }) => (
  <button
    aria-label="Next review"
    {...props}
    className={
      "flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-500 shadow transition disabled:opacity-40 disabled:cursor-not-allowed " +
      (props.className || "")
    }
    type="button"
  >
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        d="M7 4l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

// Use dummy images from unsplash for more realistic avatars
const reviews = [
  {
    text: "FusionWheel’s intuitive interface and outstanding support helped us launch our new store in just .",
    name: "Don Toliver",
    role: "CEO & Managing Director",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "We’ve tested several platforms before, but none matched the flexibility and performance of FusionWheel.",
    name: "Omah Lay",
    role: "CEO & Managing Director",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "The seamless integration and beautiful UI made our transition effortless. Our customers love the new experience, and so do we!",
    name: "Jane Doe",
    role: "Head of Product",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Support is top-notch and the features are exactly what we needed. FusionWheel is a game changer for our business.",
    name: "Alex Smith",
    role: "Operations Manager",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  // For SSR safety, fallback to 1 on first render
  const [showCount, setShowCount] = useState(1);

  // Responsive: show 1 on mobile, 2 on md+
  useEffect(() => {
    function handleResize() {
      setShowCount(window.innerWidth < 768 ? 1 : 2);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll every 3 seconds
  const intervalRef = useRef();
  useEffect(() => {
    // Clear any previous interval
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [showCount]);

  // Calculate which reviews to show
  let visibleReviews;
  if (showCount === 1) {
    visibleReviews = [reviews[current]];
  } else {
    // Show two at a time, wrap if needed
    visibleReviews = [
      reviews[current],
      reviews[(current + 1) % reviews.length],
    ];
  }

  // Navigation handlers
  const prevReview = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };
  const nextReview = () => {
    setCurrent((prev) =>
      (prev + 1) % reviews.length
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
          Customer Reviews
        </h2>
        <p className="text-lg text-gray-500">
          Hear what our customers have to say about <span className="bg-orange-100 px-2 rounded text-orange-600 font-semibold">D&DG</span>
        </p>
        <div className="mt-2 flex justify-center">
          <span className="inline-block w-24 h-1 rounded bg-orange-400"></span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div
          className={
            "flex gap-8 items-stretch justify-center relative " +
            (showCount === 1
              ? "flex-col items-center"
              : "md:grid md:grid-cols-2 md:gap-8")
          }
        >
          {visibleReviews.map((review, index) => (
            <div
              key={index + current}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-left transition-transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-xs md:max-w-none mx-auto flex flex-col"
              style={{
                minHeight: "370px",
                aspectRatio: showCount === 1 ? "1 / 1" : undefined,
              }}
            >
              <div className="absolute -top-6 left-8">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="24" fill="#fbbf24" fillOpacity="0.1" />
                  <text x="50%" y="60%" textAnchor="middle" fontSize="32" fill="#fbbf24" fontWeight="bold" fontFamily="serif">“</text>
                </svg>
              </div>
              <p className="text-lg text-gray-700 mb-8 mt-2 italic leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-orange-200 shadow"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                {/* <div className="ml-auto flex items-center gap-1 text-orange-400">
                  {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <span className="relative" style={{ width: 18, display: "inline-block" }}>
                      <span style={{ position: "absolute", width: "50%", overflow: "hidden", left: 0, top: 0 }}>
                        <Star size={18} fill="#fbbf24" />
                      </span>
                      <span style={{ position: "absolute", width: "50%", overflow: "hidden", right: 0, top: 0 }}>
                        <Star size={18} fill="#e5e7eb" />
                      </span>
                    </span>
                  )}
                  <span className="ml-2 text-gray-500 text-sm font-medium">{review.rating} / 5</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* Arrows below the cards, centered */}
        <div className="flex justify-center gap-4 mt-8">
          <ArrowLeft
            onClick={prevReview}
            disabled={reviews.length <= 1}
          />
          <ArrowRight
            onClick={nextReview}
            disabled={reviews.length <= 1}
          />
        </div>
      </div>
    </div>
  );
}
