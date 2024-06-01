import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import PopUp from "./components/PopUp/PopUp";

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <Benefits />
      <About />
      <Banner />
      <Footer />
      <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
