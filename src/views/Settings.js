import React from 'react';
import Header from '../components/Header';
import Themes from '../components/Themes';
// import NavLink from './NavLink';

var Settings = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
          <section className="c-page">
            <acticle className="c-content">
              <h1>Settings</h1>
              <p>Select a theme you like.</p>
              <Themes />
            </acticle>
          </section>
      </div>
    )
  }
});

module.exports = Settings;
