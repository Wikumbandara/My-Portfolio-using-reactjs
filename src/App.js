import React from "react";
import Navbar from "./common/Navbar";
import HomePage from "./screens/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./screens/AboutMe";
import Education from "./screens/Education";
import Works from "./screens/Works";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
