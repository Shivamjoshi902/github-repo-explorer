import axios from "axios";
import cache from "../cache/githubCache.js";

const CACHE_DURATION = 60 * 1000;

export const fetchUserProfile = async (username) => {
    const cacheKey = `profile-${username}`;

    const cachedData = getCachedData(cacheKey);

    if (cachedData) {

    return cachedData;
    }

    const response = await axios.get(
        `https://api.github.com/users/${username}`
    );

    const {
        login,
        name,
        avatar_url,
        bio,
        followers,
        following,
        public_repos,
        html_url,
    } = response.data;

    const user = {
        login,
        name,
        avatar_url,
        bio,
        followers,
        following,
        public_repos,
        html_url,
    };

    setCacheData(cacheKey, user);

    return user;
};

export const fetchUserRepositories = async (username) => {
    const cacheKey = `repos-${username}`;

    const cachedData = getCachedData(cacheKey);

    if (cachedData) {

    return cachedData;
    }

        
    const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
    );

    const repos = response.data.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        htmlUrl: repo.html_url,
        openIssues: repo.open_issues_count,
        defaultBranch: repo.default_branch,
    }));

    setCacheData(cacheKey, repos);

    return repos;
};

const setCacheData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

const getCachedData = (key) => {
  const cachedEntry = cache.get(key);

  if (!cachedEntry) {
    return null;
  }

  const isExpired =
    Date.now() - cachedEntry.timestamp > CACHE_DURATION;

  if (isExpired) {
    cache.delete(key);
    return null;
  }

  return cachedEntry.data;
};