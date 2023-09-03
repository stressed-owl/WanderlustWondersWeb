import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StyledCustomButton from "../../../../components/buttons/form/StyledCustomButton";
import StyledCustomTextField from "../../../../components/commons/textfields/authentication/StyledCustomTextField";
import { createUser } from "../../../../redux/signupSlice";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isInputFieldError, setIsInputFieldError] = useState(false);

  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState("");

  const validateEmailAndPassword = () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setIsInputFieldError(true);
      setEmailHelperText("Both email and password are required");
      setPasswordHelperText("Both email and password are required");
      setConfirmPasswordHelperText("Both email and password are required");
      return false;
    }

    if (password.length < 8) {
      setIsInputFieldError(true);
      setPasswordHelperText("Length must be at least 8 symbols");
      setConfirmPasswordHelperText("Length must be at least 8 symbols");
      return false;
    }

    if (password.length > 50) {
      setIsInputFieldError(true);
      setPasswordHelperText("The max length is 50 symbols");
      setConfirmPasswordHelperText("The max length is 50 symbols");
      return false;
    }

    if (
      !email.includes("@") ||
      !email.substring(email.indexOf("@"), email.length).includes(".")
    ) {
      setIsInputFieldError(true);
      setEmailHelperText("Invalid email");
      return false;
    }

    if (password !== confirmPassword) {
      setIsInputFieldError(true);
      setPasswordHelperText("Passwords are not equal");
      setConfirmPasswordHelperText("Passwords are not equal");
      return false;
    }
    return true;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () =>
    setShowPassword((prevShow) => !prevShow);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prevShow) => !prevShow);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const clearInputFields = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  // Handle the creation of the user

  const handleSignUp = () => {
    const user = {
      email: email,
      password: password,
    };
    if (validateEmailAndPassword()) {
      dispatch(createUser(user));
      setIsInputFieldError(false);
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1250);
    }
    clearInputFields();
  };

  return (
    <form
      className="login-content-right-form"
      method="POST"
      action="/signup"
      onSubmit={handleSubmit}
    >
      <StyledCustomTextField
        type="text"
        value={email}
        label="Email"
        onChange={handleEmailChange}
        helperText={emailHelperText}
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        error={isInputFieldError}
      />
      <StyledCustomTextField
        type={showPassword ? "text" : "password"}
        value={password}
        label="Password"
        onChange={handlePasswordChange}
        helperText={passwordHelperText}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
        error={isInputFieldError}
      />
      <StyledCustomTextField
        type={showConfirmPassword ? "text" : "password"}
        value={confirmPassword}
        label="Confirm password"
        onChange={handleConfirmPasswordChange}
        helperText={confirmPasswordHelperText}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
        error={isInputFieldError}
      />
      <StyledCustomButton
        type="submit"
        title="Sign up"
        onClick={() => {
          handleSignUp();
        }}
      />
    </form>
  );
};

export default SignUpForm;
