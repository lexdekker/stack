import React from 'react';
import Header from '../components/Header';
import NavLink from './NavLink';

var Login = React.createClass({
  render() {
    return (
      <section className="c-page">
        <Header />
        <h1>Login page</h1>
        <p>Content here</p>
      </section>
    )
  }
});

module.exports = Login;
