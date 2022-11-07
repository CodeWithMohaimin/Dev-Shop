import React from "react";
import Lottie from "lottie-react";
import logo from "../lottie-json/logo.json";

import bun from "../image/menu-icon.svg";
import cross from "../image/close-icon.svg";

const Navbar = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-6 bg-transparent flex items-center justify-between">
        <div className="flex items-center">
          <Lottie className="w-20 h-20" animationData={logo} />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-500 text-2xl lg:text-5xl ">
            Dev. Shop
          </h1>
        </div>

        <div>
          <img src={bun} alt="hamburger menu" />
          <img src={cross} alt="hamburger menu" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
