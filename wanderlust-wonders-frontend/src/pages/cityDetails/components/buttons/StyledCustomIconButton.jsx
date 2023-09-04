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

const StyledCustomIconButton = (props) => {
  return (
    <CustomTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">{props.actionName}</Typography>
          {props.actionDesc}
        </React.Fragment>
      }
    >
      <CustomIconButton onClick={props.onClick}>{props.children}</CustomIconButton>
    </CustomTooltip>
  );
};

export default StyledCustomIconButton;
