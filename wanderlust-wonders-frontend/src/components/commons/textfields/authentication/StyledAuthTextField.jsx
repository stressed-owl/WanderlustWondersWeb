import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import AuthTextField from "./AuthTextField";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EDBFC6",
    },
  },
});

export default function StyledAuthTextField({ label, type, value, onChange, inputProps, helperText, error }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthTextField
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
}
