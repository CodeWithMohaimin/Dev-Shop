import React from "react";

const oneNavbarHtml = () => {
  return (
    <section className="flex justify-center items-center flex-col pt-10 px-4 bg-gray-500">
      <h1 className="text-center text-white text-lg min-h-20">
        Don't worry! VS Code Prettier_ will arrange your code!
      </h1>

      <section className="bg-gray-600 text-white max-w-3xl w-full my-10">
        <h1 className="py-4 mb-8 text-4xl font-semibold text-white bg-red-300 pl-6">
          {`</>`} Html
        </h1>
        <div className="p-6 text-xs sm:text-lg">
          <p>{`    <header class="header">`}</p>
          <p>{`    <section class="logo_root">`}</p>
          <p className="pl-6">{`      <img src="./images/logo.svg" alt="Logo" />`}</p>
          <p>{`    </section>`}</p>
          <p>{`    <section id="btnHamburger" class="hamburger_btn">`}</p>
          <p className="pl-6">{`      <span class="one_line"></span>`}</p>
          <p className="pl-6">{`      <span class="two_line"></span>`}</p>
          <p className="pl-6">{`      <span class="three_line"></span>`}</p>
          <p>{`    </section>`}</p>
          <p>{`    <section id="nav_links" class="nav_links_root">`}</p>
          <p className="pl-6">{`      <ul>`}</p>
          <p className="pl-10">{`        <li>Home</li>`}</p>
          <p className="pl-10">{`        <li>About</li>`}</p>
          <p className="pl-10">{`        <li>Contact</li>`}</p>
          <p className="pl-10">{`        <li>Blog</li>`}</p>
          <p className="pl-10">{`        <li>Careers</li>`}</p>
          <p className="pl-6">{`      </ul>`}</p>
          <p>{`    </section>`}</p>
          <p>{`    <section class="cta_btn_root">`}</p>
          <p className="pl-6">{`      <button class="cta_btn">Request Invite</button>`}</p>
          <p>{`    </section>`}</p>
          <p>{`  </header>`}</p>
          <p>{`  <section id="overly" class=""></section>`}</p>
        </div>
      </section>

      <section className="bg-gray-600 text-white max-w-3xl w-full my-10">
        <h1 className="py-4 mb-8 text-4xl font-semibold text-white bg-cyan-400 pl-6">
          {`</>`} CSS
        </h1>
        <div className="p-6 text-xs sm:text-lg">
          <p className="text-teal-400">{`          * {`}</p>
          <h6>{`            margin: 0;`}</h6>
          <h6>{`            padding: 0;`}</h6>
          <h6>{`            box-sizing: border-box;`}</h6>
          <h6>{`            scroll-behavior: smooth;`}</h6>
          <h6>{`            list-style: none;`}</h6>
          <h6>{`            font-family: "Public Sans", sans-serif;`}</h6>
          <p className="text-teal-400">{`          }`}</p>
          <p className="text-teal-400">{`          .header {`}</p>
          <h6>{`            display: flex;`}</h6>
          <h6>{`            justify-content: space-between;`}</h6>
          <h6>{`            align-items: center;`}</h6>
          <h6>{`            max-width: 1150px;`}</h6>
          <h6>{`            margin: auto;`}</h6>
          <h6>{`            background-color: ghostwhite;`}</h6>
          <h6>{`            transition: 0.3s;`}</h6>
          <h6>{`            position: relative;`}</h6>
          <h6>{`            padding: 2rem 0;`}</h6>
          <p className="text-teal-400">{`          }`}</p>
          <p className="text-teal-400">{`          .nav_links_root ul {`}</p>
          <h6>{`            display: flex;`}</h6>
          <p className="text-teal-400">{`          }`}</p>
          <p className="text-teal-400">{`          .nav_links_root ul li {`}</p>
          <h6>{`            padding: 0.6rem 1.2rem;`}</h6>
          <h6>{`            cursor: pointer;`}</h6>
          <p className="text-teal-400">{`          }`}</p>
          <p className="text-teal-400">{`          .cta_btn {`}</p>
          <h6>{`            padding: 0.875rem 2.125rem;`}</h6>
          <h6>{`            border-radius: 45px;`}</h6>
          <h6>{`            border: none;`}</h6>
          <h6>{`            background: linear-gradient(280deg, hsl(192, 70%, 51%), hsl(136, 65%, 51%));`}</h6>
          <h6>{`            cursor: pointer;`}</h6>
          <p className="text-teal-400">{`          }`}</p>
          <p className="text-teal-400">{`          .hamburger_btn {`}</p>
          <h6>{`            cursor: pointer;`}</h6>
          <h6>{`            display: none;`}</h6>
          <p className="text-teal-400">{`          }`}</p>
          <p className="text-teal-400">{`          .hamburger_btn span {`}</p>
          <h6>{`            height: 3px;`}</h6>
          <h6>{`            width: 28px;`}</h6>
          <h6>{`            background-color: #222;`}</h6>
          <h6>{`            margin: 5px;`}</h6>
          <h6>{`            display: block;`}</h6>
          <h6>{`            transition: all 0.4s;`}</h6>
          <h6>{`            transform-origin: 2.8px 1px;`}</h6>
          <p className="text-teal-400">{`          }`}</p>
          <h1 className="py-4 my-8 text-3xl text-center font-semibold text-white bg-cyan-400 pl-6">
            Media Query
          </h1>
          <p>{`@media (max-width: 1425px) {`}</p>
          <p>{`  .logo_root {`}</p>
          <h6>{`    padding-left: 1rem;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .cta_btn_root {`}</p>
          <h6>{`    padding-right: 1rem;`}</h6>
          <p>{`  }`}</p>
          <p>{`}`}</p>
          <p>{`@media (max-width: 780px) {`}</p>
          <p>{`  .cta_btn_root {`}</p>
          <h6>{`    display: none;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .hamburger_btn {`}</p>
          <h6>{`    padding-right: 1rem;`}</h6>
          <p>{`  }`}</p>
          <p>{`}`}</p>
          <p>{`@media (max-width: 640px) {`}</p>
          <p>{`  .header {`}</p>
          <h6>{`    padding: 1.3rem 0;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .nav_links_root {`}</p>
          <h6>{`    opacity: 0;`}</h6>
          <h6>{`    pointer-events: none;`}</h6>
          <h6>{`    transition: 0.5s;`}</h6>
          <h6>{`    position: absolute;`}</h6>
          <h6>{`    bottom: -30px;`}</h6>
          <h6>{`    width: 90%;`}</h6>
          <h6>{`    position: absolute;`}</h6>
          <h6>{`    left: 50%;`}</h6>
          <h6>{`    transform: translate(-50%, -50%);`}</h6>
          <h6>{`    text-align: center;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .show {`}</p>
          <h6>{`    opacity: 1;`}</h6>
          <h6>{`    pointer-events: all;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .nav_links_root ul {`}</p>
          <h6>{`    position: absolute;`}</h6>
          <h6>{`    flex-direction: column;`}</h6>
          <h6>{`    width: 100%;`}</h6>
          <h6>{`    border-radius: 0.6rem;`}</h6>
          <h6>{`    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);`}</h6>
          <h6>{`    background-color: #fff;`}</h6>
          <h6>{`    z-index: 222;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .nav_links_root ul li:hover {`}</p>
          <h6>{`    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);`}</h6>
          <p>{`  }`}</p>
          <p>{`  /* hamburger menu  */`}</p>
          <p>{`  .hamburger_btn {`}</p>
          <h6>{`    display: block !important;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .open .one_line {`}</p>
          <h6>{`    transform: rotate(45deg);`}</h6>
          <p>{`  }`}</p>
          <p>{`  .open .two_line {`}</p>
          <h6>{`    transition: 0.3s;`}</h6>
          <h6>{`    opacity: 0;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .open .three_line {`}</p>
          <h6>{`    transform: rotate(-45deg);`}</h6>
          <p>{`  }`}</p>
          <p>{`  .open.hamburger_btn span {`}</p>
          <h6>{`    background-color: rgb(255, 55, 55);`}</h6>
          <h6>{`    transition: 0.4s;`}</h6>
          <p>{`  }`}</p>
          <p>{`  .overly {`}</p>
          <h6>{`    z-index: -1;`}</h6>
          <h6>{`    position: absolute;`}</h6>
          <h6>{`    top: 90px;`}</h6>
          <h6>{`    bottom: 0;`}</h6>
          <h6>{`    left: 0;`}</h6>
          <h6>{`    right: 0;`}</h6>
          <h6>{`    background: linear-gradient(hsl(233, 26%, 24%), transparent);`}</h6>
          <p>{`  }`}</p>
          <p>{`}`}</p>
        </div>
      </section>

      {/* javascript  */}
      <section className="bg-gray-600 text-white max-w-3xl w-full my-10 min-h-20">
        <h1 className="py-4 mb-8 text-4xl font-semibold text-white bg-yellow-400 pl-6">
          {`</>`} JavaScript
        </h1>
        <div className="p-6 text-xs sm:text-lg">
          <h5>{`const btnHamburger = document.getElementById("btnHamburger");`}</h5>
          <h5>{`const navLinks = document.getElementById("nav_links");`}</h5>
          <h5>{`const overly = document.getElementById("overly");`}</h5>
          <p>{`btnHamburger.addEventListener("click", function () {`}</p>
          <p>{`  if (btnHamburger.classList.contains("open")) {`}</p>
          <h6>{`    btnHamburger.classList.remove("open");`}</h6>
          <h6>{`    overly.classList.remove("overly");`}</h6>
          <h6>{`    navLinks.classList.remove("show");`}</h6>
          <p>{`  } else {`}</p>
          <h6>{`    btnHamburger.classList.add("open");`}</h6>
          <h6>{`    overly.classList.add("overly");`}</h6>
          <h6>{`    navLinks.classList.add("show");`}</h6>
          <p>{`  }`}</p>
          <p>{`});`}</p>
        </div>
      </section>
    </section>
  );
};

export default oneNavbarHtml;
