import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Benefits from "./components/Benefits/Benefits";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <Benefits />
      <About />
    </div>
  );
};

export default App;
