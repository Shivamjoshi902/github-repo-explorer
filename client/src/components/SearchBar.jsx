import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    onSearch(username.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(event) =>
          setUsername(event.target.value)
        }
        className="border rounded px-4 py-2 flex-1"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded border"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;