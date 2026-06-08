export const getUserProfile = async (req, res) => {
  const { username } = req.params;

  res.json({
    success: true,
    username,
  });
};