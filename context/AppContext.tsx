import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product, CartItem, User, View } from '../types';

interface AppContextType {
  user: User | null;
  cart: CartItem[];
  currentView: View;
  selectedProduct: Product | null;
  login: (email: string) => void;
  logout: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  setView: (view: View, product?: Product) => void;
  cartCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const login = (email: string) => setUser({ email });
  const logout = () => setUser(null);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const setView = (view: View, product?: Product) => {
    setCurrentView(view);
    if (view === View.PRODUCT_DETAIL && product) {
        setSelectedProduct(product);
    } else {
        setSelectedProduct(null);
    }
    window.scrollTo(0, 0);
  };
  
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    user,
    cart,
    currentView,
    selectedProduct,
    login,
    logout,
    addToCart,
    removeFromCart,
    updateQuantity,
    setView,
    cartCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
