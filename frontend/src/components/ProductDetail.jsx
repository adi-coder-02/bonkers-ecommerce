import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Use CartContext here
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch product');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  const handleAddToCart = () => {
  addToCart(product);  // your existing addToCart call
  toast.success('Added to cart!');
};

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-contain rounded-lg"
          style={{ maxHeight: '400px' }}
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-green-700 font-semibold mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>
          <button
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
