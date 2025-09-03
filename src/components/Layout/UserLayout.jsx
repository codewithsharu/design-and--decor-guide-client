import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Common/Navbar';

const UserLayout = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll to top button logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Detect scroll for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up → show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Check if on contactus page
  const isContactUsPage = location.pathname === '/contactus';

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <Header/>

      {/* Navbar (sticky + scroll hide/show) */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Navbar />
      </div>

      {/* Push content below navbar */}
      <div className="pt-16">
        <main>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`unique-scrolltop-btn fixed bottom-24 right-8 bg-black text-white rounded-full shadow-lg 
          hover:bg-gray-800 hover:scale-110 active:scale-95
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          font-bold
          opacity-80 hover:opacity-100
          border-2 border-transparent hover:border-white
          ${isContactUsPage ? 'w-10 h-10 text-xl' : 'w-12 h-12 text-2xl'}
        `}
        style={{
          ...(isContactUsPage
            ? { width: '40px', height: '40px', fontSize: '1.25rem' }
            : {})
        }}
      >
        ↑
      </button>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/+91"
        target="_blank"
        rel="noopener noreferrer"
        className="unique-whatsapp-btn fixed bottom-8 right-8 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg
          hover:bg-green-600 hover:scale-110 active:scale-95
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          text-xl
          opacity-80 hover:opacity-100
          border-2 border-transparent hover:border-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 767px) {
            .unique-scrolltop-btn {
              width: 40px !important;
              height: 40px !important;
              font-size: 1.25rem !important;
              right: 1rem !important;
              bottom: 6rem !important;
            }
            .unique-whatsapp-btn {
              width: 48px !important;
              height: 48px !important;
              right: 1rem !important;
              bottom: 2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UserLayout;
