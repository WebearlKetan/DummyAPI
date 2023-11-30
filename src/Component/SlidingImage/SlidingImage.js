import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SlidingImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
  
    fetch('https://shibe.online/api/shibes?count=10')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div>
      <h2>Image Slider</h2>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img style={{width:'20',height:'20'}} src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlidingImage;
