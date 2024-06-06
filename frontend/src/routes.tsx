
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Bloco from "./components/Bloco/Bloco";
import Hero from "./components/Hero/Hero";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import PopUp from "./components/PopUp/PopUp";
import Register from "./components/Register/Register";
import PolicyAndTerms from "./components/PolicyAndTerms/PolicyAndTerms";
import Terms from "./components/PolicyAndTerms/Terms";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";

export default function AppRouter() {

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
    <Router>
      <Navbar HandlePopup={HandlePopup} HandleRegister={HandleRegister} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bloco" element={<Bloco />} />
      </Routes>
      <Banner/>
      <About HandlePopup={HandlePopup} />
      <Footer HandlePolicy={HandlePolicy} HandleTerms={HandleTerms} />
      
      <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <Register showPopup={showRegister} setShowPopup={setShowRegister} />
      <PolicyAndTerms showPopup={showPolicy} setShowPopup={setShowPolicy} />
      <Terms showPopup={showTerms} setShowPopup={setShowTerms} />
    </Router>
  );
}
