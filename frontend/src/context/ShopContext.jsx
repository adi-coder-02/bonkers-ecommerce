// src/context/ShopContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create context
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products'); // change this to your API URL
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};
