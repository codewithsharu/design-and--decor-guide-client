import React, { useEffect, useState } from 'react';

import Hero from '../components/Layout/Hero';

import Aboutus1 from '../components/Products/NewArrivals';

import Category from './Category';

import PortfolioCarousel from './PortfolioCarousel';

import Services from './Services';


import Showcase from './Showcase'

import Reviews from './Reviews'

import WorkProcess from './WorkProcess';

import WhyChooseUs from './Whychooseus';

import Hiw  from './Hiw1';


const Home = () => {

  return (
    <div className="min-h-screen">
      <Hero />

      <Aboutus1/>
      <Category/>

      <Showcase/>
      
      {/* <Services/> */}
      {/* <WorkProcess/> */}
      <Hiw/>
      {/* <WhyChooseUs/> */}
      <Reviews/>
    </div>
  );
};

export default Home;