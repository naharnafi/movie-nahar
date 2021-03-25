import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <form>
        <input
          className="search-bar pl-2"
          value={search}
          placeholder="Search movie..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
