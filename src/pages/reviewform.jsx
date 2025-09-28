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

      if (responseData.success !== false) {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <br /><br /><br /><br />
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/50 backdrop-blur-sm overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-8 py-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Share Your Review</h1>
            <p className="text-blue-100 text-lg font-medium">Your feedback helps us deliver exceptional service</p>
          </div>

          {/* Form Section */}
          <div className="p-8 sm:p-12">
            <form id="reviewForm" onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Your Name
                  </span>
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white shadow-sm"
                  type="text"
                  required
                  aria-required="true"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="review" className="block text-sm font-semibold text-gray-800 mb-3">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Your Review
                  </span>
                </label>
                <textarea
                  id="review"
                  name="review"
                  placeholder="Share your experience with us... What did you like? How can we improve?"
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 h-40 resize-y text-gray-800 placeholder-gray-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white shadow-sm"
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

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                <label className="block text-sm font-semibold text-gray-800 mb-4">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
                            className="focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-blue-50 transform transition-all duration-200 hover:scale-125 active:scale-105 p-1 rounded-full hover:bg-white/50"
                          >
                            <svg width="36" height="36" viewBox="0 0 24 24" fill={filled ? '#0891b2' : 'none'} stroke={filled ? '#0891b2' : '#cbd5e1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="pt-6">
                <button 
                  className="w-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-lg" 
                  type="submit" 
                  disabled={loading || rating === 0 || !nameValue.trim() || !reviewValue.trim()}
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                  <span>{loading ? 'Submitting Your Review...' : 'Submit Review'}</span>
                </button>
              </div>
            </form>

            {/* Message Display */}
            {message && (
              <div className={`mt-6 p-4 rounded-xl text-center font-medium ${
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
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Your feedback is secure and helps us serve you better
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;