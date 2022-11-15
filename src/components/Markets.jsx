import React from "react";
import { useNavigate } from "react-router-dom";

import MarketData from "../Data/Market.json";

const Markets = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-market mt-4  pb-60">
      <div className="flex justify-center items-center px-2 min-h-30 bg-transparent">
        <h1 className="text-center capitalize text-4xl sm:text-6xl font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 md:border-b-2 border-purple-100 pb-2">
          Welcome To
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-orange-300 pl-2">
            Dev. Market
          </span>
        </h1>
      </div>

      {/* card  */}
      <div className="flex justify-center flex-wrap p-4">
        {MarketData.map((cardInfo, index) => (
          <div
            key={index}
            className="text-center max-w-sm w-full border-pink-200 border-l-2 border-t-4 shadow-xl rounded-2xl cursor-pointer m-4 flex items-end duration-300 hover:scale-90"
            onClick={() => {
              navigate("/navbars");
            }}
          >
            <div>
              <div className="flex justify-center items-center p-2">
                <img
                  className="max-w-xs rounded-lg overflow-hidden w-full"
                  src={cardInfo.cardImage}
                  alt="navbar"
                />
              </div>

              <div className="bg-gradient-to-br from-pink-200 to-blue-200 p-4 rounded-b-2xl">
                <h1 className="text-2xl sm:text-3xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-300">
                  {cardInfo.title}
                </h1>
                <p className="text-lg text-gray-500 p-2">
                  {cardInfo.oneText}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-200 px-2">
                    {cardInfo.colorText}
                  </span>
                  {cardInfo.lastText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Markets;
