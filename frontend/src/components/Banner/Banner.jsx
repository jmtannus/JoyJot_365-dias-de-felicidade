import React from "react";
import Balloons from "../../assets/png/balloons.png";
import Happy from "../../assets/png/happy.png";
import Laugh_w from "../../assets/png/laugh_w.png";
import Laugh_m from "../../assets/png/laugh_m.png";
import Smiley from "../../assets/png/smiley.png";
import PrimaryButton from "./../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div>
          <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
            Reprograme sua vida! Porque essa técnica funciona?
          </h1>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"></div>
            <p>{""}Nós sabemos disso <span className="text-primary">porque</span></p> passamos por momentos onde não enxergamos 
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
