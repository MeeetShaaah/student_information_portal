import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css" // Import a CSS file for additional styling

const Search = ({ search, setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="col-sm-6 mb-4">
      <form className="search-form">
        <input
          className="search-input"
          type="search"
          placeholder="Search students..."
          value={search}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
