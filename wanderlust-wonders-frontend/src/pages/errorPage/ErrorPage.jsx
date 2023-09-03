import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page-container">
        <img
          src="https://storage.googleapis.com/wanderlust_cities_bucket/error.png"
          alt="Error"
          className="error-page-image"
        />
        <h1 className="error-page-title">Oops!</h1>
        <p className="error-page-description">
          You are trying to access the non-existing page
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
