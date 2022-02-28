import React, { useEffect } from "react";
import { $ } from "react-jquery-plugin";
import { FaAnkh, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./Nav.css";

const Nav = () => {
  // Dropdown on mouse hover
  const $dropdown = $(".dropdown"); //document.querySelector(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  useEffect(() => {
    /// Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 60) {
        $(".navbar").addClass("sticky-top shadow-sm");
      } else {
        $(".navbar").removeClass("sticky-top shadow-sm");
      }
    });
    $(window).on("load resize", function () {
      if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 px-lg-5 py-3 py-lg-0">
        <NavLink to="/" className="navbar-brand p-0">
          <h1 className="text-warning m-0">
            <FaAnkh className="me-3 col-sm-me-0" />
            <img src={Logo} alt="Logo" />
            <span className="hidden-text__media">Restaurant</span>
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <NavLink to="/" className="nav-item nav-link active">
              Home
            </NavLink>
            <NavLink to="/About" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/Service" className="nav-item nav-link">
              Service
            </NavLink>
            <NavLink to="/Menu" className="nav-item nav-link">
              Menu
            </NavLink>
            <NavLink to="/Reservation" className="nav-item nav-link">
              Booking
            </NavLink>
            <NavLink to="/Contact" className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
