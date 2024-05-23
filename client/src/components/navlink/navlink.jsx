import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children, className = '', ...props }) => {
  return (
    <Link to={to} className={`text-black px-4 py-2 text-lg ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
