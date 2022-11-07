import React from "react";
import { useNavigate } from "react-router-dom";
import navbarImage from "../image/image-section.png";

const Navbars = () => {
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
      cardImage: navbarImage,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
    {
      cardImage: navbarImage,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
    {
      cardImage: navbarImage,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
    {
      cardImage: navbarImage,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
    {
      cardImage: navbarImage,
      title: "Navbar",
      oneText: "Here The main Market place for developer's. It's called",
      colorText: "Dev. Nav",
      lastText:
        "A navigation bar is a navigation header that is placed at the top of the page",
    },
  ];

  // starting Component -------------------->
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
                <p className="text-lg text-gray-500 p-6">
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

export default Navbars;
