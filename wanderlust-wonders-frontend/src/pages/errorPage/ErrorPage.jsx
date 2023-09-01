import React from 'react';
import errorImage from "../../assets/img/error.png";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page-container">
        <img src={errorImage} alt="Error" className="error-page-image"/>
        <h1 className="error-page-title">Oops!</h1>
        <p className="error-page-description">You are trying to access the non-existing page</p>
      </div>
    </div>
  );
}
