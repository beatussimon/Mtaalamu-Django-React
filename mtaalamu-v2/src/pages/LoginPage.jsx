// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText'; // Import AnimatedText

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
      <h1 className="text-6xl font-bold text-black mb-4">Welcome to Mtaalamu</h1>
      <AnimatedText />
      <form className="bg-white p-8 rounded-lg shadow-lg mt-6 w-full max-w-md transition-transform transform hover:scale-105 duration-300">
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200">
          Log In
        </button>
      </form>
      <p className="mt-6 text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;