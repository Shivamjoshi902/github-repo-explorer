const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
            
            <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full border"
            />

            <div className="flex-1">
            <h2 className="text-3xl font-bold">
                {user.name}
            </h2>

            <p className="text-gray-500">
                @{user.login}
            </p>

            {user.bio && (
                <p className="mt-3">
                {user.bio}
                </p>
            )}

            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="border rounded-lg p-3 text-center">
                <p className="font-bold">
                    {user.followers}
                </p>
                <p>Followers</p>
                </div>

                <div className="border rounded-lg p-3 text-center">
                <p className="font-bold">
                    {user.following}
                </p>
                <p>Following</p>
                </div>

                <div className="border rounded-lg p-3 text-center">
                <p className="font-bold">
                    {user.public_repos}
                </p>
                <p>Repos</p>
                </div>
            </div>

            <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg"
            >
                View GitHub Profile
            </a>
            </div>
        </div>
        </div>
  );
};

export default ProfileCard;