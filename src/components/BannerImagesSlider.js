import React from 'react';

var BANNERPATHS = [
  '/src/images/banner-1.jpg',
  '/src/images/banner-2.jpg',
  '/src/images/banner-3.jpg'
];

function BannerImage(props) {
  var src = props.src;
  return (
      <div>
        <img src={src} alt="Stack banner" className="e-img"/>
      </div>
    );
}

BannerImage.propTypes = {
  src: React.PropTypes.string.isRequired
};

var BannerImagesSlider = React.createClass({
  getInitialState: function () {
    return { currentImage: 0 };
  },

  nextImage: function () {
    var current = this.state.currentImage;
    var next = ++current % BANNERPATHS.length;
    this.setState({ currentImage: next });
  },

  interval: null,

  componentDidMount: function () {
    this.interval = setInterval(this.nextImage, 2500);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    var src = BANNERPATHS[this.state.currentImage];
    return <BannerImage src={src} />;
  }
});

module.exports = BannerImagesSlider;
