const RepoCard = ({ repo }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <a
            href={repo.htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            {repo.name}
          </a>

          <p className="text-gray-600 mt-2">
            {repo.description || "No description available"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4 text-sm">
        <span>
          Language: {repo.language || "N/A"}
        </span>

        <span>
          ⭐ {repo.stars}
        </span>

        <span>
          Updated: {new Date(repo.updatedAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default RepoCard;