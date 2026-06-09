import RepoCard from "./RepoCard";

const RepoList = ({ repos, totalRepos }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold">
        Repositories ({repos.length} of {totalRepos})
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