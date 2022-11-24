import React from "react";
import PostData from "./post.json";
import author from "./Post_images/mohaimins.jpg";
import firstImage from "./Post_images/first.png";
import elevenImage from "./Post_images/eleven.png";
import secondImage from "./Post_images/second.png";
import thirdImage from "./Post_images/third.png";
import fourthImage from "./Post_images/four.png";
import fiveImage from "./Post_images/five.png";
import sixImage from "./Post_images/six.png";
import sevenImage from "./Post_images/seven.png";
import eightImage from "./Post_images/eight.png";
import nineImage from "./Post_images/nine.png";
import tenImage from "./Post_images/ten.png";

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

              <h2 className="inline-block mt-6 text-teal-400 text-lg sm:text-2xl border-b-2 border-teal-200 font-semibold">
                Explicit Coercion
              </h2>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-2">
                আমরা যখন ডাইরেক্ট বলে দেই যে এটা String হবে অথবা এটা Number হবে
                তখন মূলত এটা Explicit Coercion যেমন -{" "}
                <button className="bg-gray-700 py-1 px-4 rounded text-gray-200">
                  Number(value)
                </button>
              </p>
              <h2 className="inline-block mt-6 text-teal-400 text-lg sm:text-2xl border-b-2 border-teal-200 font-semibold">
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
              {/* end  */}
            </div>
            <h3 className="mt-6 text-teal-500 text-lg sm:text-xl font-semibold border-t border-gray-500 pt-10">
              জাভা স্ক্রিপ্টে শুধুমাত্র তিনটি উপায়ে type coercion করা যায়
            </h3>
            <div className="max-w-3xl">
              <ol className="list-disc pl-10 pt-4 text-teal-500">
                <li>to String()</li>
                <li>to Boolean()</li>
                <li>to Number()</li>
              </ol>
              <p className="text-teal-50 font-normal text-xs sm:text-lg">
                Type coercion logics-{" "}
                <span className="text-pink-300">Primitive Data</span> এবং
                <span className="text-pink-300">Objects Data</span> এর ক্ষেত্রে
                আলাদাভাবে কাজ করে। কিন্তু সকল প্রকার ডাটা শুধুমাত্র এই তিনটি
                ভাবেই type coercion করতে পারে।
              </p>
              {/* end  */}
            </div>

            <h2 className="sm:mt-24 mt-6 text-pink-400 border-b pb-2 text-xl sm:text-4xl font-semibold text-center">
              Type Conversion On Primitive Data
            </h2>
            <h3 className="my-6 border-b inline-block text-teal-500 text-lg sm:text-2xl font-semibold">
              String conversion :
            </h3>
            <div className="max-w-3xl">
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                {" "}
                Explicit ভাবে value স্ট্রিং এ কনভার্ট করার জন্য String()
                মেথড/function টি ব্যবহার করতে হবে | Implicite ভাবে করার জন্য
                বাইনারি (+) অপারেটর ব্যবহার করতে হবে | নিচের ছবিটি উদাহরণ হিসেবে
                দেখতে পারেন |
              </p>
              <img className="my-4" src={secondImage} alt="second" />
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                স্বাভাবিকভাবে সকল প্রিমিটিভ ভ্যালু স্ট্রিং এ কনভার্ট হয়ে যায় |
                নিচের ছবিটি উদাহরণ হিসেবে দেখতে পারেন |
              </p>
              <img src={thirdImage} alt="thirdImage" />
              <h3 className="my-6 border-b inline-block text-teal-500 text-lg sm:text-2xl font-semibold">
                Symbol conversion :
              </h3>
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                Symbol conversion টা একটু কঠিন কারন এটা শুধুমাত্র explicit ভাবে
                convert করা যায়। Implicit ভাবে করা যায় না | নিচের ছবিটি উদাহরণ
                হিসেবে দেখতে পারেন |
              </p>
              <img className="my-4" src={fourthImage} alt="four" />
              <h3 className="my-6 border-b inline-block text-teal-500 text-lg sm:text-2xl font-semibold">
                Boolean conversion :
              </h3>
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                {" "}
                boolean conversion শুধুমাত্র দুইটা সমাধান দিতে পারে True or
                False
              </p>
              <img className="my-4" src={sevenImage} alt="seven" />
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                Explicit ভাবে value Boolean এ কনভার্ট করার জন্য Boolean()
                মেথড/function টি ব্যবহার করতে হবে | Implicit ভাবে করার জন্য
                logical operators ব্যবহার করতে হবে ( || && !) . নিচের ছবিটি
                উদাহরণ হিসেবে দেখতে পারেন
              </p>
              <img src={fiveImage} alt="five" />
              <p className="text-pink-300 font-normal text-xs sm:text-base">
                <span className="font-bold text-2xl text-gray-300">Note :</span>{" "}
                Logical operators such as || and && do boolean conversions
                internally, but actually return the value of original operands,
                even if they are not boolean. নিচের ছবিটি উদাহরণ হিসেবে দেখতে
                পারেন
              </p>
              <img className="my-4" src={sixImage} alt="six" />
              <h3 className="my-6 border-b inline-block text-teal-500 text-lg sm:text-2xl font-semibold">
                Numeric conversion :
              </h3>
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                Explicit ভাবে Number এ কনভার্ট করার জন্য Number() মেথড/function
                টি ব্যবহার করতে হবে | Number এর ক্ষেত্রে Implicit কনভার্শনটি
                একটু ট্রিকি, কারণ এটি অসংখ্য ভাবে ট্রিগারড হতে পারে -
              </p>
              <ul className="list-disc pl-10 mt-4 space-y-3 text-gray-300 font-normal text-xs sm:text-lg">
                <li>
                  comparison operators &#x2768; &#x276F; , &#x276E; ,
                  &#x2770;&#x268C; ,&#x268C;&#x2771; &#x2769;
                </li>
                <li>bitwise operators ( | & ^ ~)</li>
                <li>
                  arithmetic operators (- + * / % ). Note, that binary + does
                  not trigger numeric conversion, when any operand is a string.
                </li>
                <li>unary + operator</li>
                <li>
                  loose equality operator == (incl. !=) Note that == does not
                  trigger numeric conversion when both operands are strings
                </li>
              </ul>
              <img className="my-4" src={eightImage} alt="eight" />
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                {" "}
                প্রিমিটিভ ভ্যালু গুলো যেভাবে নাম্বার এ কনভার্ট হয়ে থাকে -
              </p>
              <img className="my-4" src={nineImage} alt="nine" />
              <p className="text-gray-300 font-normal text-xs sm:text-lg">
                যখন একটা স্ট্রিং কে নাম্বার এ কনভার্ট করা হয়, তখন জাভাস্ক্রিপ্ট
                ইঞ্জিন প্রথমে লিডিং এবং ট্রেইলিং স্পেস গুলোকে, \n, \t
                ক্যারেক্টার গুলোকে ট্রিম করে ফেলে। যদি ট্রিমড স্ট্রিংটি ভ্যালিড
                কোন নাম্বার কে রিপ্রেসেন্ট না করে সেক্ষেত্রে এটি NaN রিটার্ন
                করবে, আর স্ট্রিংটি যদি এম্পটি হয় সেক্ষেত্রে 0 রিটার্ন করবে।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                null এবং undefined একটু ভিন্ন ভাবে কাজ করবে। null হয়ে যাবে 0 এবং
                undefined হয়ে যাবে NaN।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                Symbol কোন ভাবেই নাম্বার এ কনভার্ট হতে পারবে না। এটা আমাদেরকে
                একটা TypeError থ্রো করবে।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-8">
                আরও দুইটা স্পেসিয়াল রুলস আমাদের কে মনে রাখতে হবে -
              </p>
              <p className="text-pink-300 font-normal text-xs sm:text-lg mt-6">
                ১। যখন null অথবা undefined এর সাথে == অপারেটর ব্যবহার করা হবে
                তখন কোন রকম নিউমেরিক কনভার্শন ঘটবে না। null শুধুমাত্র null অথবা
                undefined এর সাথেই কম্পেয়ার করা যায়, অন্য কোন কিছুর সাথেই এর
                কম্পারিসন সম্ভব নয়।
              </p>
              <img className="my-4" src={tenImage} alt="ten" />
              <p className="text-pink-300 font-normal text-xs sm:text-lg">
                ২। NaN কখনই কারোর সমান হতে পারে না, এমনকি নিজের ও না।
              </p>
            </div>
            <h2 className="sm:mt-24 mt-6 text-pink-400 border-b pb-2 text-xl sm:text-4xl font-semibold text-center">
              Type Coercion for Objects
            </h2>
            <div className="max-w-3xl">
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-10">
                এতক্ষণ পর্যন্ত আমরা প্রিমিটিভ ভ্যালুর কনভার্শন দেখলাম যা খুব
                একটা মজাদার ছিল না। এবার আমরা জাভাস্ক্রিপ্টের weird behaviour
                গুলোর সাথে পরিচিত হতে যাচ্ছি।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                যখন জাভাস্ক্রিপ্ট ইঞ্জিন [1] + [2, 3] এই রকম কোন এক্সপ্রেশন এর
                সম্মুখীন হয় তখন এটি প্রথমেই অবজেক্টটিকে প্রিমিটিভ ভ্যালুতে
                রূপান্তর করে ফেলে। তারপর এই রূপান্তরিত ভ্যালুটি{" "}
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                আবার কনভার্ট হয়ে ফাইনাল রেসাল্ট দিয়ে থাকে। যেকোনো অবজেক্ট
                কনভার্ট হয়ে number, string বা boolean ই হতে পারে।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-6">
                সব থেকে সহজ হচ্ছে বুলিয়ান এ কনভার্ট করা। যে কোন ভ্যালু যা কিনা
                প্রিমিটিভ না সব সময়ের জন্যই সেটা true রিটার্ন করবে। এমনি
                অবজেক্টটি যদি ফাকা থাকে, অথবা অ্যারেতে কোন এলিমেন্ট নাও থাকে,
                তবুও এটি true রিটার্ন করবে।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                অবজেক্ট গুলো [[ToPrimitive]] ইন্টার্নাল মেথডের মাধ্যমে প্রিমিটিভ
                ভ্যালুতে কনভার্ট হয় এবং এই মেথডটি ব্যবহার করেই স্ট্রিং এবং
                নিউমেরিক কনভার্শন ঘটে থাকে।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                [[ToPrimitive]] নিচের মত করে কাজ করে থাকে -
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                একটা ইনপুট এবং যেই টাইপে কনভার্ট করতে চাচ্ছি সেই টাইপ সহ
                [[ToPrimitive]] ফাংশনটি পাস করা হবে। Preffered type is Optional
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                নিউমেরিক এবং স্ট্রিং দুইটা কনভার্শনই ঘটে থাকে দুইটা মেথডের
                সাহায্যেঃ valueOf এবং toString। দুইটা মেথডই আগে থেকে ডিক্লেয়ার
                করা আছে Object.prototype এর সাথে এবং সমস্ত অবজেক্ট থেকে এটা
                ব্যবহার করা যায়।
              </p>
              <p className="text-pink-300 font-normal text-xs sm:text-lg mt-4">
                সাধারণ ভাবে অ্যালগোরিদমটি নিচের মত কাজ করে থাকে -
              </p>
              <ul className="list-disc ml-10 space-y-2 mt-4">
                <li>
                  যদি ইনপুটটি আগে থেকেই প্রিমিটিভ হয়ে থাকে, কিছুই করতে হবে না,
                  শুধুমাত্র এটাকেই রিটার্ন করবে
                </li>
                <li>
                  call input.toString(), যদি রেসাল্ট প্রিমিটিভ হয়, রিটার্ন করবে
                </li>
                <li>
                  call input.valueOf(), যদি রেসাল্ট প্রিমিটিভ হয়, রিটার্ন করবে
                </li>
                <li>
                  যদি input.toString() অথবা input.valueOf() কোনটাই প্রিমিটিভ
                  রিটার্ন করতে না পারে তাহলে error থ্রো করবে
                </li>
              </ul>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                নিউমেরিক কনভার্শনের ক্ষেত্রে এটি প্রথমে valueOf() ফাংশনকে কল
                করবে এবং ফলব্যাক হিসেবে toString() ফাংশনকে কল করবে। স্ট্রিং
                কনভার্শনের ক্ষেত্রে ঠিক উল্টা ব্যাপারটা ঘটবে, প্রথমে toString()
                কল হবে, আর ফলব্যাক হিসেবে valueOf() কল হবে।
              </p>
              <p className="text-gray-300 font-normal text-xs sm:text-lg mt-4">
                বেশিরভাগ বিউল্টইন টাইপের valueOf ফাংশনটি নেই, আর থাকলেও এটা নিজ
                অবজেক্টকেই রিটার্ন করে থাকে। এবং যেহেতু এটা প্রিমিটিভ না তাই
                কম্পাইলার এটাকে ইগ্নোর করে থাকে। সেই হিসেবে নিউমেরিক কনভার্শন
                এবং স্ট্রিং কনভার্শন মূলত একই ভাবে কাজ করে থাকে।
              </p>
            </div>
          </section>
        </section>
      ))}
    </div>
  );
};

export default TwoBlog;
