import React from "react";
import PostData from "./post.json";
import author from "./Post_images/mohaimins.jpg";
import firstImage from "./Post_images/first.png";
import elevenImage from "./Post_images/eleven.png";
import {
  BsPlayCircle,
  BsDot,
  BsTwitter,
  BsLinkedin,
  BsLink,
  BsThreeDots,
  BsBookmarkPlusFill,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";

const TwoBlog = () => {
  return (
    <div>
      {PostData.map((post) => (
        <section key={post.id} className="bg-gray-800 text-white min-h-60 ">
          <div className="max-w-5xl bg-gray-900 w-full mx-auto flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center px-5 py-20 duration-500">
            {/* one  */}
            <section className="flex gap-2 flex-col sm:flex-row text-center sm:text-left items-center sm:items-start">
              <div>
                <img
                  className="sm:w-[48px] sm:h-[48px] w-[38px] h-[38px] object-cover overflow-hidden rounded-full duration-200"
                  src={author}
                  alt={post.authorName}
                />
              </div>
              <div>
                <h1 className="text-base sm:text-lg">{post.authorName}</h1>{" "}
                <h2 className="text-gray-400 text-xs sm:text-base">
                  {post.Date} <BsDot className="inline text-lg text-gray-200" />{" "}
                  <span className="text-xs">
                    {post.lengthyTime}{" "}
                    <BsDot className="inline text-lg text-gray-200" />
                  </span>
                  <span>
                    <BsPlayCircle className="inline cursor-pointer text-teal-400 text-base sm:text-lg ml-4" />
                  </span>
                  <span className="text-xs ml-1">Listen</span>
                </h2>
              </div>
            </section>
            {/* two  */}
            <section className="flex gap-12">
              <div className="flex text-xl gap-5 ">
                <a
                  href="https://twitter.com/DevMohaimin"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsTwitter className="hover:scale-125 hover:text-blue-400 cursor-pointer duration-100" />
                </a>
                <a
                  href="https://github.com/ProgrammerMohaimin"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsGithub className="hover:scale-125 hover:text-blue-400 cursor-pointer duration-100" />
                </a>
                <a
                  href="https://www.linkedin.com/in/programmermohaimin/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsLinkedin className="hover:scale-125 hover:text-red-400 cursor-pointer duration-100" />
                </a>
              </div>

              <div className="flex text-xl gap-2">
                <BsBookmarkPlusFill className="hover:scale-125 hover:text-teal-400 cursor-pointer duration-100" />
                <BsThreeDots className="hover:scale-125 hover:text-gray-400 cursor-pointer duration-100" />
              </div>
            </section>
          </div>
          {/* // actual post section  */}
          <section className="max-w-5xl bg-gray-900 w-full mx-auto px-5 pb-10">
            <h1 className="text-xl sm:text-4xl font-semibold text-gray-300">
              {post.title}
            </h1>
            <a
              href={post.youtubeLinks}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-pink-300 cursor-pointer inline-block"
            >
              <BsYoutube className="text-pink-400 text-2xl sm:text-4xl inline" />{" "}
              Watch Video on YouTube{" "}
              <span>
                <BsLink className="inline" />
              </span>
            </a>
          </section>

          {/* actual post section */}
          <section className="max-w-5xl bg-gray-900 w-full mx-auto px-5 pb-10">
            <div className="max-w-3xl">
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                আজকে আমরা আলোচনা করব type coercion নিয়ে | Coercion শব্দের অর্থ
                জবরদস্তি | সহজ কথা বলতে গেলে Javascript type conversion নিয়ে
                কথা বলব। জাভা স্ক্রিপ্টে সব কিছু যেমন weird নামগুলো যেমন কঠিন।
                এটার বেলায়ও ঠিক তেমনি হয়েছে । যাই হোক এখন তাহলে type coercion
                নিয়ে চুল ছেড়া বিশ্লেষণ করা যাক |
              </p>
              <h3 className="mt-6 text-teal-500 text-lg sm:text-xl font-semibold">
                জাভা স্ক্রিপ্টে অনেকগুলো টাইপ রয়েছে তার মধ্যেঃ
              </h3>
              <ol className="list-disc pl-10 pt-4 text-teal-500">
                <li>Boolean</li>
                <li>Number</li>
                <li>String</li>
                <li>Object</li>
                <li>Null</li>
                <li>Undefined</li>
                <li>Symbol</li>
              </ol>
              <img className="my-4" src={firstImage} alt="firstImage" />
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                এই টাইপ গুলোর একটা টাইপ থেকে অন্য টাইপে কনভার্ট করার নামই হলো
                Type Coercion. আমরা প্রতিনিয়ত এই কাজ করে থাকি জেনে হোক আর না
                জেনে। যেমন আমরা ইনপুট দেওয়ার সময় টাইপ বলে দিই যে এটা text ,
                number, password etc.
              </p>
              <h3 className="mt-6 text-teal-500 text-lg sm:text-xl font-semibold">
                JavaScript type coercion মূলত দুই প্রকার |
              </h3>
              <ol className="list-disc pl-10 pt-4 text-teal-500">
                <li>Explicit - স্পষ্ট</li>
                <li>Implicit - অন্তর্নিহিত বা ঊহ্য</li>
              </ol>

              <h2 className="inline-block mt-6 text-pink-400 text-lg sm:text-2xl border-b-2 border-pink-200 font-semibold">
                Explicit Coercion
              </h2>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-2">
                আমরা যখন ডাইরেক্ট বলে দেই যে এটা String হবে অথবা এটা Number হবে
                তখন মূলত এটা Explicit Coercion যেমন -{" "}
                <button className="bg-gray-700 py-1 px-4 rounded text-gray-200">
                  Number(value)
                </button>
              </p>
              <h2 className="inline-block mt-6 text-pink-400 text-lg sm:text-2xl border-b-2 border-pink-200 font-semibold">
                Implicit Coercion
              </h2>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-2">
                আমরা যখন console.log() করছি কোন String কে সাথে Number pass করে
                দিচ্ছি তখন অটোমেটিক্যালি সেটা একটি String এ পরিণত হচ্ছে। কারণ
                Javascript একটি ডায়নামিক ল্যাঙ্গুয়েজ এবং খুবই ইন্টেলিজেন্ট তাই
                নিজে থেকেই টাইপ টা কনভার্ট করতে পারে । এটাই মূলত implicit
                coercion
              </p>
              <img src={elevenImage} alt="eleven" />

              <h3 className="mt-6 text-teal-500 text-lg sm:text-xl font-semibold border-t pt-10">
                জাভা স্ক্রিপ্টে শুধুমাত্র তিনটি উপায়ে type coercion করা যায়
              </h3>
              <ol className="list-disc pl-10 pt-4 text-teal-500">
                <li>to Boolean()</li>
                <li>to Number()</li>
                <li>to String()</li>
              </ol>
              <p className="text-teal-100 font-normal text-xs sm:text-lg">
                Type coercion logics- Primitive Data এবং Objects Data এর
                ক্ষেত্রে আলাদাভাবে কাজ করে। কিন্তু সকল প্রকার ডাটা শুধুমাত্র এই
                তিনটি ভাবেই type coercion করতে পারে।
              </p>
              {/* end  */}
            </div>
          </section>
        </section>
      ))}
    </div>
  );
};

export default TwoBlog;
