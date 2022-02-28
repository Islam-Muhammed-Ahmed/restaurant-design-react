import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl testimonials py-5 wow fadeInUp">
        <div className="container">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-warning fw-normal">
              Testimonial
            </h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <OwlCarousel className="testimonial-carousel">
            <div className="testimonial-item bg-transparent border rounded p-4">
              <FaQuoteLeft className="fa-2x text-warning mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex item align-items-center">
                <img
                  className="img-fluid owl-img flex-shrink-0 rounded-circle"
                  src="images/testimonial-1.jpg"
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <FaQuoteLeft className="fa-2x text-warning mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid owl-img flex-shrink-0 rounded-circle"
                  src="images/testimonial-2.jpg"
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <FaQuoteLeft className="fa-2x text-warning mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid owl-img flex-shrink-0 rounded-circle"
                  src="images/testimonial-3.jpg"
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
              <FaQuoteLeft className="fa-2x text-warning mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid owl-img flex-shrink-0 rounded-circle"
                  src="images/testimonial-4.jpg"
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
};

export default Testimonials;
