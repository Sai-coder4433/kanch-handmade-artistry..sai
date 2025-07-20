import React from 'react';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

const ProductDetailPage = () => {
  const { selectedProduct, addToCart, setView } = useAppContext();

  if (!selectedProduct) {
    return (
      <div className="text-center py-20 font-poppins">
        <p>Product not found.</p>
        <button onClick={() => setView(View.HOME)} className="mt-4 bg-stone-700 text-white px-6 py-2 rounded-md">
            Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img 
            src={selectedProduct.imageUrl} 
            alt={selectedProduct.name} 
            className="w-full h-auto object-cover rounded-md" 
          />
        </div>
        <div>
          <button onClick={() => setView(View.HOME)} className="text-sm text-stone-600 hover:text-stone-800 mb-4">&larr; Back to all products</button>
          <h1 className="text-4xl font-playfair font-bold text-stone-800">{selectedProduct.name}</h1>
          <p className="text-lg text-gray-500 mt-2">{selectedProduct.category}</p>
          <p className="text-4xl font-bold text-stone-800 my-6">${selectedProduct.price.toFixed(2)}</p>
          <p className="text-gray-700 leading-relaxed mb-8">{selectedProduct.description}</p>
          <button
            onClick={() => addToCart(selectedProduct)}
            className="w-full md:w-auto bg-stone-700 text-white px-10 py-4 rounded-md hover:bg-stone-800 transition-colors duration-300 text-lg font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
