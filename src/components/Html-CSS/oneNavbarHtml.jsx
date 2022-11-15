import React from "react";

const oneNavbarHtml = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="bg-gray-600 text-white max-w-3xl w-full my-10">
        <h1 className="py-4 mb-8 text-4xl font-semibold text-white bg-red-300 pl-6">
          {`</>`} Html
        </h1>
        <div className="p-6 text-lg">
          <p>{`    <header class="header">`}</p>
          <p>{`    <section class="logo_root">`}</p>
          <p>{`      <img src="./images/logo.svg" alt="Logo" />`}</p>
          <p>{`    </section>`}</p>
          <p>{`    <section id="btnHamburger" class="hamburger_btn">`}</p>
          <p>{`      <span class="one_line"></span>`}</p>
          <p>{`      <span class="two_line"></span>`}</p>
          <p>{`      <span class="three_line"></span>`}</p>
          <p>{`    </section>`}</p>
          <p>{`    <section id="nav_links" class="nav_links_root">`}</p>
          <p>{`      <ul>`}</p>
          <p>{`        <li>Home</li>`}</p>
          <p>{`        <li>About</li>`}</p>
          <p>{`        <li>Contact</li>`}</p>
          <p>{`        <li>Blog</li>`}</p>
          <p>{`        <li>Careers</li>`}</p>
          <p>{`      </ul>`}</p>
          <p>{`    </section>`}</p>
          <p>{`    <section class="cta_btn_root">`}</p>
          <p>{`      <button class="cta_btn">Request Invite</button>`}</p>
          <p>{`    </section>`}</p>
          <p>{`  </header>`}</p>
          <p>{`  <section id="overly" class=""></section>`}</p>
        </div>
      </div>
    </section>
  );
};

export default oneNavbarHtml;
