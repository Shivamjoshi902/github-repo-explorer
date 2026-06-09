const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-gray-200"
        />

        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold">
            {user.name || user.login}
          </h2>

          <p className="text-gray-500 text-lg">
            @{user.login}
          </p>

          {user.bio && (
            <p className="mt-3 text-gray-700">
              {user.bio}
            </p>
          )}

          {/* Stats */}

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="border rounded-xl p-4 text-center">
              <p className="font-bold text-xl">
                {user.followers.toLocaleString()}
              </p>

              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Followers
              </p>
            </div>

            <div className="border rounded-xl p-4 text-center">
              <p className="font-bold text-xl">
                {user.following.toLocaleString()}
              </p>

              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Following
              </p>
            </div>

            <div className="border rounded-xl p-4 text-center">
              <p className="font-bold text-xl">
                {user.public_repos.toLocaleString()}
              </p>

              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Repositories
              </p>
            </div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-6
              px-5
              py-3
              bg-black
              text-white
              rounded-lg
              hover:bg-gray-800
              transition
            "
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;