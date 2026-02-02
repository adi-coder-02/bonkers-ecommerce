// src/components/HeroSection.jsx
import React from 'react';
import heroImage from '../images/hero.png'; // Rename your image and adjust path

const HeroSection = () => {
  return (
    <section className="w-full py-10">
        <div className="max-w-6xl mx-auto border-2 border-gray-300 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center items-start px-10 py-20 bg-white">
          <p className="text-sm text-gray-600 font-semibold flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gray-800"></span> OUR BESTSELLERS
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 my-4">Latest Arrivals</h1>
          <button className="mt-6 text-sm font-semibold tracking-wide text-gray-800 flex items-center gap-2 group">
            SHOP NOW
            <span className="w-10 h-[1px] bg-gray-800 transition-all group-hover:w-16"></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="bg-pink-100 flex items-center justify-center outline-none">
          <img src={heroImage} alt="Hero" className="object-contain h-full w-full max-h-[500px]" />
        </div>
      </div>
        </div>
    </section>
  );
};

export default HeroSection;
