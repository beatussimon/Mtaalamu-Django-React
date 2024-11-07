import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { MenuIcon, XIcon, PlusIcon } from '@heroicons/react/outline'; // Import PlusIcon for the plus icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <>
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center z-10">
        {/* Left Logo - Link to Home */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold text-gray-800">
            Mtaalamu
          </Link>
        </div>

        {/* Middle Navigation Links (hidden on mobile) */}
        <div className="hidden lg:flex flex-grow justify-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/articles" className="text-gray-600 hover:text-blue-600 transition">
            Articles
          </Link>
          <Link to="/categories" className="text-gray-600 hover:text-blue-600 transition">
            Categories
          </Link>
        </div>

        {/* Hamburger Icon for Mobile (visible on mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Right Section: Login Button and Add New Blog */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-blue-600 transition">
            Login
          </Link>
          <Link
            to="/add-blog"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition flex items-center"
          >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-50 items-center' : 'hidden'}`}>
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition mb-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/articles" className="text-gray-600 hover:text-blue-600 transition mb-2" onClick={() => setIsOpen(false)}>
            Articles
          </Link>
          <Link to="/categories" className="text-gray-600 hover:text-blue-600 transition mb-2" onClick={() => setIsOpen(false)}>
            Categories
          </Link>
          <Link
            to="/add-blog"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition mt-2 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </nav>

      {/* Very Subtle Divider Line */}
      <hr className="border-t border-gray-200 my-1 opacity-30" />
    </>
  );
};

export default Navbar;
