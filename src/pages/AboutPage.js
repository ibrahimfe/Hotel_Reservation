import React from 'react'; // Mengimpor CSS dari komponen About
import About from '../components/About';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';

const AboutPages = () => {
   return (
      <div>
         <About />
         <Facilities />
         <Footer />
      </div>
   );
}

export default AboutPages; // Mengexport komponen AboutPages