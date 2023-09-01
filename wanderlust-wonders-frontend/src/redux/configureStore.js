import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import citiesReducer from "./citiesSlice";
import favoritesReducer from "./favoritesSlice";
import loginReducer from "./loginSlice";
import signUpReducer from "./signupSlice";

export const reducer = combineReducers({
  favorites: favoritesReducer,
  cities: citiesReducer,
  login: loginReducer,
  signUp: signUpReducer,
});

const store = configureStore({ reducer: reducer }, applyMiddleware(thunk));
export default store;
