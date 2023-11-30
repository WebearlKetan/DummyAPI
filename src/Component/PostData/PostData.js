import React, { useEffect, useState } from 'react'

const PostData = () => {
    const [add,setAdd]= useState('');

    const Api_link= 'https://dummyjson.com/posts/add'

    useEffect(()=>{
        fetch(Api_link,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: 'r nmdj patil',
                userId: 15,
                id:164,
              
              })
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log('Post Data', data)
            setAdd(data)
        })
        .catch((error)=>{
            console.log("Error in Fetching the data", error);
        })
    },[])
  return (
    <div>
      <p>Post Data</p>
      <p>{add.id}</p>
      <p>{add.title}</p>
      <p>{add.userId}</p>
    </div>
  )
}

export default PostData
