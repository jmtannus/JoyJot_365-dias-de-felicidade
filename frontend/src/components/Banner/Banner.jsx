import React from "react";
import binoculars from "../../assets/png/binoculars.png";
import iSeeYou from "../../assets/png/iSeeYou.png";
import happyDog from "../../assets/png/happyDog.png";
import dogPen from "../../assets/png/dogPen.png";
import cat from "../../assets/png/cat.png";
import PrimaryButton from "./../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div className="relative z-20">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
          >
            Reprograme sua vida! Porque essa técnica funciona?
          </h1>

          {/* text content section */}
          <div className="space-y-10">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
            >
              <div>
                <p>
                  {""}Nós sabemos disso porque
                  <span className="text-primary"> testamos e aprovamos</span>!
                </p>
                <p>
                  Passamos por momentos onde não enxergamos algo bom na nossa
                  vida, onde sentimos um vazio no peito e de repente só o que
                  fazemos é reclamar de tudo.
                  {""} Quando estamos assim,{" "}
                  <span className="text-primary">
                    {" "}
                    o alerta vermelho dentro de nós{" "}
                  </span>
                  deve ser acionado.{" "}
                </p>
              </div>
              <div></div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
            >
              <div></div>
              <div>
                <p>
                  A prática diária de escrever sobre coisas que nos fizeram
                  feliz ajuda a criar um hábito de focar no positivo. Isso pode
                  levar a uma mudança gradual na perspectiva e atitude em
                  relação à vida. .Escrever sobre suas experiências pode nos
                  ajudar a processar nossos sentimentos, a entender melhor a nós
                  mesmos e a nos comunicarmos com os outros.
                </p>
              </div>
            </div>
          </div>

          {/* button content section */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="0"
            className="flex justify-center mt-10 sm:mt-14"
          >
            <PrimaryButton />
          </div>
        </div>
        {/* bg happy icons pngs */}
        <div data-aos="fade-right" className="absolute top-6 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img data-aos="fade-right" src={binoculars} alt="" className="max-w-[160px]" />
        </div>
        <div data-aos="fade-right" 
          className="absolute -botton-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
          <img src={iSeeYou} alt="" className="max-w-[250px]" />
        </div>
        <div data-aos="fade-left" className="absolute top-28 -right-16 sm:bottom-0 sm:right-20 opacity-50 sm:opacity-100">
          <img src={happyDog} alt="" className="max-w-[300px]" />
        </div>
        <div data-aos="fade-left" className="hidden sm:block absolute -bottom-5 right-20">
          <img src={dogPen} alt="" className="max-w-[280px]" />
        </div>
        <div data-aos="fade" className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
          <img src={cat} alt="" className="max-w-[320px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
