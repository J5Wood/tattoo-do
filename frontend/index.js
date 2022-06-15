import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import locationReducer, {
  fetchLocations,
} from "./src/reducers/locationReducer";
import studioReducer, { fetchStudios } from "./src/reducers/studioReducer";
import artistReducer, { fetchArtists } from "./src/reducers/artistReducer";

const store = configureStore({
  reducer: {
    locations: locationReducer,
    studios: studioReducer,
    artists: artistReducer,
  },
});

store.dispatch(fetchLocations());
store.dispatch(fetchStudios());
store.dispatch(fetchArtists());

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
