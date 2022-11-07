import React from "react";
import { useNavigate } from "react-router-dom";
import navbarImage from "../image/image-section.png";

const Navbars = () => {
  const navigate = useNavigate();
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
  ];
  return (
    <div className="">
      {CardInfo.map((cardInfo, index) => (
        <div
          className="text-center max-w-md w-full border-pink-200 border-2 rounded-2xl cursor-pointer m-10"
          onClick={() => {
            navigate("/navbars");
          }}
        >
          <div key={index}>
            <div className="flex justify-center">
              <img
                className="max-w-xs rounded-lg"
                src={cardInfo.cardImage}
                alt="navbar"
              />
            </div>
            <div className="bg-gradient-to-br from-pink-200 to-blue-200 p-4 mt-6 rounded-b-2xl mb-4">
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
  );
};

export default Navbars;
