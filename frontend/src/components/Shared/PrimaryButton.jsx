import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = (HandlePopup) => {
  return (
    <>
      <div className="flex items-center group">
        <button onClick={HandlePopup} className="bg-primary h-[40px] text-white px-3 py-2 rounded-s-md">
          O que te fez feliz hoje?
        </button>
        <FaArrowRight className="inline-block rounded-e-md group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white" />
      </div>
    </>
  );
};

export default PrimaryButton;
