import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import SignInPage from './pages/SignInPage';
import PlaceholderPage from './pages/PlaceholderPage';
import { View } from './types';

const CurrentView = () => {
    const { currentView } = useAppContext();

    switch(currentView) {
        case View.HOME:
            return <HomePage />;
        case View.PRODUCT_DETAIL:
            return <ProductDetailPage />;
        case View.CART:
            return <CartPage />;
        case View.ORDERS:
            return <OrdersPage />;
        case View.SIGN_IN:
            return <SignInPage />;
        case View.CONTACT:
            return <PlaceholderPage title="Contact Us" message="This page is under construction. Please check back later." />;
        case View.JOIN_ARTIST:
            return <PlaceholderPage title="Join as an Artist" message="We are excited for your interest! This section is coming soon." />;
        case View.PAYMENT:
            return <PlaceholderPage title="Payment Gateway" message="Our secure payment gateway integration is being finalized." />;
        default:
            return <HomePage />;
    }
}


const App = () => {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <CurrentView />
        </main>
        <footer className="bg-stone-800 text-white font-poppins">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold mb-2">Shop</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Lippan Art</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Gifting</a></li>
                            <li><a href="#" className="hover:underline">Wall Decor</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">About</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Our Story</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Join as Artist</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-bold mb-2">Support</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Contact Us</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Follow Us</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Instagram</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Pinterest</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-sm text-stone-400 mt-10 pt-6 border-t border-stone-700">
                    &copy; {new Date().getFullYear()} KANCH. All Rights Reserved.
                </div>
            </div>
        </footer>
      </div>
    </AppProvider>
  );
};

export default App;
