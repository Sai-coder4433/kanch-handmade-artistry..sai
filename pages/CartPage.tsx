import React from 'react';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, setView } = useAppContext();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 font-poppins container mx-auto px-6">
        <h1 className="text-4xl font-playfair font-bold text-stone-800 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <button onClick={() => setView(View.HOME)} className="bg-stone-700 text-white px-8 py-3 rounded-md hover:bg-stone-800 transition-colors">
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 font-poppins">
      <h1 className="text-4xl font-playfair font-bold text-stone-800 mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-grow">
                <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm mt-1">
                  Remove
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  className="w-16 p-1 border border-gray-300 rounded-md text-center"
                  min="1"
                />
              </div>
              <p className="font-bold text-lg text-stone-800 w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-28">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4">Order Summary</h2>
            <div className="flex justify-between items-center my-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-lg text-stone-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center my-4">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-600">Calculated at next step</span>
            </div>
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <span className="text-xl font-bold text-gray-800">Total</span>
              <span className="text-2xl font-bold text-stone-800">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-stone-700 text-white py-3 rounded-md hover:bg-stone-800 transition-colors font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
