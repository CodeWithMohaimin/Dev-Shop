import React from "react";
import { useNavigate } from "react-router-dom";

import navbarImage from "../image/navbar-section.png";

const Markets = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-market">
      <div className="flex justify-center items-center min-h-20 bg-gradient-to-tl from-pink-100 to-gray-200">
        <h1 className="text-center capitalize text-3xl sm:text-5xl font-semibold sm:font-bold text-gray-600">
          Welcome To
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-orange-300 pl-2">
            Dev. Market
          </span>
        </h1>
      </div>

      <div className="flex justify-center min-h-60 items-center">
        <div
          className="shadow-2xl p-2 text-center max-w-md w-full border-gray-300 border-t-2 border-l-2 rounded-2xl cursor-pointer"
          onClick={() => {
            navigate("/navbars");
          }}
        >
          <div className="flex justify-center">
            <img
              className="max-w-xs rounded-lg"
              src={navbarImage}
              alt="navar"
            />
          </div>
          <div className="py-4">
            <h1 className="text-2xl sm:text-3xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-300">
              navbar
            </h1>
            <p className="text-lg text-gray-500 p-6">
              Here The main Market place for developer's. It's called{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-200 px-2">
                Dev. Nav
              </span>
              A navigation bar is a navigation header that is placed at the top
              of the page
            </p>
          </div>
        </div>
        {/* card */}
      </div>
    </section>
  );
};

export default Markets;
