import React from "react";
import { FaHeartbeat, FaComments , FaLightbulb, FaChild  } from "react-icons/fa";

const Benefits = () => {
  return (
    <>
      <div className="py-14 md:py-28 bg-gray-50">
        <div className="container">
          {/* heading section */}
          <h1 className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">
            {""} Benefícios de prestar atenção à nossa volta e escrever o que nos fez sorrir, diariamente:
          </h1>
          {/* card section */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              {/* 1st card */}
              <div className="text-center flex justify-center items-center flex-col gap-1 sm:gap-2 px-2">
                <p className="text-xl text-primary font-semibold">
                  Redução da Ansiedade:
                </p>
                <p className="text-dark/70 font-semibold">
                  A escrita ajuda a atenuar a ansiedade, pois ao colocar as
                  palavras no papel, você se concentra nessa função, o que ajuda
                  a abrandar o ritmo cardíaco e a regular a respiração.
                </p>
                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                  ...
                </p>
                <FaHeartbeat className="text-5xl text-primary" />
              </div>

              {/* 2st card */}
              <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
                <FaComments  className="text-5xl text-secondary" />{" "}
                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                  ...
                </p>
                <p className="text-xl text-secondary font-semibold">
                  Melhora da comunicação:
                </p>
                <p className="text-dark/70 font-semibold">
                  A escrita melhora a comunicação, pois ajuda a formular
                  pensamentos mais complexos e a transmiti-los aos outros com
                  maior facilidade.
                </p>
              </div>
              {/* 3st card */}
              <div className="text-center flex justify-center items-center flex-col gap-1 sm:gap-2 px-2">
                <p className="text-xl text-primary font-semibold">
                  Promoção da criatividade:
                </p>
                <p className="text-dark/70 font-semibold">
                  A escrita promove a criatividade, pois está associada à
                  capacidade de resolução de problemas, à procura ativa de
                  ideias e das relações entre elas, e à materialização de ideias
                  que surgiram na imaginação.
                </p>
                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                  ...
                </p>
                <FaLightbulb className="text-5xl text-primary" />
              </div>

              {/* 4st card */}
              <div className="text-center flex justify-center items-center flex-col gap-1 px-3">
                <FaChild  className="text-5xl text-secondary" />{" "}
                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                  ...
                </p>
                <p className="text-xl text-secondary font-semibold">
                  Aumento da felicidade e da atenção plena:
                </p>
                <p className="text-dark/70 font-semibold">
                  Escrever sobre coisas que te fizeram feliz permite desfrutar
                  do que você tem, em vez de se concentrar no que lhe falta.
                  Além disso, essa prática permite apreciar melhor o momento
                  presente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
