import React from "react";
import CustomIconButton from "./CustomIconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#E9AFB9",
    color: "#000",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    fontFamily: "Open Sans",
    fontWeight: "400",
    borderRadius: "8px",
    padding: "8px 12px",
  },
}));

const StyledCustomIconButton = ({ onClick, children }) => {
  return (
    <CustomTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">Share</Typography>
          {"Allows you to share a link of a city with your friends"}
        </React.Fragment>
      }
    >
      <CustomIconButton onClick={onClick}>{children}</CustomIconButton>
    </CustomTooltip>
  );
};

export default StyledCustomIconButton;
