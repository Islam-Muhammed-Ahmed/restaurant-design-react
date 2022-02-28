import React, { useState, Fragment } from "react";
import "./Menu.css";
import { FaCoffee, FaHamburger, FaUtensils } from "react-icons/fa";

import {NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const [toggleTab, settoggleTab] = useState(1);

  const toggleTab__Func = (index) => {
    settoggleTab(index);
  };
  const location = useLocation();
  return (

    <Fragment>
      {/*start hero section */}
      {location.pathname === "/Menu" ? (
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Food Menu
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
                  Menu
                </li>
              </ol>
            </nav>
          </div>
        </div>
      ) : null}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-warning fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <span
                  onClick={() => toggleTab__Func(1)}
                  className="d-flex align-items-center text-start pointer-span mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <FaCoffee className="fa-3x text-warning" />
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0 text-warning">Breakfast</h6>
                  </div>
                </span>
              </li>
              <li className="nav-item">
                <span
                  onClick={() => toggleTab__Func(2)}
                  className="d-flex align-items-center pointer-span text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <FaHamburger className="fa-3x text-warning" />
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0 text-warning">Launch</h6>
                  </div>
                </span>
              </li>
              <li className="nav-item">
                <span
                  onClick={() => toggleTab__Func(3)}
                  className="d-flex align-items-center pointer-span text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <FaUtensils className="fa-3x text-warning" />
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0 text-warning">Dinner</h6>
                  </div>
                </span>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-1.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-2.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-3.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-4.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-5.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-6.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-7.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-8.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-1.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-2.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-3.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-4.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-5.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-6.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-7.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-8.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-1.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-2.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-3.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-4.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-5.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-6.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-7.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="images/menu-8.jpg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-warning">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
