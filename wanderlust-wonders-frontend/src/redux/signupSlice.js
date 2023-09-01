import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchImages = createAsyncThunk("fetchImages", async () => {
  try {
    const response = await API.get("/signup");
    return { images: response.data };
  } catch (error) {
    return error;
  }
});

export const createUser = createAsyncThunk("createUser", async (user) => {
  try {
    const response = await API.post("/signup", user);
    return { users: response.data };
  } catch (error) {
    return error;
  }
});

const signupSlice = createSlice({
  name: "signUp",
  initialState: {
    images: [],
    users: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      return {
        images: action.payload.images,
        users: state.users,
      };
    });
  },
});

export default signupSlice.reducer;
