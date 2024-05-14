import axios from "axios";
import { API_URL } from "../config";

export const getCenters = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-center`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};