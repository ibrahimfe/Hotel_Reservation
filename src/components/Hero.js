import React from 'react';
import headerImage from '../assets/header.jpg';  // Import gambar header.jpg dari folder src/assets

function Hero() {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ 
      backgroundImage: `url(${headerImage})`  // Menggunakan variabel headerImage yang berisi path gambar
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="md:text-5xl font-bold text-white">Discover Extraordinary Comfort in Hotels</h1>
        <p className="text-xl md:text-2xl mt-4 text-white">Book a Room</p>
        <div className="mt-4 flex">
          <input type="date" className="p-2 rounded-l bg-white" />
          <button className="p-2 bg-[#F58F29] text-white rounded-r">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
