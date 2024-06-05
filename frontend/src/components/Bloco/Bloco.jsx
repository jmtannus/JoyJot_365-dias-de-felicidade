import React from "react";
import HeroImg from "./../../assets/hero.png";
import HeroBg from "./../../assets/heroBg.png";
import SecondaryButton from "../Shared/SecondaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Bloco = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-content section */}
            <div className="space-y-7 text-secondDark order-2 sm:order-1 mx-3">
              <h1 data-aos="fade-up" className="text-4xl text-center">
                {" "}
                O que te fez{" "}
                <span className="text-white font-cursive text-9xl">
                  sorrir
                </span>{" "}
                hoje?
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="lg:pr-64 text-left px-30"
              >
                Três momentos que vale a pena relembrar:
              </p>
              {/* Notes section */}
              <div data-aos="fade-up" data-aos-delay="500">
                {/* Register form section */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Insira o texto aqui"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Insira o texto aqui"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Insira o texto aqui"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  />
                </div>
                <SecondaryButton />
              </div>
            </div>
            {/* Image section */}
            <div className="z-30 order-1 sm:order-2">
              <img
                src={HeroImg}
                alt=""
                className="w-full sm:scale-100 -my-10  sm:translate-y-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloco;
