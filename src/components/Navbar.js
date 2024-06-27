import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#EDEFFD] text-[#4464AD] p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="./Hero.js">
            <img src={logo} alt="HotelGo Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold"></span>
          </a>
        </div>
        <div className="hidden md:flex">
          <a href="#facilities" className="mx-2">
            Facilities
          </a>
          <a href="#best-offer" className="mx-2">
            Best Offer
          </a>
          <a href="#contact" className="mx-2">
            About
          </a>
          <a href="#contact" className="mx-2">
            Contact
          </a>
          <Link to="/payment">Payment</Link>
        </div>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
