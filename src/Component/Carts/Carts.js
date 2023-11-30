import React, { useEffect, useState } from 'react';

const Carts = () => {
  const Api_url = 'https://dummyjson.com/carts'; 

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch(Api_url,{
        method: "GET",
        headers:{
            'Content-Type':'application/json'
        }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCartData(data.carts);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []); 

  return (
    <div>
      <h1>Cart Data</h1>
      <ul>
        {cartData.map((cart, index) => (
          <div key={index}>
            <h2>Cart {index + 1}</h2>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <ul>
              {cart.products.map((product, pIndex) => (
                <li key={pIndex}>
                  <p>Title: {product.title}</p>
                  <p>Price: {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total: {product.total}</p>
                </li>
              ))}
            </ul>
            <p >total{cart.total}</p>
            <p>Id {cart.userId}</p>
            <p>totalQuantity{cart.totalQuantity}</p>
            <p>totalProducts{cart.totalProducts}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Carts;
