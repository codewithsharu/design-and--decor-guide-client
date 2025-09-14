import React from "react";
import PortfolioHeading from "../components/Common/PortfolioHeading";
const images = [
  "https://images.unsplash.com/photo-1568219656968-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Modern living room interior
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80", // Stylish bedroom design
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80", // Contemporary kitchen
  "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Modern interior
];

const AboutUs = () => {
  return (
    <>
    <br /><br />
     
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
        }
        .newarrivals-body{
            width: 100%;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: 'Poppins', sans-serif;
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
      {/* <div className="newarrivals-body">
        <div className="newarrivals-container">
          <div className="newarrivals-contentLeft">
            <div className="newarrivals-row">
              {images.map((src, idx) => (
                <div className="newarrivals-imgWrapper" key={idx}>
                  <img src={src} alt={`Interior design ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="newarrivals-contentRight">
            <div className="newarrivals-content">
              <h4>Welcome To</h4>
              <h2>Design &amp; Decor Guide</h2>
              <p>
                At our studio, we believe every space tells a story. Discover curated collections of modern furniture, elegant decor, and innovative design solutions to elevate your home. From cozy living rooms to serene bedrooms, we blend style and functionality for inspired living.
              </p>
           
            </div>
          </div>
        </div>
      </div> */}

      {/* Our Story Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-2">
           
      <div className="reduced-padding-heading">
        <PortfolioHeading
          headingText="Our Story"
        />
      </div>
      </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
              
                  <span style={{ fontFamily: 'Poppins, sans-serif', color: '#000000', fontWeight: '400', fontSize: '1.2em' }}>Design & Decor Guide</span>
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Design and Decor Guide, we believe every space deserves to reflect beauty, comfort, and individuality. Founded by Chinna Babu K, with over 8 years of experience in interior designing, we specialize in creating stunning house interiors for all types of spaces.


                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our creative design team is passionate about bringing fresh, unique, and innovative ideas to life, ensuring each project is customized to our clients’ lifestyle and vision. We pride ourselves on delivering high-quality designs at affordable prices, blending functionality with style to transform houses into dream homes
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Content */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                  alt="Our design studio" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg transform -rotate-12 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-lg transform rotate-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform scale-110 rotate-6"></div>
            </div>
          </div>

          {/* Mission Statement */}
     
        </div>
      </div>

      {/* Professional Company Statistics Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="w-full relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 tracking-widest" style={{ fontFamily: 'Khand, sans-serif', letterSpacing: '0.2em' }}>
              PROFESSIONAL HOME INTERIOR DESIGN COMPANY
            </h2>
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
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                      <div className="text-xl font-bold text-gray-800">2004</div>
                    </div>
                  </div>

                  {/* Premium Materials */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PREMIUM</div>
                      <div className="text-sm font-bold text-gray-800">Materials</div>
                    </div>
                  </div>

                  {/* 10 Years Warranty - Center Circle */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-40 h-40 border-2 border-black rounded-full flex flex-col items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, rgb(68, 177, 228), rgb(98, 102, 208))' }}>
                      <div className="text-lg font-bold mb-1">10 YEARS</div>
                      <div className="text-sm font-semibold">Warranty</div>
                    </div>
                  </div>

                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                      <div className="text-xs font-bold text-gray-800">40 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">300 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>LIFELONG</div>
                      <div className="text-xs font-bold text-gray-800">Service Support</div>
                    </div>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex gap-8 min-w-full justify-start pl-4">
                  {/* Since 2004 */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                      <div className="text-xl font-bold text-gray-800">2004</div>
                    </div>
                  </div>

                  {/* Premium Materials */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PREMIUM</div>
                      <div className="text-sm font-bold text-gray-800">Materials</div>
                    </div>
                  </div>

                  {/* 10 Years Warranty - Center Circle */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-40 h-40 border-2 border-black rounded-full flex flex-col items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, rgb(68, 177, 228), rgb(98, 102, 208))' }}>
                      <div className="text-lg font-bold mb-1">10 YEARS</div>
                      <div className="text-sm font-semibold">Warranty</div>
                    </div>
                  </div>

                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                      <div className="text-xs font-bold text-gray-800">40 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">300 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>LIFELONG</div>
                      <div className="text-xs font-bold text-gray-800">Service Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Original Layout */}
            <div className="hidden lg:contents">
              {/* Since 2004 */}
              <div className="text-center group">
                <div className="w-44 h-44 border-2 border-black hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                  <div className="text-2xl font-bold text-gray-800">2004</div>
                </div>
              </div>

              {/* Premium Materials */}
              <div className="text-center group">
                <div className="w-44 h-44 border-2 border-black hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>PREMIUM</div>
                  <div className="text-lg font-bold text-gray-800">Materials</div>
                </div>
              </div>

              {/* 10 Years Warranty - Center Circle */}
              <div className="text-center group">
                <div className="w-52 h-52 border-2 border-black rounded-full flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-xl" style={{ background: 'linear-gradient(135deg, rgb(68, 177, 228), rgb(98, 102, 208))' }}>
                  <div className="text-2xl font-bold mb-2">10 YEARS</div>
                  <div className="text-lg font-semibold">Warranty</div>
                </div>
              </div>

              {/* Completion */}
              <div className="text-center group">
                <div className="w-44 h-44 border-2 border-black hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                  <div className="text-lg font-bold text-gray-800">40 Working Days</div>
                </div>
              </div>

              {/* Projects */}
              <div className="text-center group">
                <div className="w-44 h-44 border-2 border-black hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                  <div className="text-lg font-bold text-gray-800">300 Per Month</div>
                </div>
              </div>

              {/* Lifelong Service */}
              <div className="text-center group">
                <div className="w-44 h-44 border-2 border-black hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>LIFELONG</div>
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" 
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

      {/* Our Team Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="mb-8 lg:mb-0">
              <div className="text-green-600 text-sm font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Team
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                TEAM OF DDG
              </h2>
            </div>
            <div className="lg:max-w-md">
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our skilled team continuously innovates, ensuring our design services stay ahead of industry standards.
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Chinna Babu K - Owner */}
            <div className="relative group bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 shadow-2xl border border-blue-100 hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden flex flex-col items-center">
              <div className="flex flex-col items-center relative z-10">
                <div className="w-56 h-56 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-blue-200 group-hover:ring-purple-300 transition-all duration-500 bg-white flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80" 
                    alt="Chinna Babu K, Owner" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="font-extrabold text-gray-900 mb-2 tracking-wide"
                  style={{
                    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                    letterSpacing: '0.04em',
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    fontSmoothing: 'antialiased',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  CHINNA BABU K
                </h3>
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-5 py-2 rounded-full mb-3 shadow">
                  Founder & CEO
                </span>
                
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl px-6 py-3 shadow-inner mt-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="text-blue-700 font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    +91 8618877807
                  </span>
                </div>
              </div>
            </div>


            <div className="relative group bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 shadow-2xl border border-blue-100 hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden flex flex-col items-center">
              <div className="flex flex-col items-center relative z-10">
                <div className="w-56 h-56 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-blue-200 group-hover:ring-purple-300 transition-all duration-500 bg-white flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80" 
                    alt="Chinna Babu K, Owner" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="font-extrabold text-gray-900 mb-2 tracking-wide"
                  style={{
                    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                    letterSpacing: '0.04em',
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    fontSmoothing: 'antialiased',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  CHINNA BABU K
                </h3>
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-5 py-2 rounded-full mb-3 shadow">
                  Founder & CEO
                </span>
                
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl px-6 py-3 shadow-inner mt-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="text-blue-700 font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    +91 8618877807
                  </span>
                </div>
              </div>
            </div>




            <div className="relative group bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 shadow-2xl border border-blue-100 hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden flex flex-col items-center">
              <div className="flex flex-col items-center relative z-10">
                <div className="w-56 h-56 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-blue-200 group-hover:ring-purple-300 transition-all duration-500 bg-white flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80" 
                    alt="Chinna Babu K, Owner" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="font-extrabold text-gray-900 mb-2 tracking-wide"
                  style={{
                    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                    letterSpacing: '0.04em',
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    fontSmoothing: 'antialiased',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                >
                  CHINNA BABU K
                </h3>
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-5 py-2 rounded-full mb-3 shadow">
                  Founder & CEO
                </span>
                
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl px-6 py-3 shadow-inner mt-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="text-blue-700 font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    +91 8618877807
                  </span>
                </div>
              </div>
            </div>


            

            {/* Akhil - Project Manager Hyderabad */}
           

            {/* Ganesh K - Project Manager Visakhapatnam */}

            
            
          </div>

          {/* Contact Summary */}
          
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
                src="/src/assets/asianpaints.jpeg" 
                alt="Asian Paints" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src="/src/assets/kajaria.png" 
                alt="Kajaria" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src="/src/assets/mytyles.png" 
                alt="MyTyles" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src="/src/assets/quartizo.jpeg" 
                alt="Quartizo" 
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6 group">
              <img 
                src="/src/assets/simens.png" 
                alt="Siemens" 
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