import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="card">
          <i className="icon fas fa-phone"></i>
          <div className="card-content">
            <h3>Telefon</h3>
            <span>0757352945</span>
          </div>
        </div>
        <a
          href="https://www.facebook.com/fanfara.tineriibucovineni"
          className="card"
        >
          <i className="icon fab fa-facebook"></i>
          <div className="card-content">
            <h3>Facebook</h3>
            <span className="facebook">Fanfara Folclorica Bucovina</span>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=1MMbFMcBSDI" className="card">
          <i className=" icon fab fa-youtube"></i>
          <div className="card-content">
            <h3>YouTube</h3>
            <span>Fanfara Bucovina</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
