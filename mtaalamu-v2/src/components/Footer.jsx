import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">About Mtaalamu</h4>
            <p className="text-sm text-center sm:text-left">
              Mtaalamu provides in-depth analysis, the latest news, and expert insights across various domains. Stay informed with accurate, timely, and relevant content.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2 text-center sm:text-left">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Articles</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="text-sm space-y-2 text-center sm:text-left">
              <li className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5 text-gray-400" />
                <span>info@mtaalamu.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <span>+123-456-7890</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg
                  className="h-6 w-6 text-gray-400 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.49V14.706H9.691V11.18h3.123V8.356c0-3.1 1.894-4.79 4.66-4.79 1.324 0 2.463.1 2.794.143v3.24l-1.917.001c-1.505 0-1.797.715-1.797 1.763v2.309h3.595l-.468 3.526h-3.127V24h6.127C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <svg
                  className="h-6 w-6 text-gray-400 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.953 9.953 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.847 3c-2.73 0-4.945 2.21-4.945 4.932 0 .387.045.763.127 1.124C7.688 8.874 4.064 7.147 1.64 4.153a4.822 4.822 0 00-.666 2.477 4.927 4.927 0 002.188 4.105 4.902 4.902 0 01-2.24-.616v.062c0 2.456 1.75 4.506 4.074 4.975-.426.115-.877.176-1.34.176-.33 0-.653-.032-.968-.091.653 2.028 2.548 3.503 4.793 3.543a9.869 9.869 0 01-7.27 2.02c2.19 1.396 4.794 2.208 7.588 2.208 9.104 0 14.073-7.521 14.073-14.04 0-.214-.005-.426-.014-.637A9.934 9.934 0 0024 4.557z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
          © 2024 Mtaalamu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
