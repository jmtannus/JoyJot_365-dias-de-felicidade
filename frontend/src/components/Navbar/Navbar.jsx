import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Sobre Nós",
    link: "/#",
  },
  {
    id: 3,
    name: "Calendário",
    link: "/#",
  },
  {
    id: 4,
    name: "Contate-nos",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetais",
    link: "/#",
  },
  {
    id: 2,
    name: "Frutas",
    link: "/#",
  },
  {
    id: 3,
    name: "Grãos",
    link: "/#",
  },
];

const Navbar = ({ HandlePopup }) => {
  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <div className="font-bold text-3xl">
            JoyJot{" "}
            <span className="text-sm justify-center text-secondary">
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
                    className="inline-block
                    hover:text-primary text-sm
                    font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* simple dropdown and links */}
              <li className="cursor-pointer group">
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
                    {DropdownLinks.map((id, name, link) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-sm inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {name}
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
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
                >
                  <FaUser />
                  Minha Conta
                </button>
              </li>
            </ul>
            {/* Dropdown section and links */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
