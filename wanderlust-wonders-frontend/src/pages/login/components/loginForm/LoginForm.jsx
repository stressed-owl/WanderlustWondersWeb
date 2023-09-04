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

  const [userInputs, setUserInputs] = useState({ email: "", password: "" });
  
  const [showPassword, setShowPassword] = useState(false);

  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const [isInputFieldError, setIsInputFieldError] = useState(false);

  const handleUserInputsChange = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const clearInputFields = () => {
    setUserInputs({ email: "", password: "" });
  };

  const validateEmailAndPassword = () => {
    if (userInputs.email.length === 0 || userInputs.password.length === 0) {
      setIsInputFieldError(true);
      setEmailHelperText("Both email and password are required");
      setPasswordHelperText("Both email and password are required");
      return false;
    }
    if (userInputs.password.length < 8) {
      setIsInputFieldError(true);
      setPasswordHelperText("Length must be at least 8 symbols");
      return false;
    }
    if (userInputs.password.length > 50) {
      setIsInputFieldError(true);
      setPasswordHelperText("The max length is 50 symbols");
      return false;
    }
    if (!(userInputs.email.includes("@") || userInputs.email.includes("."))) {
      setIsInputFieldError(true);
      setEmailHelperText("Invalid email");
      return false;
    }
    return true;
  };

  const user = {
    email: userInputs.email,
    password: userInputs.password,
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
        name="email"
        type="text"
        value={userInputs.email || ""}
        label="Email"
        onChange={handleUserInputsChange}
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
        name="password"
        type={showPassword ? "text" : "password"}
        value={userInputs.password || ""}
        label="Password"
        helperText={passwordHelperText}
        error={isInputFieldError}
        onChange={handleUserInputsChange}
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
