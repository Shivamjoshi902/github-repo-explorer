const RepoCard = ({ repo }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border">
      <div className="flex justify-between items-start gap-4">
        <div>
          <a
            href={repo.htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            {repo.name}
          </a>

          <p className="text-gray-600 mt-2">
            {repo.description || "No description available"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
        <div className="border rounded-lg p-3 text-center">
          <p className="font-bold">{repo.language || "N/A"}</p>
          <p className="text-sm text-gray-500">Language</p>
        </div>

        <div className="border rounded-lg p-3 text-center">
          <p className="font-bold">⭐ {repo.stars}</p>
          <p className="text-sm text-gray-500">Stars</p>
        </div>

        <div className="border rounded-lg p-3 text-center">
          <p className="font-bold">{repo.openIssues}</p>
          <p className="text-sm text-gray-500">Issues</p>
        </div>

        <div className="border rounded-lg p-3 text-center">
          <p className="font-bold">{repo.defaultBranch}</p>
          <p className="text-sm text-gray-500">Branch</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Last Updated:{" "}
        {new Date(repo.updatedAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default RepoCard;