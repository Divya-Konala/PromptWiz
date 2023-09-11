"use client";
import Profile from "@components/Profile";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState();
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: "DELETE",
        });
        const filteredPosts = posts.filter((item) => item._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();
      setUser(data[0].creator.username);
      setPosts(data);
    };
    if (id) {
      fetchPosts();
    }
  }, [id]);
  return (
    <Profile
      name={`${user}'s`}
      desc={`Welcome to ${user}'s personalized profile page. Explore ${user}'s exceptional prompts and be inspired by the power of their imagination.`}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default UserProfile;
