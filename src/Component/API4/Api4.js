import React, { useEffect, useState } from "react";

const Api4 = () => {
  const [value, setValue] = useState([]);
  const Api_link =
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price";
  useEffect(() => {
    fetch(Api_link, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Table</h1>
      <table>
        <tr>
          <th>title</th>
          <th>price</th>
        </tr>
        {value &&
          value.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Api4;
