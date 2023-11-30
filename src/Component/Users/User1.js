import React, { useEffect, useState } from 'react'

const User1 = () => {
    const [userData,setUserData]= useState([]);
    const Api_link = 'https://dummyjson.com/users'
    useEffect(()=>{
        fetch(Api_link,{
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log('User Data', data)
            setUserData(data.users)
        })
        .catch((error)=>{
            console.log("Error in Fetching the user details",error)
        })
    },[])

  return (
    <div>
      <h1>Users</h1>
      <p>Data</p>
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>age</th>
            <th>Middlename</th>
            <th>birthDate</th>
            <th>email</th>
            <th>height</th>
            <th>Phone</th>
            <th>university</th>
            <th>weight</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((users) => (
            <tr key={users.id}>
              <td>{users.firstName}</td>
              <td>{users.lastName}</td>
              <td>{users.age}</td>
              <td>{users.maidenName}</td>
              <td>{users.birthDate}</td>
              <td>{users.email}</td>
              <td>{users.height}</td>
              <td>{users.phone}</td>
              <td>{users.university}</td>
              <td>{users.weight}</td>
              <td>{users.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </div>
  )
}

export default User1
