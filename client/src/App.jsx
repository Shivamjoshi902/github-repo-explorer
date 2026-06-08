import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchUser } from "./services/githubApi";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import SortDropdown from "./components/SortDropdown";

function App() {
  const [userData, setUserData] = useState(null);
  const [sortBy, setSortBy] = useState("updatedAt");

  const handleSearch = async (username) => {
    try {
      const data = await searchUser(username);

      console.log(data);

      setUserData(data);
    } catch (error) {
      console.error(error);
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
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        GitHub Repo Explorer
      </h1>

      <SearchBar
        onSearch={handleSearch}
        loading={false}
      />

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
    </div>
  );
}

export default App;