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
          <div className={"e-icon " + (this.state.menuOpen ? "is-clicked" : "")}
            onClick={this.handleMenuToggle}>
            <i className="material-icons v-menu">menu</i>
            <i className="material-icons v-close">close</i>
          </div>
          <h1 className="e-title">Stack</h1>
          <nav className={ "c-nav " + (this.state.menuOpen ? "v-active" : "")}>
            <ul role="nav">
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li className="e-github"><a href="https://github.com/lexdekker/stack" target="_blank">Github</a></li>
            </ul>
          </nav>
        </header>
        <div className={ "e-overlay " + (this.state.menuOpen ? "v-active" : "")}
          onClick={this.handleMenuToggle}></div>
      </section>

    )
  }
});

module.exports = Header;
