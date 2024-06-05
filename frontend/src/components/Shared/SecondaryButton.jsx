import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SecondaryButton = () => {
  return (
    <>
      <div className="flex items-center group">
        <button className="bg-secondary text-center w-3/12 h-[40px] text-white px-3 py-2 rounded-s-md">
          Enviar
        </button>
        <FaArrowRight className="inline-block rounded-e-md group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-secondaryDark text-white" />
      </div>
    </>
  );
};

export default SecondaryButton;
