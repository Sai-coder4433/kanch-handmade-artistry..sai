import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { View } from '../types';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, setView } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      login(email);
      setView(View.HOME);
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="flex justify-center items-center py-20 bg-[#FFF8F0]">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg font-poppins">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-6 font-playfair">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stone-500 focus:border-stone-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stone-500 focus:border-stone-500"
                        placeholder="********"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-700 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors"
                >
                    Sign In
                </button>
            </form>
        </div>
    </div>
  );
};

export default SignInPage;
