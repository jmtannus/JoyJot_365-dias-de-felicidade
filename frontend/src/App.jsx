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
  const [showPopup, setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  const [showRegister, setShowRegister] = React.useState(false);
  const HandleRegister = () => {
    setShowRegister(true);
  };

  const [showPolicy, setShowPolicy] = React.useState(false);
  const HandlePolicy = () => {
    console.log("politica de privacidade");
    setShowPolicy(true);
  };

  const [showTerms, setShowTerms] = React.useState(false);
  const HandleTerms = () => {
    console.log("politica de privacidade");
    setShowTerms(true);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "easy-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup} HandleRegister={HandleRegister} />
      <Bloco />
      <Hero />
      <Banner />
      <Benefits />
      <About HandlePopup={HandlePopup} />
      <Banner />
      <Footer HandlePopup={HandlePolicy} />
      <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <Register showPopup={showRegister} setShowPopup={setShowRegister} />
      <PolicyAndTerms showPopup={showPolicy} setShowPopup={setShowPolicy} />
      <Terms showPopup={showTerms} setShowPopup={setShowTerms} />
    </div>
  );
};

export default App;
