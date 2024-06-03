import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import PopUp from "./components/PopUp/PopUp.jsx";
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
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
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <Benefits />
      <About HandlePopup={HandlePopup} />
      <Banner />
      <Footer />
      <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
