import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchData = createAsyncThunk("fav/fetchData", async () => {
  try {
    const response = await API.get("/favorites");
    return { favorites: response.data };
  } catch (error) {
    return { error: error };
  }
});

export const createFavorite = createAsyncThunk(
  "createFavorite",
  async (favorite) => {
    try {
      const response = await API.post("/favorites", favorite);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteFavorites = createAsyncThunk(
  "deleteFavorites",
  async (a) => {
    try {
      const response = await API.delete("/favorites");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteFavorite = createAsyncThunk("deleteFavorite", async (id) => {
  try {
    const response = await API.delete(`/favorites/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log("Favorites", action.payload.favorites);
        return {
          favorites: action.payload.favorites,
        };
      })
      .addCase(deleteFavorites.fulfilled, (state, action) => {
        return {
          favorites: [],
        };
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.favorites.filter((favorite) => favorite.id !== action.payload.id);
      })
      .addCase(createFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      });
  },
});

export default favoritesSlice.reducer;
