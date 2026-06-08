import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchUser } from "./services/githubApi";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import SortDropdown from "./components/SortDropdown";
import ErrorMessage from "./components/ErrorMessage";
import toast from "react-hot-toast";
import RecentSearches from "./components/RecentSearches";


function App() {
  const [userData, setUserData] = useState(null);
  const [sortBy, setSortBy] = useState("updatedAt");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] =
    useState(() => {
      const saved = localStorage.getItem(
        "recentSearches"
      );

      return saved ? JSON.parse(saved) : [];
    });
  
  const handleSearch = async (username) => {
    if (loading) return;
    try {
      setLoading(true);
      setError("");

      const data = await searchUser(username);

      setUserData(data);

      const updatedSearches = [
        username,
        ...recentSearches.filter(
          (item) => item !== username
        ),
      ].slice(0, 5);

      setRecentSearches(updatedSearches);

      localStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedSearches)
      );

      setError("");
      
      toast.success("User loaded successfully");
    } catch (error) {
      setUserData(null);

      setError(
        error.response?.data?.message ||
        "Something went wrong"
      );

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const sortedRepos = userData?.repos
  ? [...userData.repos].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);

        case "stars":
          return b.stars - a.stars;

        case "updatedAt":
          return (
            new Date(b.updatedAt) -
            new Date(a.updatedAt)
          );

        default:
          return 0;
      }
    })
  : [];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            GitHub Repo Explorer
          </h1>

          <p className="text-gray-600 mt-2">
            Explore GitHub profiles and repositories instantly.
          </p>
        </div>

        <SearchBar
          onSearch={handleSearch}
          loading={loading}
        />

        <RecentSearches
          searches={recentSearches}
          onSearch={handleSearch}
        />

        {error && (
          <ErrorMessage message={error} />
        )}

        {userData && (
          <>
            <ProfileCard user={userData.user} />

            <SortDropdown
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <RepoList repos={sortedRepos} />
          </>
        )}

        {!userData && !error && (
    <div className="text-center mt-16">
      <h2 className="text-2xl font-semibold">
        Search GitHub Users
      </h2>

      <p className="text-gray-500 mt-2">
        Enter a username to explore
        repositories and profile details.
      </p>
    </div>
  )}
      </div>
    </div>
  );
}

export default App;