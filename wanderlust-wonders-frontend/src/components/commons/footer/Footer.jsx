import React from "react";
import logo from "../../../assets/icons/flight_takeoff.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo-wrapper">
          <img className="footer-logo" src={logo} alt="Logo" />
        </div>
        <p className="footer-app-title">Wanderlust Wonders</p>
      </div>
    </footer>
  );
};

export default Footer;
