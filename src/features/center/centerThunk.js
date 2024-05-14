import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCenters } from "../../api/center";
import { setLoading, setError } from "./centerSlice";

export const getCentersAsync = createAsyncThunk(
  "center/getCenters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCenters();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
