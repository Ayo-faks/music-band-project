import React, { Component } from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="top-section">
          <h1>Fanfara Folclorică Bucovina</h1>
        </div>
        <div className="middle-section">
          <div className="middle-section-content">
            <h1>Ducem tradiția mai departe!</h1>
            <h2>Contactați-ne pentru colaborări.</h2>
          </div>
          <div className="middle-section-buttons">
            <Link to="/our-work" className="clips-btn">
              Clipuri
            </Link>
          </div>
        </div>
        <div className="bottom-section">
          <Footer />
        </div>
      </div>
    );
  }
}
