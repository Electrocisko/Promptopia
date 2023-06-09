"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Profile from "@components/profile";

const Creator = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState("")

  const handleTagClick = (post) => {
    setTag(post.tag)
  }

  const fetchPost = async () => {
    const response = await fetch(`/api/users/${params.id}/posts`);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
        <Profile
      name={posts[0] ? posts[0].creator.username: "User"}
      desc="Post publicate"
      data={posts}
      handleTagClick={handleTagClick}
    />
    </>

  );
};

export default Creator;
