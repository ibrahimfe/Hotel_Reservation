import React from 'react';
import './About.css';
import About from './components/About';
import ImageUpload from './components/ImageUpload';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Aboutroute() {
  return (
    <div className="Aboutroute" style={{ backgroundColor: '##EDEFFD' }}>
      <Navbar/>
      
      <header className="App-header">
        <h1>Welcome to Hotel Reservation System</h1>
      </header>
      <About />
      <ImageUpload />
      <Footer />
    </div>
  );
}

export default Aboutroute;
