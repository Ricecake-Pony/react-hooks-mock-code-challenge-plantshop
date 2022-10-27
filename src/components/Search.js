import React from "react";

function Search(props) {
const {searchFilter}= props

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchFilter}
        
      />
    </div>
  );
}

export default Search;
