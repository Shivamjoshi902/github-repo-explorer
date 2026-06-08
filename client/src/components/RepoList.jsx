import RepoCard from "./RepoCard";

const RepoList = ({ repos }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Repositories ({repos.length})
      </h2>

      <div className="grid gap-4">
        {repos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))}
      </div>
    </div>
  );
};

export default RepoList;