import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input
        type="search"
        placeholder="Search for a city"
        autoComplete="off"
        autoFocus
      />
      <button
        type="submit"
        value="search"
        className="btn btn-outline-secondary"
      >
        Search
      </button>
      <button className="btn btn-outline-secondary" type="click">
        Current 🔆
      </button>
    </form>
  );
}
