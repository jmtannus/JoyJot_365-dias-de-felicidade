import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({ HandlePolicy, HandleTerms }) => {
  return (
    <>
      <div className="text-white mt-20">
        <div
          data-aos="fade-down"
          className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl"
        >
          {/* heading section */}
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            Entre em Contato Conosco!
          </h1>

          {/* grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            {/* address action */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaMapMarkerAlt className="text-5xl" />
              </div>
              <p>
                Rua Leonardo Mota, nº 545, apt. 1501
                <br /> CEP 60170-040, Fortaleza, Ceará, Brasil
              </p>
            </div>

            {/* email section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>jmtannus@gmail.com</p>
                <p>https://jmtannus.github.io/</p>
              </div>
            </div>

            {/* number section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div>
                <p>
                  <span className="font-bold">Central de Apoio:</span>
                  <br></br>+55 85 99992.0399
                </p>
                <p>
                  {" "}
                  <span className="font-bold">CVV:</span>
                  <br></br>+55 188
                </p>
                <p>
                  <span className="font-bold">
                    Ministério da Saúde - Atendimento às pessoas com transtornos
                    mentais:{" "}
                  </span>
                  +55 85 196{" "}
                </p>
              </div>
            </div>
          </div>
          {/* copyright section */}
          <div className="flex justify-between p-4 items-center">
            <p>@ 2024 JMT². Todos os Direitos Reservados</p>
            {/* Privacity Policy and Terms section */}
            <div className="flex items-center gap-6">
              <button
                className="py-1 hover:scale-105 duration-300"
                onClick={HandlePolicy}
              >
                Política de Privacidade
              </button>
              <button
                className="py-1 hover:scale-105 duration-300"
                onClick={HandleTerms}
              >
                Termos e Condições
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
