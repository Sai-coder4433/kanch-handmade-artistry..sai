import React from 'react';
import { CloseIcon } from '../constants';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
    const { setView, user } = useAppContext();

    const handleNavigation = (view: View) => {
        setView(view);
        onClose();
    }

  const menuItems = [
    { label: 'My Orders', view: View.ORDERS, requireAuth: true },
    { label: 'My Cart', view: View.CART, requireAuth: false },
    { label: 'Contact Us', view: View.CONTACT, requireAuth: false },
    { label: 'Join as Artist', view: View.JOIN_ARTIST, requireAuth: false },
    { label: 'Payment Gateway', view: View.PAYMENT, requireAuth: false },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="font-playfair text-2xl font-bold text-stone-800">Menu</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                <CloseIcon className="w-7 h-7" />
            </button>
        </div>
        <nav className="p-6 font-poppins">
            <ul>
                {menuItems.map((item) => {
                    if (item.requireAuth && !user) return null;
                    return (
                        <li key={item.label} className="mb-4">
                            <a 
                                href="#" 
                                onClick={(e) => { e.preventDefault(); handleNavigation(item.view); }}
                                className="text-lg text-gray-700 hover:text-stone-700 hover:pl-2 transition-all duration-200 block"
                            >
                                {item.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
