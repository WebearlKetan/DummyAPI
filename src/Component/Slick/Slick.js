
import React, { useEffect ,useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const Slick = () => {

    const [image, setImage] = useState(null);
    const Api_key = 'https://image.dummyjson.com/400x200/282828';
  
    useEffect(() => {
      fetch(Api_key, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.blob())
        .then((blob) => {
          console.log('Fetched image blob:', blob);
          setImage(URL.createObjectURL(blob)); 
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    }, []);
  
  
  
  
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        
         {image && <img src={image} alt="Fetched Image" />}

  

        </Slider>
      </div>
    )
  }
  
  export default Slick
  