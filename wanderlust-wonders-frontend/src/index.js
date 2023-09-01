import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { reducer } from "./redux/configureStore";
import Routes from "./routes/Routes";
import AuthProvider from "./provider/authProvider";
// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/favorites",
//     element: <Favorites />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/city-details/:id",
//     element: <CityDetails />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//     errorElement: <ErrorPage />,
//   },
// ]);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore(
  { reducer: persistedReducer },
  applyMiddleware(thunk)
);
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </AuthProvider>
  </Provider>
);
