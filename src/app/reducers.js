// src/app/reducers.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import testimonialReducer from "../features/testimonial/testimonialSlice";
import videosReducer from "../features/video/videoSlice";
import parentsReducer from "../features/parents/parentsSlice";
import centersReducer from "../features/center/centerSlice";

const rootReducer = combineReducers({
  user: userReducer,
  testimonial: testimonialReducer,
  videos: videosReducer,
  parents: parentsReducer,
  centers: centersReducer,

  // Add more reducers if needed
});

export default rootReducer;
