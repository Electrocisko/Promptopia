"use client";
import PromptCard from "./PromptCard";
import { useState, useEffect } from "react";


const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
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

const Feed = () => {
  const [searchText, setSearchText] = useState("Texto de busqueda");
  const [post, setPost] = useState([]);

  //ACA TENGO QUE HACER LA LOGICA DE BUSQUEDA
  const handleSearchChange = (e) => {

   
  };

  const fetchPost = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  },[]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for Prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
