import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-teal-500">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg">Logo</Link>

        <ul className="hidden md:flex space-x-4">
          <li><Link to="/medicine" className="text-white">Medicine</Link></li>
          <li><Link to="/lab-tests" className="text-white">Lab Tests</Link></li>
          <li><Link to="/healthcare" className="text-white">Healthcare</Link></li>
          <li><Link to="/surgeries" className="text-white">Surgeries</Link></li>
          <li><Link to="/admin" className="text-white">Admin</Link></li>
        </ul>

        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="p-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring focus:border-teal-300"
          />
          <Link to="/cart" className="text-white"><i className="fas fa-shopping-cart"></i></Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          {/* Example of hamburger menu icon using Font Awesome */}
          <button className="text-white focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
