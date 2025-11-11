import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/About/AboutSection';
import HeroFeatures from "./components/HeroFeatures";
import Services from "./components/Services"; // or ./components/Services
import WhoWeAre from "./components/WhoWeAre";





function App() {
  return (
    <div className="App">
    
      
      <HeroSection/>
      <Navbar />
      <AboutSection/>
      <Services/>
      <WhoWeAre />
      
      {/* <HeroFeatures /> */}

      
    </div>
  );
}

export default App;