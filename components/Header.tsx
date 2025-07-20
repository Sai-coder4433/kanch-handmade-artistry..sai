import React, { useState } from 'react';
import { UserIcon, CartIcon, MenuIcon } from '../constants';
import SideMenu from './SideMenu';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { setView, user, logout, cartCount } = useAppContext();

  const handleProfileClick = () => {
    if (!user) {
      setView(View.SIGN_IN);
    } else {
      setIsProfileOpen(prev => !prev);
    }
  };

  return (
    <>
      <header className="sticky top-0 bg-[#FFF8F0]/80 backdrop-blur-md z-30 shadow-sm font-poppins">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 cursor-pointer"
            onClick={() => setView(View.HOME)}
          >
            KANCH
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="relative">
              <button 
                onClick={() => setView(View.CART)} 
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                <CartIcon className="w-7 h-7" />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                    </span>
                )}
              </button>
            </div>
            <div className="relative">
              <button onClick={handleProfileClick} className="text-stone-700 hover:text-stone-900 transition-colors">
                <UserIcon className="w-7 h-7" />
              </button>
              {isProfileOpen && user && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-40">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">{user.email}</div>
                  <a href="#" onClick={(e) => { e.preventDefault(); setView(View.ORDERS); setIsProfileOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); logout(); setIsProfileOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                </div>
              )}
            </div>
            <button onClick={() => setIsMenuOpen(true)} className="text-stone-700 hover:text-stone-900 transition-colors">
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
