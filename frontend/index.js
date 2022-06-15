import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import locationReducer, {
  fetchLocations,
} from "./src/reducers/locationReducer";

const store = configureStore({
  reducer: {
    locations: locationReducer,
  },
});

store.dispatch(fetchLocations());

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
