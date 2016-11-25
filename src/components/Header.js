import React from 'react';
import NavLink from './NavLink';

var Header = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false
    }
  },

  handleMenuToggle: function() {
    this.setState( { menuOpen : !this.state.menuOpen } );
  },

  render: function() {
    return (
      <section>
        <header className="c-header">
          <div className="e-icon">
            <i className="material-icons"
              onClick={this.handleMenuToggle}>menu</i>
          </div>
          <h1 className="e-title">Stack</h1>
          <nav className={this.state.menuOpen ? "c-nav v-active" : "c-nav"}>
            <ul role="nav">
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/settings">Settings</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          </nav>
        </header>
        <div className="e-overlay"></div>
      </section>

    )
  }
});

module.exports = Header;
