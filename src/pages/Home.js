import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve posts from localStorage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div>
      <h1>Blog Platform</h1>
      <Link to="/create" style={{ display: 'block', margin: '1rem 0' }}>
        Create a New Post
      </Link>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available. Create a new one!</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
