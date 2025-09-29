import React, { useState, useEffect } from 'react';
import { FiEye, FiEdit2, FiTrash2, FiCheck, FiX, FiStar, FiRefreshCw, FiDownloadCloud } from 'react-icons/fi';

const REVIEWS_API_URL = "https://script.google.com/macros/s/AKfycbxCSvD1bxyO1-pzIL5nMkyA8l_x05h2qSnAFDRjTGOLvrxlEY8AuUX1gHdVnAEy28E8DQ/exec";

// Admin Login Component
const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'ddg@admin') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4 font-poppins">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl  text-gray-900 text-center mb-8">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm text-center font-medium">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingReview, setEditingReview] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [loadingRow, setLoadingRow] = useState(null); // rowIndex currently updating
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize from localStorage, default to false if not found
    const savedLoginStatus = localStorage.getItem('isAdminLoggedIn');
    return savedLoginStatus === 'true';
  }); // New state for authentication

  // Effect to update localStorage whenever isLoggedIn changes
  useEffect(() => {
    localStorage.setItem('isAdminLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  // Function to download reviews as CSV
  const downloadCSV = () => {
    if (reviews.length === 0) {
      alert('No reviews to download.');
      return;
    }

    const headers = ["RowIndex", "TimeStamp", "Name", "Review", "Rating", "Status"];
    const csvRows = [];

    // Add headers
    csvRows.push(headers.join(','));

    // Add data rows
    reviews.forEach(review => {
      const row = headers.map(header => {
        const value = review[header === "RowIndex" ? "rowIndex" : header === "TimeStamp" ? "TimeStamp" : header === "Name" ? "Name" : header === "Review" ? "Review" : header === "Rating" ? "Rating" : header === "Status" ? "Status" : ''] || '';
        return `"${String(value).replace(/"/g, '""')}"`; // Escape double quotes and wrap in quotes
      });
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'reviews.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fetch all reviews (admin mode)
  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Use a simpler URL construction to avoid malformed URLs
      const response = await fetch(`${REVIEWS_API_URL}?mode=admin&timestamp=${Date.now()}`);
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Received data:', data);
      
      // Handle both direct array and wrapped response
      const reviewsArray = Array.isArray(data) ? data : (data.data || []);
      setReviews(reviewsArray);
      setError(null);
    } catch (err) {
      console.error('Detailed error:', err);
      setError(`Failed to fetch reviews: ${err.message}`);
      // Set some dummy data for testing
      setReviews([
        {
          rowIndex: 2,
          TimeStamp: new Date(),
          Name: "Test User",
          Review: "This is a test review",
          Rating: 5,
          Status: "No"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Update review status
  const updateReviewStatus = async (review, newStatus) => {
    try {
      setUpdating(true);
      setLoadingRow(review.rowIndex);
      const formData = new FormData();
      formData.append('action', 'update');
      formData.append('rowIndex', review.rowIndex);
      formData.append('status', newStatus);

      const response = await fetch(REVIEWS_API_URL, {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });

      console.log('Update response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.text(); // Try text first
      console.log('Update response text:', result);
      
      let parsedResult;
      try {
        parsedResult = JSON.parse(result);
      } catch (parseError) {
        // If not JSON, assume success if we got a response
        parsedResult = { success: true, message: result };
      }
      
      if (parsedResult.success !== false) {
        // Update local state
        setReviews(reviews.map(r => 
          r.rowIndex === review.rowIndex 
            ? { ...r, Status: newStatus }
            : r
        ));
        console.log('Status updated successfully');
      } else {
        throw new Error(parsedResult.error || 'Update failed');
      }
    } catch (err) {
      console.error('Error updating review:', err);
      alert(`Failed to update review status: ${err.message}`);
    } finally {
      setUpdating(false);
      setLoadingRow(null);
    }
  };

  // Delete review
  const deleteReview = async (review) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      setUpdating(true);
      setLoadingRow(review.rowIndex);
      const formData = new FormData();
      formData.append('action', 'delete');
      formData.append('rowIndex', review.rowIndex);

      const response = await fetch(REVIEWS_API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const result = await response.json();
      if (result.success) {
        // Remove from local state
        setReviews(reviews.filter(r => r.rowIndex !== review.rowIndex));
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      console.error('Error deleting review:', err);
      alert('Failed to delete review');
    } finally {
      setUpdating(false);
      setLoadingRow(null);
    }
  };

  // Edit review
  const updateReview = async (review, updates) => {
    try {
      setUpdating(true);
      setLoadingRow(review.rowIndex);
      const formData = new FormData();
      formData.append('action', 'update');
      formData.append('rowIndex', review.rowIndex);
      
      if (updates.name !== undefined) formData.append('name', updates.name);
      if (updates.review !== undefined) formData.append('review', updates.review);
      if (updates.rating !== undefined) formData.append('rating', updates.rating);

      const response = await fetch(REVIEWS_API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const result = await response.json();
      if (result.success) {
        // Update local state
        setReviews(reviews.map(r => 
          r.rowIndex === review.rowIndex 
            ? { ...r, ...updates }
            : r
        ));
        setEditingReview(null);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      console.error('Error updating review:', err);
      alert('Failed to update review');
    } finally {
      setUpdating(false);
      setLoadingRow(null);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const getStatusBadge = (status) => {
    const isApproved = status === 'Yes' || status === '✓' || status === 'Approved';
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
        isApproved 
          ? 'bg-green-100 text-green-800' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        {isApproved ? '✓ Approved' : '⏸ Pending'}
      </span>
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        <br /><br />
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  if (loading && isLoggedIn) { // Only show full-page loader if logged in and loading reviews
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center text-gray-700">
          <FiRefreshCw className="animate-spin text-4xl mb-3" />
          <p className="text-lg font-medium">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="p-2 sm:p-4 md:p-6">
        <br /><br /><br /><br />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-xl  text-gray-900 text-center sm:text-left font-poppins">Review Management</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 font-poppins">
          <button
            onClick={fetchReviews}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm sm:text-base justify-center"
          >
            <FiRefreshCw className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm sm:text-base justify-center"
          >
            <FiDownloadCloud size={16} />
            Download CSV
          </button>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem('isAdminLoggedIn'); // Clear login state on logout
            }}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm sm:text-base justify-center"
            title="Logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
              width={18}
              height={18}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v9m6.364-6.364a9 9 0 11-12.728 0"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] sm:min-w-0">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Review
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviews.map((review, index) => (
                <tr key={review.rowIndex || index} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-4 whitespace-nowrap max-w-[120px] sm:max-w-none">
                    <div className="text-sm font-medium text-gray-900 break-words">
                      {review.Name || 'Unknown'}
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-4 max-w-[160px] sm:max-w-xs">
                    <div className="text-sm text-gray-900 truncate sm:whitespace-normal break-words">
                      {review.Review || 'No review text'}
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-4 whitespace-nowrap">
                    {renderStars(review.Rating || 0)}
                  </td>
                  <td className="px-2 sm:px-4 py-4 whitespace-nowrap">
                    {getStatusBadge(review.Status)}
                  </td>
                  <td className="px-2 sm:px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(review.TimeStamp).toLocaleDateString()}
                  </td>
                  <td className="px-2 sm:px-4 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      {review.Status !== 'Yes' ? (
                        <button
                          onClick={() => updateReviewStatus(review, 'Yes')}
                          disabled={loadingRow === review.rowIndex}
                          className="text-green-600 hover:text-green-900 p-1 hover:bg-green-50 rounded flex items-center justify-center"
                          title="Approve Review"
                        >
                          {loadingRow === review.rowIndex ? (
                            <svg className="animate-spin h-4 w-4 text-green-600" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                          ) : (
                            <FiCheck size={16} />
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={() => updateReviewStatus(review, 'No')}
                          disabled={loadingRow === review.rowIndex}
                          className="text-gray-600 hover:text-gray-900 p-1 hover:bg-gray-50 rounded flex items-center justify-center"
                          title="Unapprove Review"
                        >
                          {loadingRow === review.rowIndex ? (
                            <svg className="animate-spin h-4 w-4 text-gray-600" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                          ) : (
                            <FiX size={16} />
                          )}
                        </button>
                      )}
                      
                      <button
                        onClick={() => setEditingReview(review)}
                        className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded"
                        title="Edit Review"
                      >
                        <FiEdit2 size={16} />
                      </button>
                      
                      <button
                        onClick={() => deleteReview(review)}
                        className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded"
                        title="Delete Review"
                      >
                        {loadingRow === review.rowIndex ? (
                          <svg className="animate-spin h-4 w-4 text-red-600" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                        ) : (
                          <FiTrash2 size={16} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {reviews.length === 0 && !loading && (
          <div className="text-center py-8 text-gray-500">
            No reviews found.
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingReview && (
        <EditReviewModal 
          review={editingReview}
          onSave={(updates) => updateReview(editingReview, updates)}
          onCancel={() => setEditingReview(null)}
        />
      )}
    </div>
  );
};

// Edit Review Modal Component
const EditReviewModal = ({ review, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: review.Name || '',
    review: review.Review || '',
    rating: review.Rating || 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: formData.name,
      review: formData.review,
      rating: parseInt(formData.rating)
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md mx-2 sm:mx-4">
        <h2 className="text-lg font-bold mb-4">Edit Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Review</label>
            <textarea
              value={formData.review}
              onChange={(e) => setFormData({...formData, review: e.target.value})}
              className="w-full border rounded-lg px-3 py-2 h-20 sm:h-24 resize-none text-sm"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <select
              value={formData.rating}
              onChange={(e) => setFormData({...formData, rating: e.target.value})}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewManagement;