import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";

const initialState = {
  studios: [],
  status: "idle",
  error: null,
};

export const fetchStudios = createAsyncThunk(
  "studios/fetchStudios",
  async () => {
    const response = await client.get("http://localhost:3000/studios");
    return response.data;
  }
);

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStudios.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStudios.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.studios = state.studios.concat(action.payload);
      })
      .addCase(fetchStudios.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default studioSlice.reducer;

export const selectAllStudios = (state) => state.studios.studios;
