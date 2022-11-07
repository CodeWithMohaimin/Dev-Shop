import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbars from "./components/Navbars";
import Cards from "./components/Cards";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/navbars" element={<Navbars />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/card" element={<Cards />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
