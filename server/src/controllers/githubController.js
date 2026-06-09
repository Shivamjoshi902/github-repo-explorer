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

        if (
            error.response?.status === 403 &&
            error.response?.data?.message?.includes(
            "API rate limit exceeded"
            )
        ) {
            return res.status(429).json({
            success: false,
            message:
                "GitHub API rate limit reached. Please try again later.",
            });
        }

        if (error.response?.status === 404) {
            return res.status(404).json({
            success: false,
            message: "GitHub user not found",
            });
        }

        if (!error.response) {
            return res.status(503).json({
                success: false,
                message:
                "Unable to connect to GitHub. Please try again later.",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};