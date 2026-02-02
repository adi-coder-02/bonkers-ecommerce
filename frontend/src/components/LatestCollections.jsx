// src/components/LatestCollections.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from './ProductCard';

const LatestCollections = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="text-gray-700">LATEST</span>{' '}
          <span className="font-bold text-black">COLLECTIONS</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem Ipsum is dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
