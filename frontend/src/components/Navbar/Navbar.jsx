import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import Logo from "../../assets/logo.png";

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
    name: "Bloco",
    link: "/bloco",
  },
  {
    id: 4,
    name: "Calendário",
    link: "/calendario", 
  },
  {
    id: 5,
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

const Navbar = ({ HandlePopup, HandleRegister }) => {
  return (
    <>
      <div  className="bg-white shadow-md gap-36">
        <div data-aos="fade" className="container flex justify-center py-1 sm:py-3">
          {/* logo section */}
            <img src={Logo} alt="Logo" className="w-16 h-12 my-2" />
          <div className="font-bold text-3xl hidden lg:block">
            <p>JoyJot</p>
            <p className="text-secondary text-sm hidden lg:block ">
              365 dias de felicidade
            </p>
          </div>

          {/* navlinks section */}
          <div className="py-2 mx-2">
            <ul className="flex mx-2 my-1 items-center gap-6">
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
                    +Motivos
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>

                {/* Dropdown section */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
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
              <li className="flex items-center gap-2">
                <div className="flex items-center group">
                  <button
                    onClick={HandlePopup}
                    className="flex justify-center 
                  items-center gap-2 bg-secondary 
                  text-sm h-[35px] text-white px-2 
                  md:px-3 py-6 rounded-s-md hover:scale-105 duration-300"
                  >
                    <FaUser />
                    Minha Conta
                  </button>

                  {/* Register button section */}
                  <button
                    onClick={HandleRegister}
                    className="flex items-center gap-2 bg-secondaryDark 
                  text-sm h-[35px] text-white px-2 
                  md:px-3 py-6 rounded-e-md group-hover:!translate-x-2 duration-300"
                  >
                    Cadastre-se
                  </button>
                </div>
              </li>
            </ul>
            {/* Dropdown section and links */}
          </div>
        </div>
      </div>
      {/* Renderiza o componente Register condicionalmente: {showPopup && <Register onClose={setShowPopup} />}*/}
    </>
  );
};

export default Navbar;
