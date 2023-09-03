import React from "react";
import CustomButton from "./CustomButton";

const StyledCustomButton = ({ title, onClick, type }) => {
  return (
    <CustomButton type={type} onClick={onClick}>
      {title}
    </CustomButton>
  );
}

export default StyledCustomButton;
