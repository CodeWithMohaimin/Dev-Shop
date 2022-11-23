import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbars from "./components/Navbars";
import Cards from "./components/Cards";
import Error from "./components/Error";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import OneNavbarHtml from "./components/Html-CSS/oneNavbarHtml";
import Contact from "./components/Contact";
//Blog Posts
import OneBlog from "./components/BlogPost/one-post/OneBlog";
import TwoBlog from "./components/BlogPost/Two-Post/TwoBlog";
import ThreeBlog from "./components/BlogPost/Three-Post/ThreeBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/navbars" element={<Navbars />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Error />} />
        <Route path="/oneNavbarHtml" element={<OneNavbarHtml />} />
        <Route path="/blogs/variable-defined" element={<OneBlog />} />
        <Route path="/blogs/type-coercion" element={<TwoBlog />} />
        <Route path="/blogs/three-blog" element={<ThreeBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
