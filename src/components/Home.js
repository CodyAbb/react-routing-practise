import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
      setPosts(res.data.slice(0, 10))
    );
  }, []);

  const postList = posts.length ? (
    posts.map(post => {
      return (
        <div className="post card" key={post.id}>
          <div className="card-content">
            <Link to={"/posts/" + post.id}>
              <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No posts yet</div>
  );

  return (
    <div className="container">
      <h4 className="center">This is home</h4>
      {postList}
    </div>
  );
}
