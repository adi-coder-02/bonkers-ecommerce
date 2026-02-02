import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    // You can add your subscription logic here
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Subscribe now & get 20% off
        </h2>
        <p className="text-gray-500 mb-8 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-0 border border-gray-200">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 border-0 focus:outline-none focus:ring-0"
            />
            <button
              onClick={handleSubscribe}
              className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;