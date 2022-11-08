import React from "react";
import { useNavigate } from "react-router-dom";

import navbarImage from "../image/navbar-section.png";
import cardImage from "../image/card-section.png";
import images from "../image/image-section.png";

const Markets = () => {
  const navigate = useNavigate();

  // Card Data -------------->
  const CardInfo = [
    {
      cardImage: navbarImage,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
    {
      cardImage: cardImage,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
    {
      cardImage: images,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
  ];

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
      <div className="flex justify-center items-center flex-wrap p-4">
        {CardInfo.map((cardInfo, index) => (
          <div
            key={index}
            className="text-center max-w-sm w-full border-pink-200 border-l-2 border-t-4 shadow-xl rounded-2xl cursor-pointer m-4"
            onClick={() => {
              navigate("/navbars");
            }}
          >
            <div>
              <div className="flex justify-center">
                <img
                  className="max-w-xs rounded-lg"
                  src={cardInfo.cardImage}
                  alt="navbar"
                />
              </div>
              <div className="bg-gradient-to-br from-pink-200 to-blue-200 p-4 mt-6 rounded-b-2xl">
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
