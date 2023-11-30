
import React, { useEffect ,useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { product1, product2, product3 } from '../../Utils/Images/img';

import './SlickSlider.css'

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const SlickSlider = () => {

   
  
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
           <img src={product1} alt="product1"/>
          </div>
          <div>
          <img src={product2} alt='product2'/>
          </div>
          <div>
          <img src={product3} alt='product3'/>
          </div>
          <div>
           <img src={product1} alt="product1"/>
          </div>
          <div>
          <img src={product3} alt='product3'/>
          </div>
          <div>
          <img src={product2} alt='product2'/>
          </div>
   
  

        </Slider>
      </div>
    )
  }
  
  export default SlickSlider
  