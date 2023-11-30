import React, { useState, useEffect } from 'react';

const Comments = () => {
  const Api_Link = 'https://dummyjson.com/comments';
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(Api_Link, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      setComments(data.comments);
    })
    .catch((error) => {
      console.log("Error in Fetching comments", error);
    })
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <ul>
          <li key={comment.id}>{comment.body}</li>
          <li>{comment.postId}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
