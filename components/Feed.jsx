"use client";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [searchTimeOut, setSearchTimeOut] = useState(null);
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.prompt) ||
        regex.test(post.tag)
    );
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    clearTimeout(searchTimeOut);
    //debounce technique
    setSearchTimeOut(
      setTimeout(() => {
        setSearchedPosts(filterPrompts(e.target.value));
      }, 500)
    );
  };
  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    setSearchedPosts(filterPrompts(tagName));
  };
  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className="mt-16 page_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {searchText ? (
        <PromptCardList data={searchedPosts} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
