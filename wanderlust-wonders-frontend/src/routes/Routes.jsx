import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import App from "../App";
import Favorites from "../pages/favorites/Favorites";
import CityDetails from "../pages/cityDetails/CityDetails";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import React from "react";

const Routes = () => {
  const { token } = useAuth();

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/city-details/:id",
          element: <CityDetails />,
        },
      ],
    },
  ];

  const routesForNonAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ];

  const routesForPublic = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNonAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
