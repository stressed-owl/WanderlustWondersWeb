import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchCities = createAsyncThunk("cities/fetchData", async () => {
  try {
    const response = await API.get();
    return response.data;
  } catch (error) {
    return error;
  }
});

const citiesSlice = createSlice({
  name: "cities",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default citiesSlice.reducer;
