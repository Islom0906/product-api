import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-24 bg-white shadow-xl dark:bg-black ">
      <div className="container mx-auto">
        <ul className="flex flex-wrap items-center justify-between py-10">
          <li>
            <Link to="/all-products" className="text-sm text-navbarColor dark:text-white">ALL PRODUCTS</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor dark:text-white">ABOUT SEEDRA</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor dark:text-white">OUR BLOG</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor dark:text-white"><img src="./assets/image/logo.png" alt="" /></Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor dark:text-white">Terms&Conditions</Link>
          </li>
          <li>
            <Link to="/" className="text-sm text-navbarColor dark:text-white">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
