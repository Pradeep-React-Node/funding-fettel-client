import { createAsyncThunk } from "@reduxjs/toolkit";
import { getParents } from "../../api/parents";
import { setLoading, setError } from "./parentsSlice";

export const getParentsAsync = createAsyncThunk(
  "parent/getParents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getParents();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
