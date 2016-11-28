import React from 'react';
import BannerImagesSlider from './BannerImagesSlider';

var Banner = React.createClass({
  render: function() {
    return (
      <section className="c-banner">
        <BannerImagesSlider />
      </section>

    )
  }
});

module.exports = Banner;
