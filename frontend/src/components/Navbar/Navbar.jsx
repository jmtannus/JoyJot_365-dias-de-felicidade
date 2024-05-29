import React from "react";
import { FaCaretDown } from "react-icons/fa";

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

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <div className="font-bold text-3xl">JoyJot</div>
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
                  href="#"
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
                <div>
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li>
                        <a
                          href="/#"
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
