import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import PopUp from "./components/PopUp/PopUp.jsx";

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };
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