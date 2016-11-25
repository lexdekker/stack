import React from 'react';
// import NavLink from '../views/NavLink';
import TodoApp from './Todo';

var Tasks = React.createClass({
  render() {
    return (
      <section className="c-page">
        <TodoApp />
      </section>
    )
  }
});

module.exports = Tasks;
