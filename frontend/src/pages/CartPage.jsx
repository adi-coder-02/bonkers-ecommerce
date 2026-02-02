import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // use CartContext here
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p>${product.price} x {quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={quantity}
                min="1"
                className="w-16 border p-1 text-center"
                onChange={(e) =>
                  updateQuantity(product.id, Number(e.target.value))
                }
              />
              <button
                className="text-red-600 hover:underline"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-8">
          <h2 className="text-xl font-bold">Total: ${getTotalPrice()}</h2>
          <button
            onClick={() => navigate('/checkout')}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
