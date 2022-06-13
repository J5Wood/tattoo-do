import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 2,
    city: "Bangkok",
    country: "Thailand",
  },
  {
    id: 3,
    city: "Seattle",
    country: "USA",
  },
  {
    id: 4,
    city: "Terracina",
    country: "Italy",
  },
];

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocations: (state) => {
      console.log("Add some location state");
    },
    addNewLocation: (state) => {
      console.log("Add one new location");
    },
    removeLocation: (state) => {
      console.log("Remove some location state");
    },
  },
});

export const { addLocation, addNewLocation, removeLocation } =
  locationSlice.actions;

export default locationSlice.reducer;
