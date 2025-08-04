import React, { useEffect, useState } from 'react';

import Hero from '../components/Layout/Hero';

import Aboutus1 from '../components/Products/NewArrivals';

import Category from './Category';

import PortfolioCarousel from './PortfolioCarousel';


const Home = () => {

  return (
    <div className="min-h-screen">
      <Hero />

      <PortfolioCarousel/>

      <Aboutus1/>
  
  <Category/>

    </div>
  );
};

export default Home;