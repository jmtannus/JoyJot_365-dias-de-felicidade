import React, { useState } from "react";
import HeroImg from "./../../assets/hero.png";
import HeroBg from "./../../assets/heroBg.png";
import { FaArrowRight } from "react-icons/fa";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Bloco = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [finalText, setFinalText] = useState("");

  const handleConcatenate = () => {
    const concatenatedText = `1: ${input1}\n2: ${input2}\n3: ${input3}`;
    setFinalText(concatenatedText);
  };

  return (
    <>
      <div style={BgStyle} className="relative">
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
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    placeholder="Insira o texto aqui"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4 p-1"
                  />
                  <input
                    type="text"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    placeholder="Insira o texto aqui"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  />
                  <input
                    type="text"
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                    placeholder="Insira o texto aqui"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  />
                </div>
                <div className="flex items-center group">
                  <button className="bg-secondary text-center w-3/12 h-[40px] text-white px-3 py-2 rounded-s-md"
                    onClick={handleConcatenate}> 
                    Enviar
                    </button>
                    <FaArrowRight className="inline-block rounded-e-md group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-secondaryDark text-white" />
                </div>

                {/* Salvando em uma caixa de texto após clicar em um botão */}
                <div className="mt-4">
                  <textarea
                    className="border p-1 w-full"
                    rows="4"
                    value={finalText}
                    readOnly
                  />
                </div>
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
