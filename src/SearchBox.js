import React, { useState } from "react";
import "./styles.css";

function SearchBox({ search, setSearch }) {
  return (
    <form>
      Search &nbsp;
      <input
        placeholder="Search Movies.."
        value={search}
        type="text"
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}

export default SearchBox;
