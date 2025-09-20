import React from "react";
import PortfolioHeading from "../components/Common/PortfolioHeading";
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
        
        /* ===== About Section (Our Story) ===== */
        .about-section{
            position:relative;
            padding:120px 0px;
        }
        .about-section .container{max-width:1200px;margin:0 auto;padding:0 16px;}
        .about-section .row{display:flex;flex-wrap:wrap;align-items:center}
        .about-section .content-column,
        .about-section .image-column{flex:0 0 50%;max-width:50%}
        @media (max-width: 991px){
            .about-section .content-column,
            .about-section .image-column{flex:0 0 100%;max-width:100%}
        }
        .about-section .content-column{
            position:relative;
            margin-bottom:40px;
        }
        .about-section .content-column .inner-column{
            position:relative;
            padding-top:50px;
            padding-right:100px;
        }
        .about-section .content-column .text{
            position:relative;
            color:#777777;
            font-size:15px;
            line-height:2em;
            margin-bottom:40px;
        }
        .about-section .content-column .email{
            position:relative;
            color:#252525;
            font-weight:700;
            margin-bottom:50px;
        }
        .about-section .image-column{
            position:relative;
            margin-bottom:50px;
        }
        .about-section .image-column .inner-column{
            position:relative;
            padding:40px 40px 0px 0px;
            margin-left:50px;
        }
        .about-section .image-column .inner-column:after{
            position:absolute;
            content:'';
            right:0px;
            top:0px;
            left:40px;
            bottom:100px;
            z-index:-1;
            border:2px solid #3095d5;
        }
        .about-section .image-column .inner-column .image{position:relative;}
        .about-section .image-column .inner-column .image:before{
            position:absolute;
            content:'';
            left:-50px;
            bottom:-50px;
            width:299px;
            height:299px;
            background:url('https://i.ibb.co/DKn55Qz/pattern-1.jpg') repeat;
        }
        .about-section .image-column .inner-column .image img{
            position:relative;
            width:100%;
            display:block;
        }
        .about-section .image-column .inner-column .image .overlay-box{
            position:absolute;
            left:40px;
            bottom:48px;
        }
        .about-section .image-column .inner-column .image .overlay-box .year-box{
            position:relative;
            color:#252525;
            font-size:24px;
            font-weight:700;
            line-height:1.4em;
            padding-left:125px;
        }
        .about-section .image-column .inner-column .image .overlay-box .year-box .number{
            position:absolute;
            left:0px;
            top:0px;
            width:110px;
            height:110px;
            color:#3095d5;
            font-size:68px;
            font-weight:700;
            line-height:105px;
            text-align:center;
            background-color:#ffffff;
            border:1px solid #000000;
        }
        .about-section .btn-style-three:before {
            position: absolute;
            content: '';
            left: 10px;
            top: 10px;
            z-index: -1;
            right: -10px;
            bottom: -10px;
            background: url(https://i.ibb.co/DKn55Qz/pattern-1.jpg) repeat;
        }
        .about-section .btn-style-three:hover { color: #ffffff; background: #3095d5; }
        .about-section .btn-style-three {
            position: relative;
            line-height: 24px;
            color: #252525;
            font-size: 15px;
            font-weight: 700;
            display: inline-block;
            padding: 11px 40px;
            background-color: #ffffff;
            text-transform: capitalize;
            border: 2px solid #3095d5;
            font-family: 'Arimo', sans-serif;
        }
        .sec-title2{ color:#fff; }
        .sec-title { position: relative; padding-bottom: 40px;  }
        .sec-title .title {
            position: relative;
            color: #3095d5;
            font-size: 18px;
            font-weight: 700;
            padding-right: 50px;
            margin-bottom: 15px;
            display: inline-block;
            text-transform: capitalize;
        }
        .sec-title .title:before {
            position: absolute;
            content: '';
            right: 0px;
            bottom: 7px;
            width: 40px;
            height: 1px;
            background-color: #bbbbbb;
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

      {/* Our Story Section (replaced with About layout) */}
      <section className="about-section">
        <div className="container">
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-md-6 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">About Us</div>
                  <h2>We Are The Leader In <br /> The Interiores</h2>
                </div>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </div>
                <div className="email">Request Quote: <span className="theme_color">info@designdecorguide.com</span></div>
                <a href="about.html" className="theme-btn btn-style-three">Read More</a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-md-6 col-sm-12 col-xs-12">
              <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt="About" />
                  <div className="overlay-box">
                    <div className="year-box"><span className="number">5</span>Years <br /> Experience <br /> Working</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Keep previous small statistics just after About section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              350+
            </div>
            <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              5+
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
                      <div className="text-xl font-bold text-gray-800">2017</div>
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
                 
                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                      <div className="text-xs font-bold text-gray-800">45 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">30 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
               
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex gap-8 min-w-full justify-start pl-4">
                  {/* Since 2004 */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                      <div className="text-xl font-bold text-gray-800">2017</div>
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
              

                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                      <div className="text-xs font-bold text-gray-800">45 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-2 border-black rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">30 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
                  
                </div>
              </div>
            </div>

            {/* Desktop: Original Layout */}
            <div className="hidden lg:contents">
              {/* Since 2004 */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-sky-500 hover:border-sky-600 ring-1 ring-sky-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                  <div className="text-2xl font-bold text-gray-800">2017</div>
                </div>
              </div>

              {/* Premium Materials */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-sky-500 hover:border-sky-600 ring-1 ring-sky-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>PREMIUM</div>
                  <div className="text-lg font-bold text-gray-800">Materials</div>
                </div>
              </div>

              {/* 10 Years Warranty - Center Circle */}
         

              {/* Completion */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-sky-500 hover:border-sky-600 ring-1 ring-sky-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-violet-500 to-sky-300">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(3, 49, 70)' }}>COMPLETION</div>
                  <div className="text-lg font-bold text-gray-800">45 Working Days</div>
                </div>
              </div>

              {/* Projects */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-sky-500 hover:border-sky-600 ring-1 ring-sky-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                  <div className="text-lg font-bold text-gray-800">30 Per Month</div>
                </div>
              </div>

              {/* Lifelong Service */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-sky-500 hover:border-sky-600 ring-1 ring-sky-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
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