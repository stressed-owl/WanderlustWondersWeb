import React from "react";
import "../form/FormButton.css";

function FormButton({ title, onClick, className, type }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {title}
    </button>
  );
}

export default FormButton;
