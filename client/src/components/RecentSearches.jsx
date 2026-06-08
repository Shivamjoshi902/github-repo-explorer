const RecentSearches = ({
  searches,
  onSearch,
}) => {
  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-2">
        Recent Searches
      </h2>

      <div className="flex flex-wrap gap-2">
        {searches.map((username) => (
          <button
            key={username}
            onClick={() => onSearch(username)}
            className="px-3 py-1 border rounded"
          >
            {username}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;