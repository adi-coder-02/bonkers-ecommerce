import React from 'react';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="relative group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
          <p className="mt-1 font-semibold text-gray-900">${product.price}</p>
        </div>

        {/* Hover Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            onClick={(e) => e.preventDefault()} // Prevent click bubbling to Link for buttons
          >
            <FaHeart className="text-red-500" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            onClick={(e) => e.preventDefault()} // Same here
          >
            <FaShoppingBag className="text-green-600" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
