import React from "react";
import { Snackbar } from "@mui/material";

const FavoriteItemSnackbar = ({ message, open, onClose }) => {
  return (
    <Snackbar
      message={message}
      open={open}
      autoHideDuration={800}
      onClose={onClose}
    />
  );
};

export default FavoriteItemSnackbar;
