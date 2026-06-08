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
      className="flex flex-col sm:flex-row gap-3 mt-6"
    >
      <input
        type="text"
        disabled={loading}
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(event) =>
          setUsername(event.target.value)
        }
        className="
          flex-1
          px-4
          py-3
          border
          rounded-xl
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          px-6
          py-3
          bg-blue-600
          text-white
          rounded-xl
          hover:bg-blue-700
          disabled:bg-gray-400
          transition
        "
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;