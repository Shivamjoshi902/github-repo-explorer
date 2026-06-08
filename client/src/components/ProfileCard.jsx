const ProfileCard = ({ user }) => {
  return (
    <div className="border rounded p-4 mt-6">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full"
      />

      <h2 className="text-2xl font-bold mt-4">
        {user.name}
      </h2>

      <p>@{user.login}</p>

      <p className="mt-2">
        Followers: {user.followers}
      </p>

      <p>
        Following: {user.following}
      </p>

      <p>
        Public Repos: {user.public_repos}
      </p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default ProfileCard;