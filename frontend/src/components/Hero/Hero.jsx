import React from "react";
import HeroImg from "./../../assets/hero.png";
import HeroBg from "./../../assets/heroBg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[800px]">
            {/* text-content section */}
            <div className="space-y-7 text-slate-950 order-2 sm:order-1">
              <h1 className="text-5xl">
                {" "}
                <span className="text-secondary font-cursive text-7xl">
                  Jot
                </span>{" "}
                down the{" "}
                <span className="text-secondary font-cursive text-7xl">
                  Joy
                </span>{" "}
                moments
              </h1>
              <p className="lg:pr-64 text-slate-950 text-lg">
                Registre os momentos que te fizeram sorrir hoje e sorria
                quando relembrá-los.
              </p>

              {/* button section */}
              <div>
                <PrimaryButton />
              </div>
            </div>
            {/* image section */}
            <div className="relative z-30 order-1 sm:order-2">
              <img
                src={HeroImg}
                alt=""
                className="w-full sm:scale-125 sm:translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
