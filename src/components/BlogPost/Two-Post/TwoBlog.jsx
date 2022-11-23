import React from "react";
import PostData from "./post.json";
import author from "./Post_images/mohaimins.jpg";
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
        </section>
      ))}
    </div>
  );
};

export default TwoBlog;
