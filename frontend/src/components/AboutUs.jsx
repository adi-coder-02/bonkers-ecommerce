import React from "react";
import about from '../images/about.png'

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-600">
          ABOUT <span className="font-bold text-gray-800">US</span>
          <span className="ml-4 inline-block w-12 h-0.5 bg-gray-400"></span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <img
            src={about}
            alt="Fashion items including jeans, sweater and ankle boots"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-lg">
            Bonkers was born out of a passion for innovation and a desire to revolutionize the way
            people shop online. Our journey began with a simple idea: to provide a platform where
            customers can easily discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>

          <p className="text-gray-700 text-lg">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality
            products that cater to every taste and preference. From fashion and beauty to
            electronics and home essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <h3 className="text-xl font-bold text-gray-800 pt-4">Our Mission</h3>

          <p className="text-gray-700 text-lg">
            Our mission at Forever is to empower customers with choice, convenience, and
            confidence. We're dedicated to providing a seamless shopping experience that exceeds
            expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;