import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthenticationCarousel from "../../components/commons/carousels/authentication/Authentication";
import Logo from "../../components/commons/logo/Logo";
import { fetchImages } from "../../redux/signupSlice";
import "../signup/SignUp.css";
import "./SignUp.css";
import SignUpForm from "./components/signupForm/SignUpForm";

const SignUp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.signUp.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div className="signup">
      <div className="signup-content-wrapper">
        <div className="signup-content-left">
          <div className="signup-content-left-wrapper">
            <Logo />
            <div className="signup-content-left-upper">
              <p className="signup-content-left-title">
                Don't have a city pass? <br /> Well, let's remedy that!
              </p>
              <SignUpForm />
            </div>
            <div className="signup-content-left-lower">
              <p className="signup-content-left-lower-title">
                Have an account ?
                <span className="signup-content-left-lower-subtitle">
                  <Link className="btn-sign-up" to="/login">
                    Log in
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="signup-content-right">
          <AuthenticationCarousel images={data} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
