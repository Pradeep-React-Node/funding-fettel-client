import { createSlice } from "@reduxjs/toolkit";
import { getCentersAsync } from "./centerThunk";

const initialState = {
  centers: [],
  loading: false,
  error: null,
};

const centersSlice = createSlice({
  name: "center",
  initialState,
  reducers: {
    deleteCenter: (state, action) => {
      const idToDelete = action.payload;
      state.centers = state.centers.filter(
        (center) => center._id !== idToDelete
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCentersAsync.fulfilled, (state, action) => {
        state.centers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCentersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCentersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLoading, setError, deleteCenter } = centersSlice.actions;

export default centersSlice.reducer;
