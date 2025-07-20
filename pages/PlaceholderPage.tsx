import React from 'react';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

interface PlaceholderPageProps {
  title: string;
  message: string;
}

const PlaceholderPage = ({ title, message }: PlaceholderPageProps) => {
  const { setView } = useAppContext();

  return (
    <div className="text-center py-20 font-poppins container mx-auto px-6">
      <h1 className="text-4xl font-playfair font-bold text-stone-800 mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{message}</p>
      <button onClick={() => setView(View.HOME)} className="bg-stone-700 text-white px-8 py-3 rounded-md hover:bg-stone-800 transition-colors">
        Back to Home
      </button>
    </div>
  );
};

export default PlaceholderPage;
