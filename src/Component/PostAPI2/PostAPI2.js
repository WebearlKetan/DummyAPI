import React, { useEffect } from 'react'

const PostAPI2 = () => {

  const Api_link = 'https://dummyjson.com/auth/login'
  useEffect(()=>{
      fetch(Api_link,{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
            expiresInMins: 60, 
          })
      })
      .then(res=>res.json())
      .then((data)=>{
        console.log('Successful API call!',data);
      })
      .catch((error)=>{
        console.log("Error in the request",error);
      })
  },[])
  return (
    <div>
      <h1>Post login</h1>
    </div>
  )
}

export default PostAPI2
