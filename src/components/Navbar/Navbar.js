import React from "react";
import "./Navbar.css";
import $ from "jquery";
import { Link } from "react-router-dom";
const Navbar = () => {
  $(document).ready(function () {
    $("#menu-toggle, #menu > ul > li > a").click(function (e) {
      var $toggle = $(this);
      var $menu = $("#" + $(this).attr("aria-controls"));
      if ($menu.attr("aria-hidden") === "true") {
        $("body").addClass("open");
        $menu.attr("aria-hidden", "false");
        $toggle.attr("aria-expanded", "true");
      } else if ($menu.attr("aria-hidden") === "false") {
        $("body").removeClass("open");
        $menu.attr("aria-hidden", "true");
        $toggle.attr("aria-expanded", "faremove");
      }
    });
  });

  return (
    <div>
      <header className="banner">
        <button
          id="menu-toggle"
          aria-label="Menu"
          aria-expanded="false"
          aria-controls="menu"
        ></button>
      </header>

      <nav
        id="menu"
        aria-hidden="true"
        aria-labelledby="menu-toggle"
        role="navigation"
      >
        <ul>
          <li>
            <Link to="/" className="a">
              ACASĂ
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="a">
              DESPRE NOI
            </Link>
          </li>
          <li>
            <Link to="/our-work" className="a">
              MATERIALE VIDEO
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
