import React, { useEffect } from "react";

const PutApi = () => {
  const Api_link = "https://dummyjson.com/products/1";
  useEffect(() => {
    fetch(Api_link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price:10,
        stock:1,
        rating:4,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return (
    <div>
      <h1>Put API</h1>
    </div>
  );
};

export default PutApi;
