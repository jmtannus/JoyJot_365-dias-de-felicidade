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

const About = ({ HandlePopup }) => {
  return (
    <>
      <div style={BgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1
            data-aos="fade"
            className="pt-20 tracking-wider text-4xl font-semibold text-white text-center"
          >
            Sobre nós
          </h1>
          {/* card section */}
          <div
            data-aos="fade"
            data-aos-delay="300"
            className="bg-white/80 p-10 my-10"
          >
            No coração da nossa marca
            está uma profissional multifacetada. Sua abordagem integra moda,
            tecnologia e bem-estar, combinando paciência, carinho, criatividade
            e atenção aos detalhes. Cada projeto é conduzido com simpatia e
            educação, refletindo seu compromisso sincero com a qualidade de vida e a
            realização pessoal de todos que fazem parte do processo. 🌟
            <div className="pt-10 flex justify-center">
              <button
                onClick={HandlePopup}
                className="flex rounded-md justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
              >
                <FaUser />
                Minha Conta
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
