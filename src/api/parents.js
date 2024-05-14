import axios from "axios";
import { API_URL } from "../config";

export const getParents = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-parent`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
