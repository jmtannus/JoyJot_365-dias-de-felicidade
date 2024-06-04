import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { useRegisterPopup } from "../Register/Register";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Sobre",
    link: "https://buymeacoffee.com/jmtannus",
  },
  {
    id: 3,
    name: "Calendário",
    link: "/#",
  },
  {
    id: 4,
    name: "Contato",
    link: "https://www.linkedin.com/in/janaina-tannus-58b32229",
  },
];

const DropdownLinks = [
  {
    id: 5,
    name: "Alegria",
    link: "/#",
  },
  {
    id: 6,
    name: "Família",
    link: "/#",
  },
  {
    id: 7,
    name: "Amigos",
    link: "/#",
  },
];

const Navbar = ({ HandlePopup }) => {
  // Adiciona estado para controlar a visibilidade do popup de registro
  const { showPopup, setShowPopup } = useRegisterPopup();

  // Função para abrir o popup de registro
  const handleOpenRegisterPopup = () => {
    setShowPopup(true);
  };

  // Função para fechar o popup de registro
  const handleCloseRegisterPopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md gap-2">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <a href="#">
            <img src={Logo} alt="Logo" className="w-12" />
          </a>
          <div className="font-bold text-3xl">
            JoyJot{" "}
            <span className=" hidden md:blocktext-sm justify-center text-secondary">
              365 dias de felicidade{" "}
            </span>
            <span className="text-base justify-center text-yellow-400">:D</span>
          </div>

          {/* navlinks section */}
          <div>
            <ul className="flex items-center gap-10">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="sm:inline-block
                    hover:text-primary text-sm
                    font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* simple dropdown and links */}
              <li className="hidden md:block cursor-pointer group">
                <a
                  href="/#"
                  className="inline-block
                    hover:text-primary text-sm
                    font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>

                {/* Dropdown section */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((item, index) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="text-sm inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* Login button section */}
              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center 
                  items-center gap-2 bg-secondary 
                  text-base h-[35px] text-white px-2 
                  md:px-6 py-5 hover:scale-105 duration-300"
                >
                  <FaUser />
                  Minha Conta
                </button>
              </li>
            </ul>
            {/* Register button section */}
            <li>
              <button
                onClick={handleOpenRegisterPopup}
                className="flex justify-center 
                  items-center gap-2 bg-secondary 
                  text-base h-[35px] text-white px-2 
                  md:px-6 py-5 hover:scale-105 duration-300"
              >
                <FaUser />
                Cadastre-se
              </button>
            </li>
            {/* Dropdown section and links */}
          </div>
        </div>
      </div>
      {/* Renderiza o componente Register condicionalmente */}
      {showPopup && <Register onClose={handleCloseRegisterPopup} />}
    </>
  );
};

export default Navbar;
