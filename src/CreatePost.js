// src/pages/CreatePost.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, set, push } from 'firebase/database';
import { database } from '../firebase';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      // Use Firebase push() to generate a valid, unique key
      const newPostRef = push(ref(database, 'posts'));

      // Set the new post data at the generated reference
      await set(newPostRef, {
        title,
        content,
      });

      // Redirect to the home page after submission
      navigate('/');
    } else {
      alert('Title and content cannot be empty');
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
