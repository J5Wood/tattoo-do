import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";

const initialState = {
  artists: [],
  status: "idle",
  error: null,
};

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async () => {
    const response = await client.get("http://localhost:3000/artists");
    return response.data;
  }
);

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArtists.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = state.artists.concat(action.payload);
      })
      .addCase(fetchArtists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default artistSlice.reducer;

export const selectAllArtists = (state) => state.artists.artists;
