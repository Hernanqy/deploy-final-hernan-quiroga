import React from 'react';
import '../App.css';

import './HeroSection.css';


function HeroSection() {
  return (
    
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1> EL CINE EN SU MAXIMA EXPRESION </h1>
      <p>UN PASAJE A MUNDOS INCREIBLES</p>
    
    </div>
  );
}

export default HeroSection;