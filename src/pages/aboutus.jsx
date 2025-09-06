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
      <div className="newarrivals-body">
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
      </div>

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
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                      <div className="text-xl font-bold text-gray-800">2004</div>
                    </div>
                  </div>

                  {/* Premium Materials */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PREMIUM</div>
                      <div className="text-sm font-bold text-gray-800">Materials</div>
                    </div>
                  </div>

                  {/* 10 Years Warranty - Center Circle */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, rgb(68, 177, 228), rgb(98, 102, 208))' }}>
                      <div className="text-lg font-bold mb-1">10 YEARS</div>
                      <div className="text-sm font-semibold">Warranty</div>
                    </div>
                  </div>

                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                      <div className="text-xs font-bold text-gray-800">40 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">300 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>LIFELONG</div>
                      <div className="text-xs font-bold text-gray-800">Service Support</div>
                    </div>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex gap-8 min-w-full justify-start pl-4">
                  {/* Since 2004 */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                      <div className="text-xl font-bold text-gray-800">2004</div>
                    </div>
                  </div>

                  {/* Premium Materials */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PREMIUM</div>
                      <div className="text-sm font-bold text-gray-800">Materials</div>
                    </div>
                  </div>

                  {/* 10 Years Warranty - Center Circle */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ background: 'linear-gradient(135deg, rgb(68, 177, 228), rgb(98, 102, 208))' }}>
                      <div className="text-lg font-bold mb-1">10 YEARS</div>
                      <div className="text-sm font-semibold">Warranty</div>
                    </div>
                  </div>

                  {/* Completion */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                      <div className="text-xs font-bold text-gray-800">40 Working Days</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-semibold mb-1" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                      <div className="text-xs font-bold text-gray-800">300 Per Month</div>
                    </div>
                  </div>

                  {/* Lifelong Service */}
                  <div className="text-center flex-shrink-0">
                    <div className="w-36 h-36 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <div className="w-44 h-44 border-4 border-gray-200 hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>SINCE</div>
                  <div className="text-2xl font-bold text-gray-800">2004</div>
                </div>
              </div>

              {/* Premium Materials */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-gray-200 hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>PREMIUM</div>
                  <div className="text-lg font-bold text-gray-800">Materials</div>
                </div>
              </div>

              {/* 10 Years Warranty - Center Circle */}
              <div className="text-center group">
                <div className="w-52 h-52 rounded-full flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-xl" style={{ background: 'linear-gradient(135deg, rgb(68, 177, 228), rgb(98, 102, 208))' }}>
                  <div className="text-2xl font-bold mb-2">10 YEARS</div>
                  <div className="text-lg font-semibold">Warranty</div>
                </div>
              </div>

              {/* Completion */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-gray-200 hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>COMPLETION</div>
                  <div className="text-lg font-bold text-gray-800">40 Working Days</div>
                </div>
              </div>

              {/* Projects */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-gray-200 hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>PROJECTS</div>
                  <div className="text-lg font-bold text-gray-800">300 Per Month</div>
                </div>
              </div>

              {/* Lifelong Service */}
              <div className="text-center group">
                <div className="w-44 h-44 border-4 border-gray-200 hover:border-blue-300 rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white">
                  <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(68, 177, 228)' }}>LIFELONG</div>
                  <div className="text-lg font-bold text-gray-800">Service Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Note Section */}
      <div className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src="/src/assets/founder-image.jpg" 
                  alt="Jean-Baptiste Duprieu, Founder & CEO" 
                  className="w-80 h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Founder's Note Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Khand, sans-serif' }}>
                A note from our founder.
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Suffering from a chronic disease or going through extensive and painful medical treatments is the 
                  daily reality of many around us. Throughout my life, I've watched too many loved ones enter this 
                  cycle of pain. A cycle that some exited successfully and others who didn't, leaving us with more 
                  questions than answers. However to the question « could this have been avoided? », the answer 
                  was a resounding YES in 80%!(check and link US public health stats) of cases, ONLY IF warning 
                  signs of their condition had been caught earlier.
                </p>
                
              
                
                <p>
                  We need this technology to be built into our lives.
                </p>
                
                <p className="font-semibold text-gray-800">
                  I started Cura to make this goal a reality.
                </p>
              </div>

              {/* Founder Signature */}
              <div className="pt-6">
                <p className="font-bold text-gray-800 mb-2">Jean-Baptiste Duprieu, Founder & CEO.</p>
                <div className="w-48 h-16 bg-contain bg-no-repeat" 
                     style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 60\'%3E%3Cpath d=\'M10 30 Q30 10, 50 30 T90 30\' stroke=\'%23374151\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;