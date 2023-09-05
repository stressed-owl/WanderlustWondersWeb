import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchCities = createAsyncThunk("cities/fetchData", async () => {
  try {
    const response = await API.get();
    return { cities: response.data };
  } catch (error) {
    return error;
  }
});

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        return {
          cities: action.payload.cities,
          loading: false,
        };
      })
      .addCase(fetchCities.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      });
  },
});

export default citiesSlice.reducer;
