import React from "react";
import asianpaints from "../assets/asianpaints.jpeg";
import kajaria from "../assets/kajaria.png";
import mytyles from "../assets/mytyles.png";
import quartizo from "../assets/quartizo.jpeg";
import simens from "../assets/simens.png";
import centuryply from "../assets/centuryply.png";
import philips from "../assets/philips.png";
import crompton from "../assets/crompton.png";
import godrej from "../assets/godrej.png";
import hettich from "../assets/hettich.png";
import saintgobain from "../assets/saintgobain.jpeg";
import dulux from "../assets/dulux.png";
import wipro from "../assets/wipro.png";
import johnson from "../assets/johnson.png";
import merino from "../assets/merino.png";
import founder from "../assets/founder.png";


const AboutUs = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
        }
        .newarrivals-container{
            width: 90%;
            height: 100%;
            max-width: 1170px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            grid-gap: 60px;
            padding: 35px 0;
        }
        .newarrivals-contentLeft,
        .newarrivals-contentRight{
            width: 100%;
        }
        .newarrivals-contentLeft .newarrivals-row{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper{
            width: 100%;
            height: 450px;
            overflow: hidden;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.15);
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
            transition: 0.3s ease;
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper:hover img{
            transform: scale(1.5);
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper:nth-child(odd){
            transform: translateY(-20px);
        }
        .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper:nth-child(even){
            transform: translateY(20px);
        }
        .newarrivals-contentRight .newarrivals-content{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }
        .newarrivals-contentRight .newarrivals-content h4{
            font-size: 22px;
            font-weight: 400;
            color: #111;
        }
        .newarrivals-contentRight .newarrivals-content h2{
            font-size: 40px;
            color: #1e272e;
        }
        .newarrivals-contentRight .newarrivals-content p{
            font-size: 16px;
            color: #343434;
            line-height: 28px;
            padding-bottom: 10px;
        }
        .newarrivals-contentRight .newarrivals-content a{
            display: inline-block;
            text-decoration: none;
            font-size: 16px;
            letter-spacing: 1px;
            padding: 13px 30px;
            color: #fff;
            background: #111;
            border-radius: 8px;
            user-select: none;
        }
        @media(max-width: 768px){
            .newarrivals-container{
                grid-template-columns: 1fr;
            }
            .newarrivals-contentLeft .newarrivals-row{
                grid-template-columns: repeat(2, 1fr);
            }
            .newarrivals-contentLeft .newarrivals-row .newarrivals-imgWrapper{
                height: 150px;
            }
            .newarrivals-contentRight .newarrivals-content h4{
                font-size: 18px;
            }
            .newarrivals-contentRight .newarrivals-content h2{
                font-size: 30px;
            }
        }
        
        /* Custom CSS to reduce padding for Our Story heading */
        .reduced-padding-heading .l-hero__headings {
            padding: 20px 32px !important;
        }
        
        /* Hide scrollbar for mobile horizontal scroll */
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        
        /* Auto-scroll animation for mobile carousel */
        @keyframes scroll-mobile {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
        
        .animate-scroll-mobile {
            animation: scroll-mobile 20s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-12 overflow-hidden">

        <br /><br />
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
            {/* Left Content: Tall Vertical Image with Border Video Button */}
            <div className="relative w-full lg:w-[32%] flex flex-col items-start">
              <div className="relative w-full h-[450px] lg:h-[550px] overflow-hidden">
                <img
                  src="https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg"
                  alt="Modern luxury living room interior"
                  className="w-full h-full object-cover shadow-xl"
                  style={{ objectPosition: 'center', aspectRatio: '3/5' }}
                />
                {/* Watch Video Button at the border, bottom left */}
                <button
                  className="absolute bottom-0 left-0 flex items-center bg-white px-6 py-2 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{ minWidth: 160 }}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">WATCH VIDEO</span>
                </button>
              </div>
            </div>

            {/* Right Content: Floating Card */}
            <div className="relative w-full lg:w-[60%] z-10 flex flex-col justify-center">
              <div className="lg:absolute top-0 left-0 lg:-left-16 bg-white p-8 lg:p-10 shadow-2xl flex flex-col items-start text-left max-w-xl"
                style={{ transform: "translateY(60px)" }}
              >
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">DESIGN AND DECOR GUIDE</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight">
                  Your Space, Reimagined.
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  Every space should reflect beauty, comfort, and individuality.<br />
                  Founded by Chinna Babu K (8+ years experience), we create stunning, affordable interiors.<br />
                  Our team blends fresh ideas with functionality.<br />
                
                </p>
                {/* <button className="px-6 py-2 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors duration-300 mb-6">
                  READ MORE
                </button> */}
                {/* Statistics */}
                <div className="flex space-x-12 mt-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">8+</div>
                    <div className="text-xs text-gray-500">Years of Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">500+</div>
                    <div className="text-xs text-gray-500">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content: Title, Description, and Button */}
            <div className="flex flex-col items-start">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">WHY CHOOSE US</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
                We are committed to transforming your vision into reality with innovative designs, quality materials, and a seamless process. Our experienced team ensures every project is delivered on time, within budget, and tailored to your unique style and needs.
              </p>
              <button className="px-8 py-3 bg-black text-white text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors duration-300">
                LEARN MORE
              </button>
            </div>

            {/* Right Content: Four Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Fast Building */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="text-2xl text-gray-800 mb-3">
                  <i className="fas fa-clock" style={{ color: 'black' }}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Fast Building</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We deliver projects quickly and efficiently, ensuring minimal disruption and timely completion for your peace of mind.
                </p>
              </div>

              {/* Card 2: Smartly Execute */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="text-2xl text-gray-800 mb-3">
                  <i className="fas fa-lightbulb" style={{ color: 'black' }}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Smart Execution</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our team combines creativity with technical expertise to execute every detail with precision and intelligence.
                </p>
              </div>

              {/* Card 3: Carefully Planned */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="text-2xl text-gray-800 mb-3">
                  <i className="fas fa-file-pen" style={{ color: 'black' }}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Carefully Planned</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every project is meticulously planned, from concept to completion, to ensure a smooth and stress-free experience.
                </p>
              </div>

              {/* Card 4: Perfect Design */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="text-2xl text-gray-800 mb-3">
                  <i className="fas fa-pencil-ruler" style={{ color: 'black' }}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Perfect Design</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We create beautiful, functional spaces that reflect your personality and enhance your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Company Statistics Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="w-full relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">PROFESSIONAL HOME INTERIOR DESIGN COMPANY</h2>
          </div>

          {/* Statistics Grid */}
          <div className="lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-6 xl:gap-10 lg:px-8">
            {/* Mobile: Auto-scrolling Carousel */}
            <div className="lg:hidden relative w-full overflow-hidden">
              <div className="flex animate-scroll-mobile gap-8 py-4" style={{ width: 'calc(200% + 32px)' }}>
                {/* First set of circles */}
                <div className="flex gap-8 min-w-full justify-start pl-4">
                  {/* Since 2004 */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                      <div className="text-sm font-semibold mb-1 text-sky-500">SINCE</div>
                      <div className="text-xl font-bold text-gray-800">2017</div>
                    </div>
                  </div>

                  {/* Premium Materials */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                      <div className="text-sm font-semibold mb-1 text-sky-500">PREMIUM</div>
                      <div className="text-sm font-bold text-gray-800">Materials</div>
                    </div>
                  </div>

                  {/* 10 Years Warranty - Center Circle */}
                 
                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-500 to-sky-300">
                      <div className="text-sm font-semibold mb-1 text-white">COMPLETION</div>
                      <div className="text-xs font-bold text-white">45 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                      <div className="text-sm font-semibold mb-1 text-sky-500">PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">30 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
               
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex gap-8 min-w-full justify-start pl-4">
                  {/* Since 2004 */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                      <div className="text-sm font-semibold mb-1 text-sky-500">SINCE</div>
                      <div className="text-xl font-bold text-gray-800">2017</div>
                    </div>
                  </div>

                  {/* Premium Materials */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                      <div className="text-sm font-semibold mb-1 text-sky-500">PREMIUM</div>
                      <div className="text-sm font-bold text-gray-800">Materials</div>
                    </div>
                  </div>

                  {/* 10 Years Warranty - Center Circle */}
              

                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-500 to-sky-300">
                      <div className="text-sm font-semibold mb-1 text-white">COMPLETION</div>
                      <div className="text-xs font-bold text-white">45 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                      <div className="text-sm font-semibold mb-1 text-sky-500">PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">30 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                      <div className="text-sm font-semibold mb-1 text-sky-500">LIFELONG</div>
                      <div className="text-xs font-bold text-gray-800">Service Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Original Layout */}
            <div className="hidden lg:contents">
              {/* Since 2004 */}
              <div className="text-center">
                <div className="w-44 h-44 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                  <div className="text-lg font-semibold mb-2 text-sky-500">SINCE</div>
                  <div className="text-2xl font-bold text-gray-800">2017</div>
                </div>
              </div>

              {/* Premium Materials */}
              <div className="text-center">
                <div className="w-44 h-44 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                  <div className="text-lg font-semibold mb-2 text-sky-500">PREMIUM</div>
                  <div className="text-lg font-bold text-gray-800">Materials</div>
                </div>
              </div>

              {/* 10 Years Warranty - Center Circle */}
         

              {/* Completion */}
              <div className="text-center">
                <div className="w-44 h-44 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-500 to-sky-300">
                  <div className="text-lg font-semibold mb-2 text-white">COMPLETION</div>
                  <div className="text-lg font-bold text-white">45 Working Days</div>
                </div>
              </div>

              {/* Projects */}
              <div className="text-center">
                <div className="w-44 h-44 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                  <div className="text-lg font-semibold mb-2 text-sky-500">PROJECTS</div>
                  <div className="text-lg font-bold text-gray-800">30 Per Month</div>
                </div>
              </div>

              {/* Lifelong Service */}
              <div className="text-center">
                <div className="w-44 h-44 border-2 border-sky-500 rounded-full flex flex-col items-center justify-center bg-white">
                  <div className="text-lg font-semibold mb-2 text-sky-500">LIFELONG</div>
                  <div className="text-lg font-bold text-gray-800">Service Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Note Section */}
      <div className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={founder} 
                  alt="Chinna Babu K, Founder & CEO" 
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Founder's Note Content */}
            <div className="space-y-5 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 leading-tight font-poppins">
                Our founder
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Every home tells a story, and every space deserves to reflect the dreams and aspirations of those who inhabit it. 
                  Over the past 8 years, I've had the privilege of transforming countless houses into homes that truly resonate 
                  with their owners' personalities and lifestyles.
                </p>
                
                
                
                <p className="font-semibold text-gray-800 text-xl">
                  I founded Design & Decor Guide to bridge the gap between dreams and reality, one beautiful space at a time.
                </p>
              </div>

              {/* Founder Signature */}
              <div className="pt-8">
                <p className="font-bold text-gray-800 mb-4 text-xl">Chinna Babu K, Founder & CEO</p>
                <div className="w-56 h-20 bg-contain bg-no-repeat" 
                     style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 250 80\'%3E%3Cpath d=\'M15 40 Q35 20, 55 40 T95 40 Q115 20, 135 40 T175 40\' stroke=\'%23374151\' stroke-width=\'3\' fill=\'none\'/%3E%3C/svg%3E")' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     

      {/* Our Trusted Partners Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Khand, sans-serif' }}>
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry-leading brands to bring you the finest materials and innovative solutions for your dream home.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={asianpaints} 
                alt="Asian Paints" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={kajaria} 
                alt="Kajaria" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={mytyles} 
                alt="MyTyles" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={quartizo} 
                alt="Quartizo" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={simens} 
                alt="Siemens" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={centuryply} 
                alt="centuryply" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={philips} 
                alt="philips" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={crompton} 
                alt="crompton" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={godrej} 
                alt="godrej" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={hettich} 
                alt="hettich" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={saintgobain} 
                alt="saintgobain" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={dulux} 
                alt="dulux" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={wipro} 
                alt="wipro" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={johnson} 
                alt="johnson" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src={merino} 
                alt="merino" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;