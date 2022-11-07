import React from "react";

import Lottie from "lottie-react";
import Learning from "../lottie-json/learning.json";

const Hero = () => {
  return (
    <div className="bg-hero-background bg-cover bg-[center_top_-5rem] bg-no-repeat ">
      <section className="min-h-60">
        <div className="mt-4 mx-auto max-w-7xl p-1 lg:p-2 flex lg:justify-between flex-col-reverse lg:flex-row g items-center">
          <div className="text-center lg:text-left max-w-lg w-full">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-600">
              <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-500">
                Dev. Shop
              </span>
              <br /> for developer's to solve their Problems
            </h1>

            <p className="font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-gray-500">
              Here you find many kinds of Navbar, Cards and Images for Developer
              uses. Here you get all source code for develop Navbar, Cards and
              much more. Don't just copy and past those codes, But also try to
              Understand those codes.
            </p>

            <button className="transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-8 py-2 mt-8 font-bold text-1xl rounded-full text-pink-50 tracking-wide bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:transition-all hover:to-yellow-500">
              Join Slack
            </button>
          </div>
          <div className="w-full">
            <Lottie className="" animationData={Learning} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
