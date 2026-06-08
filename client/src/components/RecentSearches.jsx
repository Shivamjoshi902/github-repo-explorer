const RecentSearches = ({
  searches,
  onSearch,
}) => {
  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-lg mb-3">
        Recent Searches
      </h2>

      <div className="flex flex-wrap gap-2">
        {searches.map((username) => (
          <button
            key={username}
            onClick={() => onSearch(username)}
            className="
              px-4
              py-2
              rounded-full
              border
              bg-gray-50
              hover:bg-blue-50
              hover:border-blue-400
              transition
            "
          >
            {username}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;