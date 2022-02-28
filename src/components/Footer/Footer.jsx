import React from "react";
import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaAnkh,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white footer pt-5 mt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">
                Company
              </h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Reservation
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2">
                <FaMapMarker className="me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <FaPhone className="me-3" />
                +010 272 47203
              </p>
              <p className="mb-2">
                <FaEnvelope className="me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <FaTwitter className="fa-3x" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaFacebook />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaYoutube />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">
                Opening
              </h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">
                Newsletter
              </h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  <FaAnkh /> TUTS Restaurant
                </a>
                , All Right Reserved. Designed By{" "}
                <a
                  className="border-bottom"
                  href="https://htmlcodex.com"
                  target={"_blank"}
                >
                  HTML Codex
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <NavLink to="#">Home</NavLink>
                  <NavLink to="#">Cookies</NavLink>
                  <NavLink to="#">Help</NavLink>
                  <NavLink to="#">FQAs</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
