import React from 'react';

import Hero from "../components/Hero";
import Services from "../components/Services"; // you forgot to import Services 😅
import Start from "../components/Start";
import Testimonials from "../components/Testimonial";
import Image from '../components/Image';

const Home = () => {
  return (
    <div>
      <Image />
      <Hero />
      <Services />
       
      <Testimonials />
    </div>
  );
}

export default Home;
