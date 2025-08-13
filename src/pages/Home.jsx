import React, { useEffect, useState } from 'react';

import Hero from '../components/Layout/Hero';

import Aboutus1 from '../components/Products/NewArrivals';

import Category from './Category';

import PortfolioCarousel from './PortfolioCarousel';

import Services from './Services';


const Home = () => {

  return (
    <div className="min-h-screen">
      <Hero />

    

      <Aboutus1/>
  
  <Category/>
<Services/>
  

  

    </div>
  );
};

export default Home;