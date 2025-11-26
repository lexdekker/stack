import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BANNERPATHS = [
  '/src/images/banner-1.jpg',
  '/src/images/banner-2.jpg',
  '/src/images/banner-3.jpg'
];

// BannerImage component
const BannerImage = ({ src }) => {
  return (
    <div>
      <img src={src} alt="Stack banner" className="e-img" />
    </div>
  );
};

BannerImage.propTypes = {
  src: PropTypes.string.isRequired
};

// BannerImagesSlider component
const BannerImagesSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % BANNERPATHS.length);
    }, 2500);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return <BannerImage src={BANNERPATHS[currentImage]} />;
};

export default BannerImagesSlider;
