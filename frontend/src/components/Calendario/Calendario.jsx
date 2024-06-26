import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HeroImg from "./../../assets/hero.png";
import bg from "./../../assets/bg.png";

const BgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Calendario = () => {
  // Estados para os inputs e texto final: 
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  // Estado para a data selecionada:
  const [date, setDate] = useState(new Date());

  // Estado para armazenar os textos por data: 
  const [dateTexts, setDateTexts] = useState({});

  // Função para concatenar os textos: 
  const handleConcatenate = () => {
    const concatenatedText = `1- ${input1}\n2- ${input2}\n 3-${input3}`;
    const dateKey = date.toISOString().split('T')[0];
    setDateTexts({ ...dateTexts, [dateKey]: concatenatedText });
  };
  
  
  return (
    <>
 
      <div style={BgStyle} className="relative">
        <div className="container py-16 sm:py-0">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2  place-items-center min-h-[600px]">
            {/* text-content section */}
            <div className="space-y-4 text-Dark order-2 sm:order-1 mx-2">
              <h1 data-aos="fade-up" className="text-4xl text-center">
                {" "}<span className="text-white font-cursive text-7xl">
                Você se lembra 
                </span><br></br> daquele dia feliz?!
              </h1>
              
              <div data-aos="fade-up" data-aos-delay="500">
                {/* Register form section */}                
                <div className="mt-3">
              </div>

                {/* calendar section */}
              <div className="flex justify-between">
                <div className="w-2/3 p-4"><Calendar onChange={setDate} value={date} />
              </div>
                  
                {/* Caixa de texto */}
                <div className="w-2/3 p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-base font-semibold mb-2">Conteúdo do Dia:</p>
                <textarea className="h-40 p-2 border rounded" value={dateTexts[date.toISOString().split('T')[0]] || 'Nenhum texto para esta data'}
                readOnly/></div>
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

export default Calendario;
