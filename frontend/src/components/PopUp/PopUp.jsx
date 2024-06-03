import React from "react";

const PopUp = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {!showPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
              {/* header section */}
              Hello world!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
