import React, { Fragment } from "react";
import { FaCartPlus, FaHeadset, FaUserTie, FaUtensils } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import "./Service.css";

function Service() {
  const location = useLocation();
  return (
    <Fragment>
      {/*start hero section */}
      {location.pathname === "/Service" && (
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Services
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
                  Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
      )}
      {/* end hero section */}
      {/* <!-- Service Start --> */}
      <div className="container-xxl py-2">
        <div className="container">
          <div className="row g-4">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-warning fw-normal">
                Our Services
              </h5>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaUserTie className="fa fa-3x text-warning mb-4" />
                  <h5>Master Chefs</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaUtensils className="fa fa-3x text-warning mb-4" />
                  <h5>Quality Food</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaCartPlus className="fa fa-3x text-warning mb-4" />
                  <h5>Online Order</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaHeadset className="fa fa-3x text-warning mb-4" />
                  <h5>24/7 Service</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
      {/*repeating for service page */}
      {location.pathname === "/Service" && (
        <div className="container-xxl py-2">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <FaUserTie className="fa fa-3x text-warning mb-4" />
                    <h5>Master Chefs</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <FaUtensils className="fa fa-3x text-warning mb-4" />
                    <h5>Quality Food</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <FaCartPlus className="fa fa-3x text-warning mb-4" />
                    <h5>Online Order</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <FaHeadset className="fa fa-3x text-warning mb-4" />
                    <h5>24/7 Service</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Service;
