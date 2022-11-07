import React from "react";
import Lottie from "lottie-react";
import error from "../lottie-json/error.json";

const Error = () => {
  return (
    <section className="bg-pink-100 bg-star">
      <div className="min-h-20  text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-500">
          Your Page Not Found <br /> kindly check your URL
        </h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <Lottie animationData={error} />
      </div>
    </section>
  );
};

export default Error;
