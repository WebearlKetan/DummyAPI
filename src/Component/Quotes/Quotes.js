import React, { useEffect, useState } from 'react'

const Quotes = () => {

    const [quotes,setQuotes]=  useState([]);

    const Api_Link='https://dummyjson.com/quotes';

    useEffect(()=>{
        fetch(Api_Link,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log('Data: ', data);
            setQuotes(data.quotes);
        })
        .catch((error)=>{
            console.log('Error: ', error)
        })
    },[])
  return (
    <div>
      <h1>Quotes</h1>
      <div>
      <p>Post Data</p>
      
      {quotes.map((quotes) => (
            <tr key={quotes.id}>
              <td>{quotes.author}</td>
              <td>{quotes.quote}</td>
            </tr>
          ))}
    </div>
    </div>
  )
}

export default Quotes
