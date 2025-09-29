import React, { useState } from "react";

const SCRIPT_POST_URL = "https://script.google.com/macros/s/AKfycbwTXe3-nP96bG2hPcGEwdIUvLd1wKPGFctVERoRiss8lAhy3O6b5B5zXpMUjBQRpJQv-w/exec";

const ReviewForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Controlled fields for polished UI and validation
  const [nameValue, setNameValue] = useState("");
  const [reviewValue, setReviewValue] = useState("");
  const maxChars = 800;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear previous message at the start of a new submission
    setMessage("⏳ Submitting...");

    const formData = new FormData();
    formData.append("name", nameValue.trim());        // lowercase 'name'
    formData.append("review", reviewValue.trim());    // lowercase 'review' 
    formData.append("rating", String(rating));        // lowercase 'rating'

    try {
      const res = await fetch(SCRIPT_POST_URL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      // Parse the JSON response
      const responseText = await res.text();
      let responseData;
      
      try {
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        // If response is not JSON, treat as success if we got a response
        console.log("Response:", responseText);
        responseData = { success: true, message: "Review submitted successfully" };
      }

      if (responseData.success) {
        setMessage("✅ Review submitted successfully!");
        setShowToast(true);
        setNameValue("");
        setReviewValue("");
        setRating(0);
        setHoverRating(0);
        // hide toast after a moment
        setTimeout(() => setShowToast(false), 3500);
      } else {
        throw new Error(responseData.error || "Submission failed");
      }
      
    } catch (err) {
      console.error("Error submitting review:", err);
      
      // More specific error messages
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setMessage("❌ Network error. Please check your internet connection and try again.");
      } else if (err.message.includes('CORS')) {
        setMessage("❌ CORS error. Please contact support to enable CORS on the server.");
      } else if (err.message.includes('404')) {
        setMessage("❌ Service not found. Please contact support.");
      } else if (err.message.includes('500')) {
        setMessage("❌ Server error. Please try again later.");
      } else {
        setMessage(`❌ Error submitting review: ${err.message}`);
      }
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 6000); // Keep error messages visible longer
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-4 px-2 sm:px-3 lg:px-4">
      <div className="max-w-md mx-auto">
        <br /><br /><br /><br />
        <div className="bg-white rounded-xl shadow-lg border border-slate-200/50 backdrop-blur-sm overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#8a1a36] via-[#a32b4d] to-[#bd3c64] px-4 py-5 text-center">
            <div className="flex items-center justify-center mb-1">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">Share Your Experience</h2>
            <p className="text-blue-100 text-sm font-medium">Your feedback helps us create stunning spaces that inspire and delight</p>
          </div>

          {/* Form Section */}
          <div className="p-4 sm:p-5">
            <form id="reviewForm" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-0.5">
                <label htmlFor="name" className="block text-xs font-semibold text-gray-800 mb-1">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Your Name
                  </span>
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="John Anderson"
                  className="w-full border-2 border-gray-200 rounded-md px-3 py-2.5 text-gray-800 placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-100 transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white shadow-sm text-sm"
                  type="text"
                  required
                  aria-required="true"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </div>

              <div className="space-y-0.5">
                <label htmlFor="review" className="block text-xs font-semibold text-gray-800 mb-1.5">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Your Detailed Review
                  </span>
                </label>
                <textarea
                  id="review"
                  name="review"
                  placeholder="Tell us about your experience with our interior design services. What did you love? What could we improve?"
                  className="w-full border-2 border-gray-200 rounded-md px-3 py-2.5 h-28 resize-y text-gray-800 placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-100 transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white shadow-sm text-sm"
                  required
                  aria-required="true"
                  value={reviewValue}
                  onChange={(e) => setReviewValue(e.target.value)}
                  maxLength={maxChars}
                />
                <div className="flex justify-between items-center mt-2">
                  <div className="text-xs text-gray-500">Be specific and honest to help others</div>
                  <div className="text-sm font-medium text-gray-600">
                    <span className={reviewValue.length > maxChars * 0.9 ? 'text-orange-600' : 'text-gray-500'}>
                      {reviewValue.length}
                    </span>
                    <span className="text-gray-400">/{maxChars}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 border border-gray-200">
                <label className="block text-xs font-semibold text-gray-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Rate Your Experience
                  </span>
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const starIndex = i + 1;
                        const filled = hoverRating ? starIndex <= hoverRating : starIndex <= rating;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setRating(starIndex)}
                            onMouseEnter={() => setHoverRating(starIndex)}
                            onMouseLeave={() => setHoverRating(0)}
                            aria-pressed={starIndex <= rating}
                            title={`${starIndex} star${starIndex > 1 ? 's' : ''}`}
                            className="focus:outline-none transform transition-all duration-200 hover:scale-105 active:scale-95 p-0 rounded-full hover:bg-white/50"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? '#ef4444' : 'none'} stroke={filled ? '#ef4444' : '#e0e0e0'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
                            </svg>
                          </button>
                        );
                      })}
                    </div>
                    <div className="ml-3 text-lg font-semibold text-gray-700">
                      {rating ? (
                        <span className="flex items-center gap-2">
                          <span className="text-sky-600">{rating}</span>
                          <span className="text-gray-400">/</span>
                          <span className="text-gray-500">5</span>
                        </span>
                      ) : (
                        <span className="text-gray-400">Tap to rate</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <p className="text-xs text-gray-500 mb-3 flex items-center justify-center gap-1.5">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L4.82 19z"/>
                  </svg>
                  Share details about design quality, service, creativity, and overall satisfaction
                </p>
                <button 
                  className="w-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold py-2.5 px-5 rounded-md shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-[1.005] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm" 
                  type="submit" 
                  disabled={loading || rating === 0 || !nameValue.trim() || !reviewValue.trim()}
                >
                  <span>{loading ? 'Submitting Your Review...' : 'Submit Your Review'}</span>
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  ) : (
                    // Send icon, right side
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L11 13" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  )}
                </button>
              </div>
            </form>

            {/* Message Display */}
            {message && (
              <div className={`mt-4 p-2.5 rounded-md text-center font-medium ${
                message.includes('✅') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : message.includes('❌') 
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {message}
              </div>
            )}

            {/* Footer Note */}
            <div className="mt-5 pt-3 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Your feedback shapes our future designs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;