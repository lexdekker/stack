import React from 'react';

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
