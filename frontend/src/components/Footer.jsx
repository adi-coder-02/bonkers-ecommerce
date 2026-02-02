import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold font-sans tracking-widest">
            BONKERS<span className="text-pink-400">.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Bonkers is all about pushing fashion boundaries. We blend style with bold attitude,
            helping you express yourself without compromise. From city streets to weekend vibes —
            stay wild, dress Bonkers.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-500">Home</a></li>
            <li><a href="/about" className="hover:text-pink-500">About Us</a></li>
            <li><a href="/delivery" className="hover:text-pink-500">Delivery</a></li>
            <li><a href="/privacy-policy" className="hover:text-pink-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm">
            <li>+91-000-000-0000</li>
            <li>support@bonkerswear.com</li>
            <li><a href="https://instagram.com/bonkerswear" target="_blank" rel="noreferrer" className="hover:text-pink-500">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
