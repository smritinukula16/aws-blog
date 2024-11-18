import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('Both fields are required!');
      return;
    }

    const newPost = { id: Date.now(), title, content };

    // Save post to localStorage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = [newPost, ...savedPosts];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Navigate back to the home page
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
