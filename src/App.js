import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/About/AboutSection';
import HeroFeatures from "./components/HeroFeatures";




function App() {
  return (
    <div className="App">
    
      
      <HeroSection/>
      <Navbar />
      <AboutSection/>
      {/* <HeroFeatures /> */}

      
    </div>
  );
}

export default App;