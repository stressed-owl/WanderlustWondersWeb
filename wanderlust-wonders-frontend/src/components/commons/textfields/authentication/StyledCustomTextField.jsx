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

const StyledCustomTextField = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomTextField
        id="outlined-basic"
        variant="outlined"
        label={props.label}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        InputProps={props.inputProps}
        helperText={props.helperText}
        error={props.error}
        name={props.name}
      />
    </ThemeProvider>
  );
};

export default StyledCustomTextField;
