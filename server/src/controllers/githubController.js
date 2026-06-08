import {
  fetchUserProfile,
  fetchUserRepositories,
} from "../services/githubService.js";

export const getUserProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await fetchUserProfile(username);

    const repos = await fetchUserRepositories(username);

    res.json({
    success: true,
    user,
    repos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};