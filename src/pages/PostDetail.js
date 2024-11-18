// src/pages/PostDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get, ref } from 'firebase/database';
import { database } from '../firebase';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postRef = ref(database, 'posts/' + id);
      try {
        const snapshot = await get(postRef);
        if (snapshot.exists()) {
          setPost(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching post: ", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
