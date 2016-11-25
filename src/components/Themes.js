import React from 'react';

var blue = '#2196F3';
var pink = '#E91E63';
var llow = '#FFD712';
var low = '#FFD712';

var Themes = React.createClass({
  getInitialState: function() {
    return { color: blue };
  },

  changeColor: function() {
    var newColor = this.state.color == blue ? pink : blue;
    this.setState({ color: newColor });
  },

  render: function() {
    return (
      <section className="c-theme" style={{background: this.state.color}}>
        <div className="e-theme v-blue" onClick={this.changeColor}>
          <i className="material-icons">done</i>
        </div>
        <div className="e-theme v-pink" onClick={this.changeColor}><i className="material-icons">done</i></div>
        <div className="e-theme v-orange"><i className="material-icons">done</i></div>
        <div className="e-theme v-purple"><i className="material-icons">done</i></div>
      </section>
    )
  }
});

module.exports = Themes;
