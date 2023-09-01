import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import API from "../api/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, _setToken] = useState(localStorage.getItem("token"));

  const setToken = (newToken) => {
    _setToken(newToken);
  };

  useEffect(() => {
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete API.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
