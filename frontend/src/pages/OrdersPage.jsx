// src/pages/OrdersPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage (or use an API call)
    const stored = JSON.parse(localStorage.getItem('orders')) || [];
    // Sort newest first
    stored.sort((a, b) => new Date(b.date) - new Date(a.date));
    setOrders(stored);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Orders</h1>
        <p className="text-gray-600">You haven’t placed any orders yet.</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-lg font-semibold">Order #{order.id}</p>
              <p className="text-gray-500 text-sm">
                {new Date(order.date).toLocaleString()}
              </p>
            </div>
            <Link to={`/order/${order.id}`} className="text-green-600 hover:underline">
              View Details
            </Link>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {order.items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-contain rounded"
                />
                <div>
                  <p className="font-medium">{product.title}</p>
                  <p className="text-gray-600 text-sm">
                    {quantity} × ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-lg font-semibold">
              Total: $
              {order.items
                .reduce((sum, i) => sum + i.product.price * i.quantity, 0)
                .toFixed(2)}
            </p>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {order.status || 'Pending'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
