import React from "react";
import RemoveAllButton from "./RemoveAllButton";

const StyledRemoveAllButton = ({ onClick, children }) => {
  return <RemoveAllButton onClick={onClick}>{children}</RemoveAllButton>;
};

export default StyledRemoveAllButton;
