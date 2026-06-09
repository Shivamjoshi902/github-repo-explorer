import { useState } from "react";

const RepoCard = ({ repo }) => {
  const [expanded, setExpanded] =
    useState(false);

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
            {repo.description ||
              "No description available"}
          </p>
        </div>
      </div>

      {/* Always Visible Information */}

      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="border rounded-lg p-3 text-center">
          <p className="font-bold">
            {repo.language || "N/A"}
          </p>
          <p className="text-sm text-gray-500">
            Language
          </p>
        </div>

        <div className="border rounded-lg p-3 text-center">
          <p className="font-bold">
            ⭐ {repo.stars}
          </p>
          <p className="text-sm text-gray-500">
            Stars
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Last Updated:{" "}
        {new Date(
          repo.updatedAt
        ).toLocaleDateString()}
      </div>

      {/* Expand Button */}

      <button
        onClick={() =>
          setExpanded(!expanded)
        }
        className="
          mt-4
          text-blue-600
          font-medium
          hover:underline
        "
      >
        {expanded
          ? "Hide Details ▲"
          : "Show Details ▼"}
      </button>

      {/* Expandable Section */}

      {expanded && (
        <div className="mt-4 border-t pt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded-lg p-3 text-center">
              <p className="font-bold">
                {repo.openIssues}
              </p>
              <p className="text-sm text-gray-500">
                Open Issues
              </p>
            </div>

            <div className="border rounded-lg p-3 text-center">
              <p className="font-bold">
                {repo.defaultBranch}
              </p>
              <p className="text-sm text-gray-500">
                Default Branch
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Repository ID
            </p>

            <p className="font-medium">
              {repo.id}
            </p>
          </div>

          <a
            href={repo.htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-4
              px-4
              py-2
              bg-gray-900
              text-white
              rounded-lg
              hover:bg-black
            "
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default RepoCard;