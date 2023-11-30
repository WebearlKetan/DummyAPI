import React, { useEffect, useState } from 'react';

const Api2 = () => {
  const [img, setImg] = useState([]);
  const Api_Link = 'https://dummyjson.com/products/1';

  useEffect(() => {
    fetch(Api_Link, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data received from API : ', data);
        setImg(data.images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Images</h1>
      {img.map((image, index) => (
        <img key={index} src={image}  />
      ))}
    </div>
  );
};

export default Api2;
