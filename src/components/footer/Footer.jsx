import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-24 bg-white shadow-xl ">
      <div className="container mx-auto">
        <ul className="flex flex-wrap items-center justify-between py-10">
          <li>
            <Link to="/all-products" className="text-sm text-navbarColor">ALL PRODUCTS</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor">ABOUT SEEDRA</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor">OUR BLOG</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor"><img src="./assets/image/logo.png" alt="" /></Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor">Terms&Conditions</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
