import axios from "axios";
import { API_URL } from "../config";

export const addVideo = async (videoData) => {
  try {
    const response = await axios.post(`${API_URL}/add-video`, videoData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-videos`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// router.route("/add-video").post(addVideo)
// router.route("/get-videos").get(getVideo)
// router.route("/delete-video").delete(deleteVideo)
