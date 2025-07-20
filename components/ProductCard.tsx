import React from 'react';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, setView } = useAppContext();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking the button
    addToCart(product);
  };
  
  const handleCardClick = () => {
    setView(View.PRODUCT_DETAIL, product);
  }

  return (
    <div 
        className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
        onClick={handleCardClick}
    >
      <div className="overflow-hidden h-64">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 font-poppins">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-stone-800">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="bg-stone-700 text-white px-4 py-2 rounded-md hover:bg-stone-800 transition-colors duration-300 text-sm font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
