import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const searchUser = async (username) => {
  const response = await axios.get(
    `${API_BASE_URL}/users/${username}`
  );

  return response.data;
};