import React, { useState, useEffect, useRef } from "react";

// Inline SVG Star component to replace lucide-react
function Star({ size = 18, fill = "#38bdf8" }) { // sky blue
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
      "flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 hover:bg-sky-200 text-red-500 shadow transition disabled:opacity-40 disabled:cursor-not-allowed " +
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
      "flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 hover:bg-sky-200 text-red-500 shadow transition disabled:opacity-40 disabled:cursor-not-allowed " +
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

// Fallback reviews data
const fallbackReviews = [
  {
    text: "FusionWheel’s intuitive interface and outstanding support helped us launch our new store in just .",
    name: "Don Toliver",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "We’ve tested several platforms before, but none matched the flexibility and performance of FusionWheel.",
    name: "Omah Lay",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "The seamless integration and beautiful UI made our transition effortless. Our customers love the new experience, and so do we!",
    name: "Jane Doe",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Support is top-notch and the features are exactly what we needed. FusionWheel is a game changer for our business.",
    name: "Alex Smith",
    rating: 5.0,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

// API URL for fetching reviews from Google Apps Script
const REVIEWS_API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLij2hNyi7IPgkTixmjrz7I0PPq8i6azyWz75zsoOP-SFbQf3W0pSlLS6Ru-52CH9GfRWyLAccWb3G05x-zr_RYHQq9qLrDHT6pvSvkOrfbhLbLkmqMinN-DLjntgfNg30GNgh0YfdAYBrIzvw7zAHe16anDQJW1hJpMQUzZOooBKgZ_BCToIrSnMtJV6YS_4q-8YBptI5RqXA1U_nBHcRNB9q-L6HqVHC0lp0u-2_S2ZZpfK35XN5zVattluV8MlzEJsiVtpg41bt2bqLDgvND9n9oq9KcvmbJIY-o7&lib=MTojK4tQdk3ulSP_cYrpZmJC96vCjkTSA";

// Static images to be used for avatars (kept local/static per requirement)
const staticImages = [
  '/src/assets/gallery/turnkey1.png',
  '/src/assets/gallery/turnkey2.png',
  '/src/assets/gallery/com -1.jpg',
  '/src/assets/gallery/com -2.jpg',
  '/src/assets/gallery/off 1.jpg',
  '/src/assets/gallery/off 2.jpg',
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  // Initialize reviews with static images combined with default reviews
  const [reviews, setReviews] = useState(
    fallbackReviews.map((review, index) => ({
      ...review,
      img: staticImages[index % staticImages.length],
    }))
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(null); // 'ok' | 'error' | null
  const [fetchMessage, setFetchMessage] = useState('');
  const [rawApiResponse, setRawApiResponse] = useState(null);

  // For SSR safety, fallback to 1 on first render
  const [showCount, setShowCount] = useState(1);

  // Fetch reviews from API and combine with static images
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setFetchStatus(null);
        setFetchMessage('');
        const response = await fetch(REVIEWS_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();

        // Capture raw response and log for debugging
        console.info('Reviews API response:', data);
        setRawApiResponse(data);

        // Helper: try to coerce a value into an array of review-like objects
        const tryExtractArray = (val) => {
          if (!val && val !== 0) return [];
          if (Array.isArray(val)) return val;
          if (typeof val === 'string') {
            // Sometimes the API returns a JSON string
            try {
              const parsed = JSON.parse(val);
              if (Array.isArray(parsed)) return parsed;
              val = parsed;
            } catch (e) {
              return [];
            }
          }
          if (typeof val === 'object') {
            if (Array.isArray(val.reviews)) return val.reviews;
            if (Array.isArray(val.data)) return val.data;
            if (Array.isArray(val.items)) return val.items;
            if (Array.isArray(val.records)) return val.records;
            const arr = Object.values(val).find((v) => Array.isArray(v));
            if (arr) return arr;
          }
          return [];
        };

        let apiReviews = tryExtractArray(data);

        // If still empty, and the raw data looks like a sequence of JSON objects without an array wrapper,
        // try extracting {} groups from the string and parse them individually. This handles payloads like
        // '{...}, {...}, {...}' coming from some endpoints.
        if (apiReviews.length === 0) {
          try {
            const asString = typeof data === 'string' ? data : JSON.stringify(data);
            const objMatches = asString.match(/\{[^}]*\}/g);
            if (objMatches && objMatches.length) {
              const parsedObjs = objMatches.map((m) => {
                try {
                  return JSON.parse(m);
                } catch (e) {
                  // fallback: try to convert single quotes to double quotes then parse
                  try {
                    const fixed = m.replace(/\"/g, '\\"').replace(/\'/g, '"');
                    return JSON.parse(fixed);
                  } catch (err) {
                    return null;
                  }
                }
              }).filter(Boolean);
              if (parsedObjs.length) apiReviews = parsedObjs;
            }
          } catch (e) {
            // ignore extraction errors
          }
        }

        // If nothing found, recursively scan fields for stringified arrays
        if (apiReviews.length === 0 && data && typeof data === 'object') {
          const scanForJsonArray = (obj) => {
            if (!obj || typeof obj !== 'object') return null;
            for (const [k, v] of Object.entries(obj)) {
              if (Array.isArray(v)) return v;
              if (typeof v === 'string') {
                try {
                  const parsed = JSON.parse(v);
                  if (Array.isArray(parsed)) return parsed;
                  if (typeof parsed === 'object') {
                    const nested = scanForJsonArray(parsed);
                    if (nested) return nested;
                  }
                } catch (e) {
                  // not JSON
                }
              } else if (typeof v === 'object') {
                const nested = scanForJsonArray(v);
                if (nested) return nested;
              }
            }
            return null;
          };
          const found = scanForJsonArray(data);
          if (found) apiReviews = found;
        }

        const parseRatingValue = (r) => {
          if (r === undefined || r === null || r === '') return NaN;
          if (typeof r === 'number') return r;
          if (typeof r === 'string') {
            const s = r.trim();
            if (/^\d+(\.\d+)?$/.test(s)) return parseFloat(s);
            const slash = s.match(/^(\d+(?:\.\d+)?)[\s]\/[\s](\d+(?:\.\d+)?)$/);
            if (slash) {
              const num = parseFloat(slash[1]);
              const den = parseFloat(slash[2]);
              if (den > 0) return (num / den) * 5;
            }
            const stars = (s.match(/[★*]/g) || []).length;
            if (stars) return Math.min(stars, 5);
            const found = s.match(/(\d+(?:\.\d+)?)/);
            if (found) return parseFloat(found[1]);
          }
          return NaN;
        };

        if (apiReviews.length > 0) {
          const reviewsWithImages = apiReviews.map((review, index) => {
            if (!review || (typeof review !== 'object')) return null;
            // Accept both camelCase and TitleCase keys (e.g., "Name", "Review", "Rating")
            const text = (
              review.text || review.comment || review.review || review.Review || review.message || review.body || review.Body || ''
            ).toString();
            const name = (
              review.name || review.Name || review.customer || review.reviewer || review.author || review.username || `Customer ${index + 1}`
            );
            let rating = parseRatingValue(
              review.rating ?? review.Rating ?? review.stars ?? review.score ?? review.rating_value ?? review.rate ?? review.rate_value
            );
            if (!Number.isFinite(rating) || isNaN(rating)) rating = 5.0;
            return {
              text,
              name,
              rating: Math.round(rating * 10) / 10,
              img: staticImages[index % staticImages.length],
            };
          }).filter(Boolean).filter(r => r.text.trim() !== '');

          if (reviewsWithImages.length > 0) {
            setReviews(reviewsWithImages);
            setError(null);
            setFetchStatus('ok');
            setFetchMessage(`${reviewsWithImages.length} review(s) loaded from API`);
          } else {
            console.warn('Reviews fetch returned no usable items, falling back to defaults.');
            setFetchStatus('error');
            setFetchMessage('API returned no usable review items');
          }
        } else {
          console.warn('Reviews API returned no array-like data; response logged above.');
          setFetchStatus('error');
          setFetchMessage('API returned no array-like data');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Using default reviews - API unavailable');
        setFetchStatus('error');
        setFetchMessage(err.message || String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // For SSR safety, fallback to 1 on first render

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
    <div className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="l-hero__headings">
          <div className="l-hero__headings-baseline">
            Customer Reviews
          </div>
        </div>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

          :root {
            --font-principal: "Poppins", sans-serif;
            --font-custom: "Playfair Display", serif;
            --color-light: white;
            --color-dark: #323232;
            --color-1: #ffda79;
            --color-2: #ffabe7;
            --color-3: #d2bcf3;
            --color-4: #edf3d8;
            --container-width: min(90%, 769px);
          }

          .l-hero__headings {
            padding: 80px 32px 0 32px;
          }

          .l-hero__headings-baseline {
            width: max-content;
            margin: 0 auto 40px;
            padding: 12px 24px;
            border-radius: 9999999px;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
            background-color: var(--color-1);
            font-family: var(--font-principal);
            letter-spacing: 0.04em;
          }

          @media (max-width: 600px) {
            .l-hero__headings-title {
              font-size: 36px;
            }
            .l-hero__headings {
              padding: 48px 12px 0 12px;
            }
            .l-hero__headings-baseline {
              font-size: 16px;
              padding: 10px 16px;
            }
          }
        `}</style>
        <p className="text-lg text-gray-500">
          Hear what our customers have to say about <span className="bg-red-100 px-2 rounded text-red-600 font-semibold">D&DG</span>
        </p>
        <div className="mt-2 flex justify-center">
          <span className="inline-block w-24 h-1 rounded bg-sky-400"></span>
        </div>
        {/* Visible fetch status for debugging */}
        <div className="mt-4">
          {loading ? (
            <div className="text-sm text-gray-500">Loading reviews from API...</div>
          ) : fetchStatus === 'error' ? (
            <div className="text-sm text-red-600">{fetchMessage || 'Failed to load reviews from API. Using defaults.'}</div>
          ) : null}
        </div>
        {fetchStatus === 'error' && rawApiResponse && (
          <details className="mt-4 text-left mx-auto max-w-2xl bg-gray-50 p-3 rounded">
            <summary className="cursor-pointer font-medium">Show raw API response (copy and paste here)</summary>
            <pre className="whitespace-pre-wrap text-xs mt-2 max-h-64 overflow-auto">{JSON.stringify(rawApiResponse, null, 2)}</pre>
          </details>
        )}
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
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-sky-100 text-left transition-transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-xs md:max-w-none mx-auto flex flex-col"
              style={{
                minHeight: "370px",
                aspectRatio: showCount === 1 ? "1 / 1" : undefined,
              }}
            >
              <div className="absolute -top-6 left-8">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="24" fill="#38bdf8" fillOpacity="0.12" />
                  <text x="50%" y="60%" textAnchor="middle" fontSize="32" fill="#ef4444" fontWeight="bold" fontFamily="serif">“</text>
                </svg>
              </div>
              <p className="text-lg text-gray-700 mb-8 mt-2 italic leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-sky-200 shadow"
                  onError={(e) => {
                    // Fallback to a default avatar if image fails to load
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=38bdf8&color=fff&size=56`;
                  }}
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <div className="flex items-center gap-1 text-sky-400 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const fullCount = Math.floor(review.rating);
                      const hasHalf = review.rating % 1 !== 0;
                      const isFull = i < fullCount;
                      const isHalf = hasHalf && i === fullCount;

                      if (isFull) {
                        return <Star key={i} size={20} fill="#38bdf8" />;
                      }

                      if (isHalf) {
                        return (
                          <div key={i} className="relative inline-block" style={{ width: 20, height: 20 }}>
                            <Star size={20} fill="#e5e7eb" />
                            <div style={{ position: "absolute", top: 0, left: 0, width: "50%", overflow: "hidden" }}>
                              <Star size={20} fill="#38bdf8" />
                            </div>
                          </div>
                        );
                      }

                      // empty star (present but uncolored)
                      return <Star key={i} size={20} fill="#e5e7eb" />;
                    })}
                    <span className="ml-2 text-gray-500 text-sm font-medium">{review.rating}</span>
                  </div>
                </div>
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