import React, { useEffect } from 'react'

const PostAPI = () => {

  const Api_link = 'https://dummyjson.com/products/add';
    useEffect(()=>{
      fetch(Api_link,{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: '2 Pencil',
          })
      })
      .then(res=>res.json())
      .then((data)=>{
        console.log('Success in sending data to API',data);
      })
      .catch((error)=>{
        console.log(error);
      })
    },[])

    return (
    <div>
      <h1>Post Data</h1>
    </div>
  )
}

export default PostAPI
