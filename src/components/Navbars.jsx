import React from "react";
import { useNavigate } from "react-router-dom";

import CardInfo from "../Data/NavbarData.json";

const Navbars = () => {
  const navigate = useNavigate();

  // start Component -------------------->
  return (
    <section>
      <div className="bg-pink-100 mb-6 bg-star">
        <div className="min-h-40 text-center flex justify-center items-center max-w-2xl mx-auto p-4">
          <h1 className="text-4xl font-bold sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-teal-500">
            Choose a navbar copy those codes and use for save your time
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap p-4">
        {CardInfo.map((cardInfo, index) => (
          <div
            key={index}
            className="text-center max-w-sm w-full border-pink-200 border-l-2 border-t-4 shadow-xl rounded-2xl m-4"
          >
            <div>
              <div className="flex justify-center">
                <img
                  className="max-w-xs rounded-lg"
                  src={cardInfo.cardImage}
                  alt="navbar"
                />
              </div>
              <div className="bg-gradient-to-br from-pink-200 to-blue-200 p-2 mt-6 rounded-b-2xl">
                <h1 className="text-2xl sm:text-3xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-300">
                  {cardInfo.title} {index + 1}
                </h1>

                <p className="text-lg text-gray-500 p-6">
                  {cardInfo.oneText}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-200 px-2">
                    {cardInfo.colorText}
                  </span>
                  {cardInfo.lastText}
                </p>

                <div>
                  <button
                    onClick={() => {
                      navigate(cardInfo.navigateValueReact);
                    }}
                    className="m-1 bg-star px-8 py-2 text-gray-600 font-semibold text-1xl rounded-full bg-pink-500 hover:bg-pink-400 transition-colors hover:text-pink-50 tracking-wide"
                  >
                    React
                  </button>
                  <button
                    onClick={() => {
                      navigate(cardInfo.navigateValueHtml);
                    }}
                    className="m-1 bg-star px-8 py-2 text-gray-600 font-semibold text-1xl rounded-full bg-pink-500 hover:bg-pink-400 transition-colors hover:text-pink-50 tracking-wide"
                  >
                    HTML & CSS
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navbars;
