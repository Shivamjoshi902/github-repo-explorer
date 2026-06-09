import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const searchUser = async (username) => {
  const response = await axios.get(
    `${API_BASE_URL}/users/${username}`
  );

  return response.data;
};