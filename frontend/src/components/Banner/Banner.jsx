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
                <p>
                  A prática diária de escrever sobre coisas que nos fizeram
                  feliz ajuda a criar um hábito de focar no positivo. Isso pode
                  levar a uma mudança gradual na perspectiva e atitude em
                  relação à vida. .Escrever sobre suas experiências pode nos
                  ajudar a processar nossos sentimentos, a entender melhor a nós
                  mesmos e a nos comunicarmos com os outros.
                </p>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
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
        <div>
            <img src={} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
