import React from "react";
import logo from "../../../assets/icons/flight_takeoff.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = ({ navigateTo }) => {
  return (
    <div className="logo">
      <div className="logo-image-wrapper">
        <img className="app-logo" src={logo} alt="Logo" />
      </div>
      <Link className="btn-logo" to={navigateTo}>
        <p className="logo-app-name">Wanderlust Wonders</p>
      </Link>
    </div>
  );
};

export default Logo;
