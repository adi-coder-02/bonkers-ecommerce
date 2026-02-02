import React from "react";
import contact from '../images/contact.png'


const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-600">
          CONTACT <span className="font-bold text-gray-800">US</span>
          <span className="ml-4 inline-block w-12 h-0.5 bg-gray-400"></span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <img
            src={contact}
            alt="Workspace with laptop, coffee, succulent plant and smartphone"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">Our Store</h3>
            <p className="text-gray-700">54709 Willms Station</p>
            <p className="text-gray-700">Suite 350, Washington, USA</p>
          </div>

          <div className="pt-2">
            <p className="text-gray-700">
              <span className="font-medium">Tel:</span> (415) 555-0132
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:admin@forever.com" className="text-blue-600 hover:underline">
                admin@forever.com
              </a>
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Careers at Forever</h3>
            <p className="text-gray-700 mb-4">
              Learn more about our teams and job openings
            </p>
            <button className="border-2 border-gray-800 text-gray-800 font-medium px-8 py-2 transition-colors hover:bg-gray-800 hover:text-white">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;