import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <span className="search-icon"></span>
        <span className="search-text">Search</span>
      </div>
      <button className="filter-button">
        <span className="filter-icon"></span>
      </button>
    </div>
  );
};

export default SearchBar;
