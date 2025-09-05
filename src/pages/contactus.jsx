import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden bg-white pt-20 lg:pt-24">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5f5f5' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-10 lg:py-12 relative z-10 gap-8 lg:gap-16">
        {/* Left: Contact Form */}
        <div className="flex-1 flex flex-col justify-center max-w-[700px]">
          <h1
            className="mb-8 uppercase text-[#1a1a1a]"
            style={{
              fontFamily: 'Khand, sans-serif',
              fontSize: 'clamp(2rem, 6vw, 44px)',
              fontWeight: '500',
              lineHeight: 'clamp(2.5rem, 7vw, 48px)',
              letterSpacing: '2px'
            }}
          >
            FEEL FREE TO CONTACT US
          </h1>
          <p
            className="mb-16 text-[#2a2a2a] uppercase opacity-90"
            style={{
              fontFamily: 'Khand, sans-serif',
              fontSize: 'clamp(1.1rem, 4vw, 20px)',
              fontWeight: '600',
              lineHeight: 'clamp(1.3rem, 5vw, 24px)',
              letterSpacing: '1.2px'
            }}
          >
            WE WILL BE HAPPY TO HEAR FROM YOU
          </p>
          <form className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <label className="mb-2 text-base font-semibold text-[#1a1a1a] uppercase tracking-[1.5px]" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'15px'}}>
                  FIRST NAME
                </label>
                <input type="text" 
                       className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] text-gray-700 focus:outline-none focus:border-[#000000] focus:border-b-2 py-2 text-xl font-light transition-all duration-300" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif'}} />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-2 text-base font-semibold text-[#1a1a1a] uppercase tracking-[1.5px]" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'15px'}}>
                  LAST NAME
                </label>
                <input type="text" 
                       className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] text-gray-700 focus:outline-none focus:border-[#000000] focus:border-b-2 py-2 text-xl font-light transition-all duration-300" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif'}} />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <label className="mb-2 text-base font-semibold text-[#1a1a1a] uppercase tracking-[1.5px]" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'15px'}}>
                  CONTACT NUMBER
                </label>
                <input type="text" 
                       className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] text-gray-700 focus:outline-none focus:border-[#000000] focus:border-b-2 py-2 text-xl font-light transition-all duration-300" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif'}} />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="mb-2 text-base font-semibold text-[#1a1a1a] uppercase tracking-[1.5px]" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'15px'}}>
                  EMAIL
                </label>
                <input type="email" 
                       className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] text-gray-700 focus:outline-none focus:border-[#000000] focus:border-b-2 py-2 text-xl font-light transition-all duration-300" 
                       style={{fontFamily:'Arial, Helvetica, sans-serif'}} />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-[#1a1a1a] uppercase tracking-[1.5px]" 
                     style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'13px'}}>
                APPARTMENT / VILLA, PROJECT NAME
              </label>
              <input type="text" 
                     className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] text-gray-700 focus:outline-none focus:border-[#000000] focus:border-b-2 py-2 text-lg font-light transition-all duration-300" 
                     style={{fontFamily:'Arial, Helvetica, sans-serif'}} />
            </div>
            <button type="submit" 
                    className="mt-6 px-16 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold tracking-[2px] uppercase bg-transparent hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 text-base transform hover:scale-105" 
                    style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'15px', fontWeight:'600'}}>
              SEND MESSAGE
            </button>
          </form>
        </div>
        
        {/* Right: Office Info */}
        <div className="w-full lg:w-[450px] xl:w-[500px] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 lg:p-12 flex flex-col justify-between rounded-2xl shadow-2xl border border-[#c5a46d]/20 backdrop-blur-sm min-h-[550px] lg:min-h-[580px]">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-4 tracking-wider uppercase" 
                style={{fontFamily:'Khand, sans-serif', letterSpacing:'1.5px', fontWeight:'400', color: 'rgb(68, 177, 228)'}}>
              OUR OFFICE
            </h2>
            <div className="w-full h-[2px] bg-red-500 mb-8"></div>
            
            <div className="mb-8 lg:mb-9">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center ">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(68, 177, 228)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="text-lg lg:text-xl font-semibold tracking-wider uppercase mt-1" 
                      style={{fontFamily:'Khand, Arial, sans-serif', letterSpacing:'1px', fontWeight:'600', color: 'rgb(255, 255, 255)'}}>
                  OUR LOCATION
                </span>
              </div>
              <p className="text-[#e5e5e5] text-base lg:text-lg ml-11 leading-relaxed font-light" 
                 style={{fontFamily:'Arial, Helvetica, sans-serif', lineHeight:'1.6'}}>
                3rd floor, Purnachandra Towers,<br />
                1769, 1st Cross Road, Agara,<br />
                1st Sector, HSR Layout,<br />
                Bengaluru, Karnataka 560102
              </p>
            </div>
            
            <div className="mb-8 lg:mb-10">
            <div className="flex items-center gap-4 mb-4">
  <div className="w-10 h-10 flex items-center justify-center">
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(68, 177, 228)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6.5L12 13L2 6.5" />
    </svg>
  </div>
  <span
    className="text-lg lg:text-xl font-semibold tracking-wider uppercase"
    style={{
      fontFamily: "Khand, Arial, sans-serif",
      letterSpacing: "1px",
      fontWeight: "600",
      color: "rgb(255, 255, 255)",
    }}
  >
    MAIL US AT
  </span>
</div>

              <a href="mailto:ipsita.p@houzeome.com" 
                 className="text-[#e5e5e5] ml-11 hover:text-[#c5a46d] transition-colors duration-300 text-base lg:text-lg font-light underline decoration-[#c5a46d]/50 hover:decoration-[#c5a46d]" 
                 style={{fontFamily:'Arial, Helvetica, sans-serif'}}>
                ipsita.p@houzeome.com
              </a>
            </div>
          </div>
          
          <div className="border-t-2 border-red-500 pt-6">
            <div className="font-semibold tracking-wider mb-6 uppercase text-lg lg:text-xl" 
                 style={{fontFamily:'Khand, Arial, sans-serif', letterSpacing:'1px', fontWeight:'600', color: 'rgb(255, 255, 255)'}}>
              FOLLOW US AT
            </div>
            <div className="flex gap-4">
              <a href="#" 
                 className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E4405F] to-[#C13584] text-white text-lg lg:text-xl hover:scale-110 transition-transform duration-300 shadow-lg" 
                 title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" 
                 className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0077b5] to-[#005885] text-white text-lg lg:text-xl hover:scale-110 transition-transform duration-300 shadow-lg" 
                 title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" 
                 className="w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF0000] to-[#CC0000] text-white text-lg lg:text-xl hover:scale-110 transition-transform duration-300 shadow-lg" 
                 title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="w-full max-w-[900px] mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2014356873533!2d83.3155196!3d17.735145400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39432af31fe3f9%3A0x231bc14bb4a7c86a!2sDesign%20%26%20D%C3%A9cor%20Guide%20by%20MMC!5e0!3m2!1sen!2sin!4v1757096264626!5m2!1sen!2sin" 
              className="w-full aspect-video"
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
