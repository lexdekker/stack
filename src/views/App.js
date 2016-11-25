import React from 'react';
// import Header from '../components/Header';
// import Header from '../components/Tasks';

var App = React.createClass({
  render() {
    return (
      <main className="">
        {this.props.children}
      </main>
    )
  }
});

module.exports = App;
