import {
  Autocomplete,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#EDBFC6",
    },
  },
});

const CustomAutocomplete = styled(Autocomplete)(() => ({
  width: 300,
  fontFamily: "Open Sans",
}));

const CustomTextField = styled(TextField)(() => ({
  fontFamily: "Open Sans",
  padding: "8px 0px"
}));

const FavoriteInputField = (props) => {
  return (
    <CustomAutocomplete
      options={props.options}
      inputValue={props.value}
      renderInput={(params) => (
        <ThemeProvider theme={theme}>
          <CustomTextField
            {...params}
            id="standard-basic"
            color="secondary"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            label={props.label}
            variant="standard"
            placeholder={props.placeholder}
            required={props.required}
            error={props.error}
            helperText={props.helperText}
            InputProps={props.inputProps}
          />
        </ThemeProvider>
      )}
    />
  );
};

export default FavoriteInputField;
