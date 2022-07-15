import React from 'react';
import '../App.css';

import './HeroSection.css';


function HeroTrailers() {
  return (
    
    <div className='hero-container'>
      <h1>Volver al Futuro</h1>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      
     
    </div>
  );
}

export default HeroTrailers;