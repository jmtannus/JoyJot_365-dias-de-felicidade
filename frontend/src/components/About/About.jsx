import React from "react";
import HeroBg from "./../../assets/heroBg.png";
import Vector from "./../../assets/vector-wave.png";
import { FaUser } from "react-icons/fa";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = () => {
  return (
    <>
      <div style={BgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
            Sobre nós
          </h1>
          {/* card section */}
          <div className="bg-white/80 p-10 my-10">
            No coração da nossa marca está uma profissional multifacetada com
            vasta experiência e habilidades excepcionais em estilismo, design,
            desenvolvimento de programas e terapias inovadoras. Com 47 anos, mãe
            dedicada de um menino de 12, ela combina paciência, carinho,
            criatividade e atenção aos detalhes. Sua abordagem integra moda,
            tecnologia e bem-estar, apoiada por formações em estilismo, análise
            e desenvolvimento de programas, além de especializações em
            fullstack, MBA em gerência de marketing e técnicas de programação
            neurolinguística e hipnose. Cada projeto é conduzido com simpatia,
            educação e um toque divertido, refletindo seu compromisso sincero
            com o bem-estar e a satisfação das pessoas.
            <div className="pt-10 flex justify-center">
              <button className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                <FaUser />
                My Accont
              </button>
            </div>
          </div>
        </div>

        {/* wave vector */}
        <div className="absolute top-0 right-0 w-full">
          <img src={Vector} alt="" className="mx-auto" />
        </div>

      </div>
    </>
  );
};

export default About;
