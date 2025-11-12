import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/About/AboutSection';
import HeroFeatures from "./components/HeroFeatures";
import Services from "./components/Services"; // or ./components/Services
import WhoWeAre from "./components/WhoWeAre";
import Pricing from "./components/Pricing";
import ExpertiseSection from "./components/ExpertiseSection";





function App() {
  return (
    <div className="App">
    
      
      <HeroSection/>
      <Navbar />
      <AboutSection/>
      <Services/>
      <WhoWeAre />
      <Pricing />
      <ExpertiseSection />
      
      {/* <HeroFeatures /> */}

      
    </div>
  );
}

export default App;