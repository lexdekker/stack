import React, { useState } from 'react';
import NavLink from './NavLink';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <header className="c-header">
        <div
          className={`e-icon ${menuOpen ? 'is-clicked' : ''}`}
          onClick={handleMenuToggle}
        >
          <i className="material-icons v-menu">menu</i>
          <i className="material-icons v-close">close</i>
        </div>
        <h1 className="e-title">Stack</h1>
        <nav className={`c-nav ${menuOpen ? 'v-active' : ''}`}>
          <ul role="nav">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="e-github">
              <a href="https://github.com/lexdekker/stack" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={`e-overlay ${menuOpen ? 'v-active' : ''}`}
        onClick={handleMenuToggle}
      ></div>
    </section>
  );
};

export default Header;
