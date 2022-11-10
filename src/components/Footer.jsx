import React from "react";
import Lottie from "lottie-react";
import logo from "../lottie-json/logo.json";
import { Link } from "react-router-dom";

const Footer = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Navbars", link: "/navbars" },
    { name: "Cards", link: "/cards" },
    { name: "Images", link: "/images" },
  ];

  return (
    <section className="min-h-20 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap">
        <div>
          <div className="flex items-center">
            <Lottie className="w-20 h-20" animationData={logo} />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-pink-500 text-2xl lg:text-5xl ">
              Dev. Shop
            </h1>
          </div>

          <div className="sm:pl-6">
            <ul className="flex space-x-6">
              {Links.map((link, index) => (
                <li className="py-2 text-gray-500" key={index}>
                  <Link
                    className="text-lg hover:text-teal-500 focus:text-pink-500 duration-200"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-500">
              A navigation bar is a navigation header that is placed at the top
              of the page
            </p>
          </div>
        </div>
        {/* right section  */}

        <div className="mt-4 sm:pl-4 text-center mb-10">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-500 sm:pl-2 text-center">
            Subscribe Newsletter
          </h3>
          <input
            className="m-1 bg-star px-8 py-2 text-white font-semibold text-1xl rounded-full bg-pink-500 hover:bg-pink-400 transition-colors hover:text-pink-50 tracking-wide outline-none"
            type="text"
            placeholder="Your Email "
          />{" "}
          <br />
          <button className="m-1 bg-star px-8 py-2 text-white font-semibold text-1xl rounded-full bg-pink-500 hover:bg-pink-400 transition-colors hover:text-pink-50 tracking-wide">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
