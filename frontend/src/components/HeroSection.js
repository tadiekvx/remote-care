import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero-image.jpg';

const HeroSection = () => {
  return (
    <section 
      className="flex flex-col md:flex-row justify-between items-center bg-gray py-32 px-8 relative overflow-hidden" 
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-gray-800 bg-opacity-60 w-full md:w-1/2 p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-4 text-white">Your Health, Our Priority</h2>
        <p className="text-lg mb-6 text-gray">
          CareConnect is your trusted healthcare companion. Book appointments, get matched with doctors, and manage your medical records, all in one place.
        </p>
        <Link to="/appointment">
          <button className="bg-nude text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-green transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
