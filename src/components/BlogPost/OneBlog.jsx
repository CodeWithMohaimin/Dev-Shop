import React from "react";
import PostData from "./post.json";
import author from "./Post_images/mohaimin.jpg";
import bannerImage from "./Post_images/bannerImage.png";
import variableImage from "./Post_images/variable.png";
import {
  BsPlayCircle,
  BsDot,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsLink,
  BsThreeDots,
  BsBookmarkPlusFill,
} from "react-icons/bs";

const OneBlog = () => {
  return (
    <div>
      {PostData.map((post) => (
        <section key={post.id} className="bg-gray-800 text-white min-h-60 ">
          <div className="max-w-5xl bg-gray-900 w-full mx-auto flex justify-between items-center px-5 py-20">
            {/* one  */}
            <section className="flex gap-2">
              <div>
                <img
                  className="sm:w-[48px] sm:h-[48px] w-[38px] h-[38px] rounded-full duration-200"
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
                <BsTwitter className="hover:scale-125 hover:text-blue-400 cursor-pointer duration-100" />
                <BsFacebook className="hover:scale-125 hover:text-green-500 cursor-pointer duration-100" />
                <BsLinkedin className="hover:scale-125 hover:text-red-400 cursor-pointer duration-100" />
                <BsLink className="hover:scale-125 hover:text-pink-200 cursor-pointer duration-100" />
              </div>

              <div className="flex text-xl gap-2">
                <BsBookmarkPlusFill className="hover:scale-125 hover:text-teal-400 cursor-pointer duration-100" />
                <BsThreeDots className="hover:scale-125 hover:text-gray-400 cursor-pointer duration-100" />
              </div>
            </section>
          </div>
          {/* // actual post section  */}
          <section className="max-w-5xl bg-gray-900 w-full mx-auto px-5 pb-10">
            <h1 className="text-2xl sm:text-4xl font-semibold text-gray-300">
              {post.title}
            </h1>
            <div className="my-10">
              <img src={bannerImage} alt="banner" className="rounded-xl" />
            </div>
            <div>
              <p className="text-gray-300 text-xs sm:text-lg">
                Variable মূলত একটি স্টোরেজ সিস্টেম এখানে বিভিন্ন ধরনের ডাটা
                স্টোর করা হয়। <br />
                <br />{" "}
                <span className="font-semibold text-gray-200">
                  {" "}
                  জাভাস্ক্রিপ্টে দুই ধরনের ভেরিয়েবল আছে।
                </span>{" "}
                <br /> 1. local variable <br /> 2.Global variable <br />
                <br /> এই দুই ধরনের ভেরিয়েবলের পরিচিতি পরে জানলেও হবে। তার আগে
                জেনে নিই ভেরিয়েবল কিভাবে লিখতে হয় বা ডিক্লেয়ার করতে হয়।
                ভেরিয়েবল ডিক্লেয়ার করা বা লেখার কয়েকটা নিয়ম আছে যেমন <br />
                <br />
                <br /> 1. variable ডিক্লেয়ার করার জন্য var / let / const এই
                তিনটা যেকোনো একটা ব্যবহার করা। <br />
                2. var / let / const কিওয়ার্ড এর পাশে ভেরিয়েবলের একটি নাম সেট
                করা <br />
                3. ‌ভেরিয়েবল এর নাম শুরু হতে হবে ইংলিশ লেটার দিয়ে <br />
                4. সংখ্যা দিয়ে বা কোন আইকন ব্যবহার করা যাবে না। কিন্তু নামের
                শেষে বা মাঝে সংখ্যা ব্যবহার করা যাবে। <br />
                5. ছোট হাতের অক্ষর দিয়ে শুরু করতে হবে। <br />
                6. ভেরিয়েবল এর নাম যদি দুইটা word হয় তাহলে ক্যামেল কেস এ হবে ।
                <br />
                7. ‌ভেরিয়েবল নাম লেখার পরে = সাইন দিয়ে তার পাশে ভেরিয়েবলের
                ভ্যালু দিতে হবে। <br />
                8. ‌স্ট্রিং বা অথবা একটি সেন্টেন্স হলে ডবল কোটেশন বা সিঙ্গেল
                কোটেশন ব্যবহার করতে হব। সংখ্যা হলে কোটেশন ব্যবহার করা লাগবে না
                <br />
                9. ভেরিয়েবল এর ভ্যালুর শেষে সেমিকোলন ব্যবহার করা ভালো এভাবেই
                আমরা মূলত ভেরিয়েবল ডিক্লেয়ার করতে পারি। <br />
                <br /> local variable and global variable সম্পর্কে জানতে{" "}
                <span className="text-teal-400 cursor-pointer">
                  lear more
                </span>{" "}
                এ click করুন
              </p>
              <img className="mt-10" src={variableImage} alt="variable" />
            </div>
          </section>
        </section>
      ))}
    </div>
  );
};

export default OneBlog;
