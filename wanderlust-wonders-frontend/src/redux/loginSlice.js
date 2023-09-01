import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchLoginImages = createAsyncThunk(
  "login/fetchImages",
  async () => {
    try {
      const response = await API.get("/login");
      return { images: response.data };
    } catch (error) {
      return error;
    }
  }
);

export const fetchUsers = createAsyncThunk("login/fetchUsers", async () => {
  try {
    const response = await API.get("/login/users");
    return { users: response.data };
  } catch (error) {
    return error;
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    users: [],
    images: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginImages.fulfilled, (state, action) => {
        return {
          users: state.users,
          images: action.payload.images,
        };
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return {
          images: state.images,
          users: action.payload.users,
        };
      });
  },
});

export default loginSlice.reducer;
