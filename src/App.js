import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WOW from "wowjs";
import "./App.css";
import { FaArrowUp } from "react-icons/fa";
import { $ } from "react-jquery-plugin";

import {
  About,
  Contact,
  Error,
  Footer,
  Home,
  Menu,
  Nav,
  Reservation,
  Service,
} from "./components";

function App() {
  // Back to top button
// for wow js library 
  useEffect(() => {
     $(window).scroll(function () {
       if ($(this).scrollTop() > 300) {
         $(".back-to__top").fadeIn("slow");
       } else {
         $(".back-to__top").fadeOut("slow");
       }
     });
     $("button").click(function () {
       $("html, body").animate({ scrollTop: 0 }, 100);
       return false;
     });
    new WOW.WOW().init();
  });

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Gathering />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {<Footer />}
      </BrowserRouter>
      <button
        href="#"
        className="btn btn-lg btn-warning btn-lg-square back-to__top"
      >
        <FaArrowUp className="text-center" />
      </button>
    </div>
  );
}

export default App;
