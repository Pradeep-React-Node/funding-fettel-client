import { createSlice } from "@reduxjs/toolkit";
import { getParentsAsync } from "./parentsThunk";

const initialState = {
  parents: [],
  loading: false,
  error: null,
};

const parentsSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    deleteParent: (state, action) => {
      const idToDelete = action.payload;
      state.parents = state.parents.filter(
        (parent) => parent._id !== idToDelete
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getParentsAsync.fulfilled, (state, action) => {
        state.parents = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getParentsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getParentsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLoading, setError, deleteParent } = parentsSlice.actions;

export default parentsSlice.reducer;
