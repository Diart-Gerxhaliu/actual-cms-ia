import React, { useEffect, useState } from "react";
import "./BlogTemplate.css";
import All from "../../json/Blog/All.json";
import blogphoto1 from "../../assets/blogphoto1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function BlogTemplate() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [removeMode, setRemoveMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      setPosts(parsedPosts);
      setVisiblePosts(parsedPosts.slice(0, 8));
    } else {
      localStorage.setItem("blogPosts", JSON.stringify(All));
      setPosts(All);
      setVisiblePosts(All.slice(0, 8));
    }
  }, []);

  const toggleRemoveMode = () => {
    setRemoveMode(!removeMode);
  };

  const removePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    const updatedVisible = visiblePosts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    setVisiblePosts(updatedVisible);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  const showMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => [
      ...prevVisiblePosts,
      ...posts.slice(prevVisiblePosts.length, prevVisiblePosts.length + 8),
    ]);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
    setVisiblePosts(filtered.slice(0, 8));
  };

  return (
    <div className="blog-container">
      <div className="header-image">
        <img src={blogphoto1} alt="Header" className="header-img" />
        <div className="header-content">
          <h1>Start Your Website</h1>
          <p>Choose Your Template</p>
        </div>
      </div>
      <div className="search-input-wrapper">
        <span className="search-icon-inside">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type="text"
          className="search-bar-inside"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className={`posts-grid ${removeMode ? "remove-mode" : ""}`}>
        {visiblePosts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <span className="category">{post.category}</span>
            <div className="tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="date">{post.date}</span>
            {removeMode && (
              <button
                onClick={() => removePost(post.id)}
                className="delete-icon"
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="more-btn-wrapper">
        <button className="more-btn" onClick={showMorePosts}>
          More Templates
        </button>
      </div>

      {removeMode && (
        <button className="done-btn" onClick={toggleRemoveMode}>
          Done
        </button>
      )}
    </div>
  );
}
