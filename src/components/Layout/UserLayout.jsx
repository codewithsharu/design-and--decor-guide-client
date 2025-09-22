import React, { useEffect, useRef, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import AIAssistant from './AIAssistant';
import '@fortawesome/fontawesome-free/css/all.min.css';

const UserLayout = () => {
  const location = useLocation();
  const lastScrollYRef = useRef(0);
  const [isShrunk, setIsShrunk] = useState(false);

  // Scroll to top button logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Detect scroll for navbar shrink/expand
  useEffect(() => {
    const handleScroll = () => {
      const previousY = lastScrollYRef.current;
      const currentY = window.scrollY;
      const scrollingDown = currentY > previousY;
      setIsShrunk(scrollingDown && currentY > 10);
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Check if on contactus page
  const isContactUsPage = location.pathname === '/contactus';

  // Bottom nav only on mobile (md:hidden)
  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <Header/>

      {/* Navbar (sticky, shrinks on scroll down) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar isShrunk={isShrunk} />
      </div>

      {/* Content sits flush under fixed navbar (no extra gap) */}
      <div className="pt-0">
        <main>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* AI Assistant - handles its own positioning responsively */}
      <AIAssistant />

      {/* Scroll to top button - positioned below chatbot */}
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn fixed bottom-8 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-black text-white rounded-full shadow-lg
          hover:bg-gray-800 hover:scale-105 active:scale-98
          transition-all duration-200 ease-out
          flex items-center justify-center
          text-xl
          opacity-90 hover:opacity-100
          border-2 border-transparent hover:border-white
          z-40"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      {/* Responsive styles - vertical alignment like in image */}
      <style>
        {`
          @media (max-width: 767px) {
            .scroll-to-top-btn {
              bottom: 2rem !important;
              right: 1rem !important;
            }
          }
          
          @media (min-width: 768px) {
            .scroll-to-top-btn {
              bottom: 2rem !important;
              right: 2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UserLayout;