import React, { useState, useEffect } from 'react';
import heroImg1 from "../../assets/hero1.png";
import heroImg2 from "../../assets/hero2.png"; 
import heroImg3 from "../../assets/hero3.png";
import heroImg4 from "../../assets/hero4.png";
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'react-feather';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: heroImg1,
      title: "ELEVATE YOUR SPACE",
      subtitle: "Modern Interior Design",
      subparagraph: "Transform your home with our curated selection of contemporary furniture and decor. Experience the perfect blend of comfort, style, and functionality tailored to your unique taste."
    },
    {
      image: heroImg2, 
      title: "INSPIRED LIVING ROOMS",
      subtitle: "Cozy & Elegant Spaces",
      subparagraph: "Discover living room designs that invite relaxation and conversation. Our expert designers craft spaces that balance warmth, sophistication, and practicality for everyday living."
    },
    {
      image: heroImg3,
      title: "SERENE BEDROOM RETREATS",
      subtitle: "Restful & Refined",
      subparagraph: "Create a tranquil sanctuary with our bedroom design solutions. From soothing color palettes to luxurious textures, we help you achieve restful nights and beautiful mornings."
    },
    {
      image: heroImg4,
      title: "FUNCTIONAL KITCHEN DESIGNS",
      subtitle: "Heart of the Home",
      subparagraph: "Upgrade your kitchen with innovative layouts and premium finishes. Our designs focus on maximizing space, enhancing workflow, and bringing your culinary dreams to life."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Center Content */}
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-4xl">
            {/* Season Tag */}
            <div className="mb-8 flex justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">
                  {slides[currentIndex].subtitle}
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight transition-all duration-500">
                {slides[currentIndex].title}
              </h1>
              {/* <p className="text-white text-sm font-medium">
                {slides[currentIndex].subparagraph}
              </p> */}
              <div className="flex justify-center">
                <Link 
                  to="/collections/all?size=&material=&brand=&maxPrice=100"
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-opacity duration-300"
                >
                  <span className="text-sm tracking-wider uppercase">SHOP</span>
                  <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-transparent w-8' : 'bg-transparent'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;