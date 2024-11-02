import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        setListOfPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {listOfPosts.map(
        (
          post,
          key // Use a more descriptive variable name
        ) => (
          <div className="post" key={key}>
            <div className="title">{post.title}</div>
            <div className="body">{post.postText}</div>
            <div className="footer">{post.username}</div>
          </div>
        )
      )}
    </div>
  );
}

export default Home;
