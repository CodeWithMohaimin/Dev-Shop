import React from "react";
import { useNavigate } from "react-router-dom";

import navbarImage from "../image/navbar-section.png";
import cardImage from "../image/card-section.png";
import images from "../image/image-section.png";

const Markets = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-market mt-4">
      <div className="flex justify-center items-center px-2 min-h-30 bg-transparent">
        <h1 className="text-center capitalize text-4xl sm:text-6xl font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 border-b-2 border-purple-100 pb-2">
          Welcome To
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-orange-300 pl-2">
            Dev. Market
          </span>
        </h1>
      </div>

      <div className="flex justify-center min-h-60 items-center gap-8 flex-wrap my-10 px-4">
        {/* card  */}
        <div
          className="shadow-2xl  text-center max-w-md w-full border-pink-200 border-t-4 rounded-2xl cursor-pointer"
          onClick={() => {
            navigate("/navbars");
          }}
        >
          <div className="flex justify-center p-4">
            <img
              className="max-w-xs rounded-lg"
              src={navbarImage}
              alt="navar"
            />
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-blue-200 p-4 mt-6 rounded-b-2xl">
            <h1 className="text-2xl sm:text-3xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-300">
              navbars
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
        {/* card  */}
        <div
          className="shadow-2xl  text-center max-w-md w-full border-pink-200 border-t-4 rounded-2xl cursor-pointer"
          onClick={() => {
            navigate("/cards");
          }}
        >
          <div className="flex justify-center p-4">
            <img className="max-w-xs rounded-lg" src={cardImage} alt="navar" />
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-red-200 p-4 mt-6 rounded-b-2xl">
            <h1 className="text-2xl sm:text-3xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-t from-red-300 to-white">
              Cards
            </h1>
            <p className="text-lg text-gray-500 p-6">
              Here The main Market place for developer's. It's called
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-white px-2">
                Dev. card
              </span>
              A navigation bar is a navigation header that is placed at the top
              of the page
            </p>
          </div>
        </div>
        {/* card */}
        {/* card  */}
        <div
          className="shadow-2xl  text-center max-w-md w-full border-pink-200 border-t-4 rounded-2xl cursor-pointer"
          onClick={() => {
            navigate("/images");
          }}
        >
          <div className="flex justify-center p-4">
            <img className="max-w-xs rounded-lg" src={images} alt="navar" />
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-teal-400 p-4 mt-6 rounded-b-2xl">
            <h1 className="text-2xl sm:text-3xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-purple-600">
              Images
            </h1>
            <p className="text-lg text-gray-500 p-6">
              Here The main Market place for developer's. It's called
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 to-purple-600 px-2">
                Dev. image
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
