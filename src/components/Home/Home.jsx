import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

// components
import {
  About,
  Menu,
  Reservation,
  Service,
  Team,
  Testimonials,
  Contact,
} from "../index.js";

const Home = () => {
  return (
    <>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <NavLink
                to={<Reservation />}
                className="btn btn-warning py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Book A Table
              </NavLink>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src="images/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Service />
      <About />
      <Menu />
      <Reservation />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
