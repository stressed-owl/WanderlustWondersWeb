import React from "react";
import CustomTypography from "./CustomTypography";

const StyledCustomTypography = ({ fontSize, fontWeight, children }) => {
  return (
    <CustomTypography fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </CustomTypography>
  );
};

export default StyledCustomTypography;
