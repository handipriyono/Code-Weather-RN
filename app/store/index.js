import { configureStore } from "@reduxjs/toolkit";
import weatherSliceReducer from "./weatherSlicer";

export const store = configureStore({
  reducer: {
    weather: weatherSliceReducer,
  },
});
