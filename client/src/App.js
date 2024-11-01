import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(()   => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        setListOfPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((post, key) => ( // Use a more descriptive variable name
        <div className="post" key={key}>
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
      ))}
    </div>
  );
}

export default App;