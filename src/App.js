import React from 'react';
import About from './components/About';
import Hero from './components/Hero';

import Navbar from './components/Navbar';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Support from './components/Support';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services/>
      <About/>
      <Support/>
      <Pricing/>
      <Footer/>
  
  
    </div>
  );
}

export default App;
