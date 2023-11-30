import React, { useEffect, useState } from 'react';

const Images1 = () => {
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
      <p>Images</p>
      {image && <img src={image} alt="Fetched Image" />}
    </div>
  );
};

export default Images1;
