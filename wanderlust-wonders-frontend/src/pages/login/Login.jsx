import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthenticationCarousel from "../../components/commons/carousels/authentication/Authentication";
import Logo from "../../components/commons/logo/Logo";
import { fetchLoginImages, fetchUsers } from "../../redux/loginSlice";
import "./Login.css";
import LoginForm from "./components/loginForm/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login.images);

  useEffect(() => {
    dispatch(fetchLoginImages());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="login">
      <div className="login-content-wrapper">
        <div className="login-content-left">
          <AuthenticationCarousel images={data} />
        </div>
        <div className="login-content-right">
          <div className="login-content-right-wrapper">
            <Logo />
            <div className="login-content-right-upper">
              <p className="login-content-right-title">Welcome back!</p>
              <p className="login-content-right-message">
                City explorers, the urban adventure awaits! Log in now to unlock
                hidden gems, local secrets, and exciting updates that'll have
                you navigating cities like a pro. Don't miss out – the streets
                are calling, and time's ticking! ⏳🌆🗺️
              </p>
              <LoginForm />
            </div>
            <div className="login-content-right-lower">
              <p className="login-content-right-lower-title">
                Don't have an account ?
                <span className="login-content-right-lower-subtitle">
                  <Link className="btn-sign-up" to="/signup">
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
