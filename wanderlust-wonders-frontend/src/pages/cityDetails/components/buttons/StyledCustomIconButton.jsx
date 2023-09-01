import React from "react";
import CustomIconButton from "./CustomIconButton";
import { Tooltip } from "@mui/material";

const StyledCustomIconButton = ({ onClick, children }) => {
  return (
    <Tooltip title="Share">
      <CustomIconButton onClick={onClick}>{children}</CustomIconButton>
    </Tooltip>
  );
};

export default StyledCustomIconButton;
