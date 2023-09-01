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

const FavoriteInputField = ({
  value,
  onChange,
  required,
  label,
  placeholder,
  error,
  options,
  name,
  helperText,
  inputProps,
}) => {
  return (
    <CustomAutocomplete
      options={options}
      inputValue={value}
      renderInput={(params) => (
        <ThemeProvider theme={theme}>
          <CustomTextField
            {...params}
            id="standard-basic"
            color="secondary"
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            variant="standard"
            placeholder={placeholder}
            required={required}
            error={error}
            helperText={helperText}
            InputProps={inputProps}
          />
        </ThemeProvider>
      )}
    />
  );
};

export default FavoriteInputField;
