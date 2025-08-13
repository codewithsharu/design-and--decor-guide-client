import React, { useEffect, useState } from 'react';

import Hero from '../components/Layout/Hero';

import Aboutus1 from '../components/Products/NewArrivals';

import Category from './Category';

import PortfolioCarousel from './PortfolioCarousel';

import Services from './Services';

import WhyChooseUs from './Whychooseus';

import Showcase from './Showcase'


const Home = () => {

  return (
    <div className="min-h-screen">
      <Hero />

    

      <Aboutus1/>
  
  <Category/>
  <WhyChooseUs/>
  <Showcase/>

<Services/>

  

  

    </div>
  );
};

export default Home;