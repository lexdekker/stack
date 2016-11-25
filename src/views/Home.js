import React from 'react';
import Header from '../components/Header';
import Tasks from '../components/Tasks';

var Home = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Tasks />
      </div>
    )
  }
});

module.exports = Home;
