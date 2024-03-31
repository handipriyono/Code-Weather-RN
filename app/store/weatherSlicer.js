import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../commons/helpers/axios";
import dummyData from "./dummy.json";

export const fetchWeather = createAsyncThunk("fetchWeather", async (p) => {
  try {
    const data = await Axios.get(
      "https://api.openweathermap.org/data/3.0/onecall",
      {
        params: {
          units: "metric",
          appid: "f965bfa858ffff0241f33e83b8edd0fd",
          ...p,
        },
      }
    );
    return data?.data;
  } catch (error) {
    // console.log("err", error);
  }
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default weatherSlice.reducer;
