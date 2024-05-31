import React from "react";
import Balloons from "../../assets/png/balloons.png";
import Lifestyle from "../../assets/png/lifestyle.png";
import Cat from "../../assets/png/cat.png";
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

          {/* text content section */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
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
          <div className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton />
          </div>
        </div>
        {/* bg happy icons pngs */}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
            <img src={Balloons} alt="" className="max-w-[160px]"/>
        </div>
        <div className="absolute -botton-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
            <img src={Lifestyle} alt="" className="max-w-[220px]"/>
        </div>
        <div className="absolute top-32 -right-16 sm:bottom-0 sm:right-20 opacity-50 sm:opacity-100">
            <img src={Cat} alt="" className="max-w-[200px]"/>
        </div>
        <div className="hidden sm:block absolute bottom-0 right-0">
            <img src={Laugh_m} alt="" className="max-w-[180px]"/>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
            <img src={Smiley} alt="" className="max-w-[160px]"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
