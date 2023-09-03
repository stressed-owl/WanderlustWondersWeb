import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../../api/axios";
import StyledCustomButton from "../../../../components/buttons/form/StyledCustomButton";
import StyledCustomTextField from "../../../../components/commons/textfields/authentication/StyledCustomTextField";
import { useAuth } from "../../../../provider/authProvider";

const LoginForm = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const [isInputFieldError, setIsInputFieldError] = useState(false);

  /**
   * The code defines three functions in JavaScript React for handling email and password changes and
   * form submission.
   */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const clearInputFields = () => {
    setEmail("");
    setPassword("");
  };

  const validateEmailAndPassword = () => {
    if (email.length === 0 || password.length === 0) {
      setIsInputFieldError(true);
      setEmailHelperText("Both email and password are required");
      setPasswordHelperText("Both email and password are required");
      return false;
    }
    if (password.length < 8) {
      setIsInputFieldError(true);
      setPasswordHelperText("Length must be at least 8 symbols");
      return false;
    }
    if (password.length > 50) {
      setIsInputFieldError(true);
      setPasswordHelperText("The max length is 50 symbols");
      return false;
    }
    if (!(email.includes("@") || email.includes("."))) {
      setIsInputFieldError(true);
      setEmailHelperText("Invalid email");
      return false;
    }
    return true;
  };

  const user = {
    email: email,
    password: password,
  };

  const handleLogIn = () => {
    if (validateEmailAndPassword()) {
      API.post("/login", user)
        .then((response) => {
          const token = response.data.token;
          setToken(token);
          navigate("/", { replace: true });
          setIsInputFieldError(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setIsInputFieldError(true);
            setEmailHelperText("Invalid email or password. Try again!");
            setPasswordHelperText("Invalid email or password. Try again!");
          }
        });
    }
    clearInputFields();
  };

  return (
    <form
      className="login-content-right-form"
      method="POST"
      action="/login"
      onSubmit={handleSubmit}
    >
      <StyledCustomTextField
        type="text"
        value={email}
        label="Email"
        onChange={handleEmailChange}
        helperText={emailHelperText}
        error={isInputFieldError}
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <StyledCustomTextField
        type={showPassword ? "text" : "password"}
        value={password}
        label="Password"
        helperText={passwordHelperText}
        error={isInputFieldError}
        onChange={handlePasswordChange}
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
      />
      <StyledCustomButton
        type="submit"
        title="Log in"
        onClick={() => {
          handleLogIn();
        }}
      />
    </form>
  );
};

export default LoginForm;
