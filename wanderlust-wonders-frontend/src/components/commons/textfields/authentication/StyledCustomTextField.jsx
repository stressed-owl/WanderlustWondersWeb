import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import CustomTextField from "./CustomTextField";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EDBFC6",
    },
  },
});

const StyledCustomTextField = ({
  label,
  type,
  value,
  onChange,
  inputProps,
  helperText,
  error,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomTextField
        id="outlined-basic"
        variant="outlined"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        InputProps={inputProps}
        helperText={helperText}
        error={error}
      />
    </ThemeProvider>
  );
};

export default StyledCustomTextField;
