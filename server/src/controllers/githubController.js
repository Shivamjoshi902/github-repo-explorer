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
    }
    catch (error) {

        if (error.response?.status === 404) {
            return res.status(404).json({
                success: false,
                message: "GitHub user not found",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};