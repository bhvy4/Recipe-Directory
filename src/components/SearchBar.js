import { useState } from "react";
import { useHistory } from "react-router-dom";

//styles
import "./SearchBar.css";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
