import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import PopUp from "./components/PopUp/PopUp.jsx";
import Register from "./components/Register/Register.jsx";
import PolicyAndTerms from "./components/PolicyAndTerms/PolicyAndTerms.jsx";
import Bloco from "./components/Bloco/Bloco.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import Terms from "./components/PolicyAndTerms/Terms.jsx";

const App = () => {
  

 

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Banner />
      <Benefits />     
      <Banner />      
    </div>
  );
};

export default App;
