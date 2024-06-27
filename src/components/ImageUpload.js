import React from 'react';
import './ImageUpload.css';

const ImageUpload = () => {
  return (
    <section className="container" style={{ backgroundColor: '#466995' }}>
      <div className="content">
        <div className="welcome">
        </div>
        <div className="imageLinks">
          <div className="imageLink">
            <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg" alt="Entire Villa" />
          </div>
          <div className="imageLink">
            <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg" alt="Entire Bungalow" />
          </div>
          <div className="imageLink">
            <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg" alt="Entire House" />
          </div>
        </div>
        <div className="aboutParis">
          <h3>More about Paris</h3>
          <p>
            10 Fun Facts About Paris, France: Paris, the capital of France, is one of the most visited cities in the world. It is known for its art, fashion, culture, and history...
            Top Reasons to Visit Paris: The City of Love and Lights: Paris is a city that is full of romance, culture, and history...
            How to Go to Paris: Your Ultimate Travel Guide: Paris is easily accessible by plane, train, or car...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
