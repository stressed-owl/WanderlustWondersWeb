import React from "react";
import CustomButton from "./CustomButton";

const StyledCustomButton = ({ title, onClick }) => {
  return (
    <CustomButton onClick={onClick}>
      {title}
    </CustomButton>
  );
}

export default StyledCustomButton;