import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbars from "./components/Navbars";
import Cards from "./components/Cards";
import Error from "./components/Error";
import Images from "./components/Images";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/navbars" element={<Navbars />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/images" element={<Images />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
