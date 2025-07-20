import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

const HeroSection = () => {
    const { setView } = useAppContext();
    const categories = ["Lippan Art", "Gifting", "Wall Decor"];
  
    return (
      <div className="bg-amber-100/50">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-stone-800">Artistry in Every Detail</h1>
          <p className="text-lg md:text-xl text-stone-600 mt-4 max-w-2xl mx-auto font-poppins">
            Discover unique, handcrafted pieces that bring stories to life. From traditional Lippan art to personalized gifts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button 
                key={category}
                className="bg-white text-stone-700 font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:bg-stone-700 hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-8 font-playfair">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
