import React, { useState, useContext, useEffect } from 'react'; // include useEffect
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });


  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (!userInfo) {
    // If not logged in, redirect to login page
    toast.error('Please register or login to place an order');
    navigate('/login');
  }
}, [navigate]);


  const handleSubmit = async (e) => {
  e.preventDefault();

  // Still validate form fields
  if (!form.name || !form.email || !form.address) {
    toast.error('Please fill in all fields');
    return;
  }

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const orderData = {
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    name: form.name,
    email: form.email,
    address: form.address,
  };

  try {
    setOrderPlaced(true);
  } catch (error) {
    toast.error('Failed to place order. Please try again later.');
  }
};


  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg text-center mt-20">
        <h1 className="text-4xl font-extrabold mb-4 text-green-600">Thank you!</h1>
        <p className="mb-6 text-gray-700">Your order has been placed successfully.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-green-600 text-white px-8 py-3 rounded-full shadow hover:bg-green-700 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!cartItems.length) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg text-center mt-20">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Your cart is empty</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-green-600 text-white px-8 py-3 rounded-full shadow hover:bg-green-700 transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-16 p-8 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-3">Order Summary</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.title} className="w-14 h-14 object-contain rounded" />
                  <div>
                    <p className="font-medium text-gray-900">{product.title}</p>
                    <p className="text-sm text-gray-500">${product.price.toFixed(2)} x {quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">${(product.price * quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
            <span>Total</span>
            <span>
              $
              {cartItems
                .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
        </div>

        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Shipping Information</h2>

          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-2 font-medium text-gray-700">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
