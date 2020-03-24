import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Post(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // console.log(props);
    let id = props.match.params.post_id;
    Axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res =>
      setPost(res.data)
    );
  }, []);

  const postData = post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );

  return <div className="container">{postData}</div>;
}
