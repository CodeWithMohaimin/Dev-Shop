import React from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import logo from "../lottie-json/logo.json";

import { Link } from "react-router-dom";

// import { VscMenu } from "react-icons/vsc";
// import { VscClose } from "react-icons/vsc";
import menu from "../image/menu-icon.svg";
import close from "../image/close-icon.svg";

const Links = [
  { name: "Home", link: "/" },
  { name: "Navbars", link: "/navbars" },
  { name: "Cards", link: "/cards" },
  { name: "Images", link: "/images" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="shadow-md w-full bg-star">
      <div className="max-w-7xl mx-auto sm:px-4 bg-transparent flex items-center justify-between ">
        <div className="flex items-center">
          <Lottie className="w-20 h-20" animationData={logo} />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-pink-500 text-2xl lg:text-5xl ">
            Dev. Shop
          </h1>
        </div>

        <div
          className={` absolute sm:static top-20 bg-star bg-cover bg-pink-50 sm:bg-transparent sm:w-auto w-full sm:pl-0 text-center sm:py-0 z-10 sm:shadow-none shadow-lg`}
        >
          <ul
            className={`${
              !toggle ? "hidden" : "inline"
            } sm:flex sm:gap-6 w-full`}
          >
            {Links.map((link, index) => (
              <li className="py-2" key={index}>
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

        <div className="sm:hidden pr-4 cursor-pointer inline">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain "
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
