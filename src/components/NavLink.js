// modules/NavLink.js
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = ({ children, ...props }) => {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
