import React, { useEffect, useState } from 'react'

const MockHTTP = () => {

  const Api_key = 'https://dummyjson.com/quotes/random'
 const [Data,setData] = useState('');
    useEffect(()=>{
        fetch(Api_key,{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res=>res.json())
        .then((data)=>{
            console.log('Data', data)
            setData(data.Deta)
        })
        .catch((error)=>{
            console.log('Error', error);
        })
    })
  return (
    <div>
      <h1>Mock HTTP</h1>
      {Data &&
          Data.map((Data, index) => (
            <tr key={index}>
              <td>{Data.quote}</td>
              <td>{Data.author}</td>
            </tr>
          ))}
    </div>
  )
}

export default MockHTTP
