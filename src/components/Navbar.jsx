import React from "react";
import Lottie from "lottie-react";
import logo from "../lottie-json/logo.json";

import bun from "../image/menu-icon.svg";
import cross from "../image/close-icon.svg";
import { Link } from "react-router-dom";

const Links = [
  { name: "Home", link: "/" },
  { name: "Navbars", link: "/navbars" },
  { name: "Cards", link: "/cards" },
];

const Navbar = () => {
  return (
    <section className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 bg-transparent flex items-center justify-between">
        <div className="flex items-center">
          <Lottie className="w-20 h-20" animationData={logo} />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-pink-500 text-2xl lg:text-5xl ">
            Dev. Shop
          </h1>
        </div>

        <div>
          <ul className="sm:flex gap-6 absolute sm:static bg-gray-400">
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-lg hover:text-teal-500 focus:text-pink-500 duration-200"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            className="sm:hidden cursor-pointer"
            src={bun}
            alt="hamburger menu"
          />
          <img
            className="sm:hidden cursor-pointer"
            src={cross}
            alt="hamburger menu"
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
