import React from "react";
import CustomButton from "./CustomButton";

const StyledCustomButton = ({ icon, onClick, label }) => {
  return (
    <CustomButton variant="contained" onClick={onClick}>
      <img src={icon} alt="Sorting icon" />
      {label}
    </CustomButton>
  );
};

export default StyledCustomButton;
