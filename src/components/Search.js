import React from "react";

function Search({ searchInput, setSearchInput }) {
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </section>
  );
}

export default Search;
