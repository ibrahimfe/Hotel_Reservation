import React from 'react';
import headerImage from '../assets/header.jpg';  // Import gambar header.jpg dari folder src/assets

function Hero() {
  return (
    <div id='home' className="relative bg-cover bg-center h-screen" style={{ 
      backgroundImage: `url(${headerImage})`  
      
    }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="md:text-6xl font-bold text-white">Discover Extraordinary Comfort in Hotels</h1>
        <p className="text-xl md:text-2xl mt-4 text-white">Book a Room</p>
        <div className="mt-4 flex space-x-4">
          <button className="p-3 bg-[#F58F29] text-white rounded">List Room</button>
          <button className="p-3 bg-[#F58F29] text-white rounded">Form Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
