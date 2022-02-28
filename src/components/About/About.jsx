import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./About.css";
import { Team } from "..";

function About() {
  const [margin, setMargin] = useState("25%");
  const [counter, setCounter] = useState("counter-up");
  const style = {
    "margin-top": "25%",
  };

  const location = useLocation();
  return (
    <>
      {/*start hero section */}
      {location.pathname === "/About" ? (
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <NavLink className="colored" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink className="colored" to="/">
                    Pages
                  </NavLink>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      ) : null}

      {/* end hero section */}
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="images/about-1.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="images/about-2.jpg"
                    style={{ marginTop: margin }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="images/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="images/about-4.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-warning fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <FaUtensils className="text-warning me-2" />
                TUTS Restaurant
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                    <p className="flex-shrink-0 display-5 text-warning mb-0">
                      <CountUp end={15} start={0} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </p>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                    <h1 className="flex-shrink-0 display-5 text-warning mb-0">
                      <CountUp end={50} start={0} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-warning py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      {location.pathname === "/About" && <Team />}
    </>
  );
}

export default About;
