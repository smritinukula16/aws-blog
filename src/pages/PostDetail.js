import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default PostDetail;
