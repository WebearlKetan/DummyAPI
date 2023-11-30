import React, { useEffect, useState } from 'react';

const Api3 = () => {
  const Api_Link = 'https://dummyjson.com/products/1';

  const [productData, setProductData] = useState('');

  useEffect(() => {
    fetch(Api_Link, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Product Information</h1>
      {productData && (
        <div>
          <p>Brand: {productData.brand}</p>
          <p>Category: {productData.category}</p>
          <p>Description: {productData.description}</p>
          <p>Price: ${productData.price}</p>
          <p>Rating: {productData.rating}</p>
          <img src={productData.thumbnail} alt={productData.title} />

          <h2>Images</h2>
          <ul>
            {productData.images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Api3;
