import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, HomeIcon, BookOpenIcon, MailIcon } from '@heroicons/react/outline';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-white text-center px-4 pt-20 md:pt-40">
      {/* 404 Message */}
      <h1 className="text-8xl font-bold text-gray-800 mb-4 drop-shadow-lg">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>

      {/* Image or Illustration */}
      <div className="mb-8">
        <img 
          src="/path/to/404-illustration.svg" 
          alt="404 illustration" 
          className="max-w-xs mx-auto" 
        />
      </div>

      {/* Options */}
      <div className="space-y-4 mb-10">
        {/* Option 1: Go Back */}
        <Link
          to="/"
          className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          <HomeIcon className="h-5 w-5" aria-hidden="true" />
          <span className="font-semibold">Go Back Home</span>
        </Link>

        {/* Option 2: Browse Articles */}
        <Link
          to="/articles"
          className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
        >
          <BookOpenIcon className="h-5 w-5" aria-hidden="true" />
          <span className="font-semibold">Browse Articles</span>
        </Link>

        {/* Option 3: Contact Support */}
        <Link
          to="/contact"
          className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          <MailIcon className="h-5 w-5" aria-hidden="true" />
          <span className="font-semibold">Contact Support</span>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
