import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";

const initialState = {
  locations: [],
  status: "idle",
  error: null,
};

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const response = await client.get("http://localhost:3000/locations");
    return response.data;
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // addNewLocation: (state, action) => {
    //   console.log("Add one new location");
    // },
    // removeLocation: (state) => {
    //   console.log("Remove some location state");
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLocations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = state.locations.concat(action.payload);
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { addLocation, addNewLocation, removeLocation } =
//   locationSlice.actions;

export default locationSlice.reducer;

export const selectAllLocations = (state) => state.locations.locations;
