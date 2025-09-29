import React, { useState } from 'react';
import { Star, Send, CheckCircle, Sparkles, Home, Award } from 'lucide-react';

export default function InteriorReviewForm() {
  const SCRIPT_POST_URL = "https://script.google.com/macros/s/AKfycbwTXe3-nP96bG2hPcGEwdIUvLd1wKPGFctVERoRiss8lAhy3O6b5B5zXpMUjBQRpJQv-w/exec";
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rating: 0
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const maxChars = 200; // Define max characters for the review

  const handleSubmit = async () => {
    if (formData.name && formData.description && formData.rating > 0) {
      setIsAnimating(true);
      
      const formSubmissionData = new FormData();
      formSubmissionData.append("name", formData.name.trim());
      formSubmissionData.append("review", formData.description.trim());
      formSubmissionData.append("rating", String(formData.rating));

      try {
        const res = await fetch(SCRIPT_POST_URL, {
          method: "POST",
          body: formSubmissionData,
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const responseText = await res.text();
        let responseData;
        try {
          responseData = JSON.parse(responseText);
        } catch (parseError) {
          console.log("Response:", responseText);
          responseData = { success: true, message: "Review submitted successfully" };
        }

        if (responseData.success) {
          setTimeout(() => {
            setSubmitted(true);
            setIsAnimating(false);
          }, 800);
        } else {
          throw new Error(responseData.error || "Submission failed");
        }
      } catch (err) {
        console.error("Error submitting review:", err);
        alert(`Error submitting review: ${err.message}`); // Simple error display for now
        setIsAnimating(false);
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', description: '', rating: 0 });
    setHoverRating(0);
  };

  const getRatingText = (rating) => {
    const texts = [
      '',
      'Needs Improvement',
      'Below Average',
      'Good Experience',
      'Excellent Work',
      'Outstanding!'
    ];
    return texts[rating] || '';
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-rose-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-rose-900 to-blue-600"></div>
            
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
              <CheckCircle className="w-28 h-28 text-green-500 mx-auto relative animate-[scaleIn_0.6s_ease-out]" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-900 via-rose-700 to-blue-600 bg-clip-text text-transparent">
              Thank You!
            </h2>
            <p className="text-xl text-gray-700 mb-3 font-medium">Your review has been submitted</p>
            <p className="text-gray-600 mb-10 max-w-md mx-auto">
              We truly value your feedback and will use it to continue delivering exceptional interior design experiences.
            </p>
            
            <div className="flex gap-3 justify-center mb-8">
              <Award className="w-6 h-6 text-rose-900" />
              <Award className="w-6 h-6 text-blue-600" />
              <Award className="w-6 h-6 text-rose-900" />
            </div>
            
            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-rose-900 to-rose-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-rose-800 hover:to-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              Submit Another Review
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-rose-50 flex flex-col pt-8 md:pt-16 items-center p-4">
     <br /><br /><br /><br />
      <div className="w-full max-w-md sm:max-w-xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-blue-900 p-6 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Home className="w-36 h-36" />
            </div>
            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm p-2 rounded-lg mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl mb-2">Share Your Experience</h1>
              <p className="text-blue-100 text-sm max-w-xs mx-auto hidden sm:block">
                Your feedback helps us create stunning spaces that inspire and delight
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6">
            <div className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-rose-900 rounded-full"></span>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      focusedField === 'name' 
                        ? 'border-blue-600 ring-2 ring-blue-100' 
                        : 'border-gray-200'
                    } outline-none transition-all duration-300 text-gray-800 text-sm bg-gray-50 hover:bg-white`}
                    placeholder="John Anderson"
                    required
                  />
                </div>

                {/* Removed Email Field */}
                {/* 
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      focusedField === 'email' 
                        ? 'border-rose-900 ring-2 ring-rose-100' 
                        : 'border-gray-200'
                    } outline-none transition-all duration-300 text-gray-800 text-sm bg-gray-50 hover:bg-white`}
                    placeholder="john@example.com"
                  />
                </div>
                */}
              </div>

              {/* Rating Section */}
              <div className="bg-gradient-to-br from-rose-50 via-blue-50 to-white p-5 rounded-xl border border-gray-100 shadow-inner">
                <label className="block text-xs font-bold text-gray-700 mb-3 text-center flex items-center justify-center gap-1.5">
                  <Award className="w-4 h-4 text-rose-900" />
                  Rate Your Experience
                </label>
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transform transition-all duration-200 hover:scale-105 focus:outline-none group relative"
                    >
                      <Star
                        className={`w-6 h-6 transition-all duration-300 ${
                          star <= (hoverRating || formData.rating)
                            ? 'fill-yellow-400 text-yellow-500 drop-shadow-md'
                            : 'text-gray-300 group-hover:text-gray-400'
                        }`}
                      />
                      {star <= (hoverRating || formData.rating) && (
                        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-30 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
                {(hoverRating || formData.rating) > 0 && (
                  <div className="text-center">
                    <p className="text-base font-bold bg-gradient-to-r from-rose-900 to-blue-600 bg-clip-text text-transparent animate-[fadeIn_0.3s_ease-out]">
                      {getRatingText(hoverRating || formData.rating)}
                    </p>
                    <div className="flex gap-1 justify-center mt-2">
                      {Array.from({ length: hoverRating || formData.rating }).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-rose-900 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Review Text Area */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Your Detailed Review
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  onFocus={() => setFocusedField('description')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    focusedField === 'description' 
                      ? 'border-rose-900 ring-2 ring-rose-100' 
                      : 'border-gray-200'
                  } outline-none transition-all duration-300 text-gray-800 text-sm min-h-32 resize-none bg-gray-50 hover:bg-white`}
                  placeholder="Tell us about your experience with our interior design services. What did you love? What could we improve?"
                  required
                  maxLength={maxChars} // Apply max length
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Share details about design quality, service, creativity, and overall satisfaction
                  </p>
                  <p className="text-xs font-medium text-gray-600">
                    <span className={formData.description.length > maxChars * 0.9 ? 'text-red-500' : 'text-gray-500'}>
                      {formData.description.length}
                    </span>
                    <span className="text-gray-400">/{maxChars}</span>
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.description || formData.rating === 0}
                className={`w-full py-3 rounded-lg font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
                  formData.name && formData.description && formData.rating > 0
                    ? 'bg-gradient-to-r from-rose-900 via-rose-800 to-blue-900 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.005] hover:-translate-y-0.5'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                } ${isAnimating ? 'animate-pulse' : ''}`}
              >
                {isAnimating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Your Review
                  </>
                )}
                {formData.name && formData.description && formData.rating > 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-[shimmer_2s_infinite]"></div>
                )}
              </button>
            </div>

            <div className="mt-5 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-300"></div>
                <span>Your feedback shapes our future designs</span>
                <div className="h-px w-8 bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0) rotate(-180deg);
          }
          to {
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}